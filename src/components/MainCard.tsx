import { CSSProperties, ReactNode, Ref } from 'react';

// material-ui
import { SxProps, Theme } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';
import CardContent, { CardContentProps } from '@mui/material/CardContent';
import CardHeader, { CardHeaderProps } from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// project-imports
import Highlighter from 'components/third-party/Highlighter';
import useConfig from 'hooks/useConfig';

// header style
const headerSX = { p: 2.5, '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' } };

export interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children?: ReactNode;
  subheader?: ReactNode | string;
  style?: CSSProperties;
  content?: boolean;
  contentSX?: CardContentProps['sx'];
  darkTitle?: boolean;
  divider?: boolean;
  sx?: CardProps['sx'];
  secondary?: CardHeaderProps['action'];
  shadow?: string;
  elevation?: number;
  title?: ReactNode | string;
  codeHighlight?: boolean;
  codeString?: string;
  modal?: boolean;
  onClick?: () => void;
  ref?: Ref<HTMLDivElement>;
}

// ==============================|| CUSTOM - MAIN CARD ||============================== //

export default function MainCard({
  border = true,
  boxShadow,
  children,
  subheader,
  content = true,
  contentSX = {},
  darkTitle,
  divider = true,
  elevation,
  secondary,
  shadow,
  sx = {},
  title,
  codeHighlight = false,
  codeString,
  modal = false,
  ref,
  ...others
}: MainCardProps) {
  const { themeContrast } = useConfig();

  return (
    <Card
      elevation={elevation || 0}
      ref={ref}
      {...others}
      sx={(theme) => {
        const style: SxProps<Theme> = {
          position: modal ? 'absolute' : 'relative',
          borderRadius: 1.5,
          ...(border && { border: `1px solid ${theme.palette.divider}` }),
          ...(((themeContrast && boxShadow) || shadow) && { boxShadow: shadow ? shadow : theme.customShadows.z1 }),
          ...(codeHighlight && {
            '& pre': {
              m: 0,
              p: '12px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem'
            }
          }),
          ...(modal && {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: `calc(100% - 50px)`, sm: 'auto' },
            '& .MuiCardContent-root': {
              overflowY: 'auto',
              minHeight: 'auto',
              maxHeight: `calc(100vh - 200px)`
            }
          })
        };

        const userSx = typeof sx === 'function' ? sx(theme) : sx;
        return { ...style, ...userSx };
      }}
    >
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader sx={headerSX} title={title} action={secondary} subheader={subheader} slotProps={{ title: { variant: 'subtitle1' } }} />
      )}
      {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}

      {/* card footer - clipboard & highlighter  */}
      {codeString && (
        <>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Highlighter codeString={codeString} codeHighlight={codeHighlight} />
        </>
      )}
    </Card>
  );
}
