import { useState, useCallback, useMemo, memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// third-party
import { Map, Layer, Source, LayerProps, MapMouseEvent } from 'react-map-gl/mapbox';

// project-imports
import MapControl from 'components/third-party/map/MapControl';
import MapPopup from 'components/third-party/map/MapPopup';

// types
import { MapBoxProps } from 'types/map';

// ==============================|| HIGHLIGHT BY FILTER ||============================== //

function HighlightByFilter({ ...other }: MapBoxProps) {
  const theme = useTheme();

  // @ts-ignore
  const countiesLayer: LayerProps = {
    id: 'counties',
    type: 'fill',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.grey[900],
      'fill-color': theme.palette.grey[900],
      'fill-opacity': 0.12
    }
  };

  const highlightLayer: LayerProps = {
    id: 'counties-highlighted',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.error.main,
      'fill-color': theme.palette.error.main,
      'fill-opacity': 0.48
    }
  };

  const [hoverInfo, setHoverInfo] = useState<{
    countyName: string;
    longitude: number;
    latitude: number;
  } | null>(null);

  const onHover = useCallback((event: MapMouseEvent) => {
    const county = event.features && event.features[0];

    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties?.COUNTY
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

  const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);

  return (
    <Map
      initialViewState={{
        latitude: 38.88,
        longitude: -98,
        zoom: 3
      }}
      minZoom={2}
      onMouseMove={onHover}
      interactiveLayerIds={['counties']}
      {...other}
    >
      <MapControl />
      <Source type="vector" url="mapbox://mapbox.82pkq93d">
        <Layer beforeId="waterway-label" {...countiesLayer} />
        {/* @ts-ignore */}
        <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
      </Source>
      {selectedCounty && hoverInfo && (
        <MapPopup
          sx={(theme) => ({
            '.mapboxgl-popup-tip': {
              borderTopColor: `${'background.paper'} !important`,
              ...theme.applyStyles('dark', { borderTopColor: `${'background.default'} !important` })
            }
          })}
          longitude={hoverInfo.longitude}
          latitude={hoverInfo.latitude}
          closeButton={false}
        >
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {selectedCounty}
          </Typography>
        </MapPopup>
      )}
    </Map>
  );
}

export default memo(HighlightByFilter);
