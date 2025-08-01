import { useState, memo } from 'react';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import Map from 'react-map-gl/mapbox';

// project-imports
import MapControl from 'components/third-party/map/MapControl';
import MapMarker from 'components/third-party/map/MapMarker';
import MapPopup from 'components/third-party/map/MapPopup';

// types
import { MapBoxProps } from 'types/map';

type CountryProps = {
  name: string;
  capital: string;
  latlng: number[];
  timezones: string[];
  country_code: string;
};

interface Props extends MapBoxProps {
  data: CountryProps[];
}

// ==============================|| MAPBOX - MARKERS AND POPUP ||============================== //

function MarkersPopups({ data, ...other }: Props) {
  const [popupInfo, setPopupInfo] = useState<CountryProps | null>(null);

  return (
    <Map
      initialViewState={{
        latitude: 21.2335611,
        longitude: 72.8636084,
        zoom: 2
      }}
      {...other}
    >
      <MapControl />
      {data.map((city, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={city.latlng[0]}
          longitude={city.latlng[1]}
          onClick={(event: any) => {
            event.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        />
      ))}

      {popupInfo && (
        <MapPopup latitude={popupInfo.latlng[0]} longitude={popupInfo.latlng[1]} onClose={() => setPopupInfo(null)}>
          <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                height: 18,
                minWidth: 28,
                mr: 1,
                borderRadius: 2,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(https://flagcdn.com/w320/${popupInfo.country_code.toLowerCase()}.png)`
              }}
            />
            <Typography variant="subtitle2">{popupInfo.name}</Typography>
          </Box>
          <Stack sx={{ gap: 0.5 }}>
            <Typography variant="caption">Timezones: {popupInfo.timezones}</Typography>
            <Typography variant="caption">Lat: {popupInfo.latlng[0]}</Typography>
            <Typography variant="caption">Long: {popupInfo.latlng[1]}</Typography>
          </Stack>
        </MapPopup>
      )}
    </Map>
  );
}

export default memo(MarkersPopups);
