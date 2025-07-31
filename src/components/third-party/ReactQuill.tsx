// material-ui
import Box, { BoxProps } from '@mui/material/Box';

// third-party
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// project-imports
import { ThemeDirection } from 'config';
import useConfig from 'hooks/useConfig';

interface Props {
  value?: string;
  borderRadius?: number;
  editorMinHeight?: number;
  onChange?: (value: string) => void;
  sx?: BoxProps['sx'];
}

// ==============================|| QUILL EDITOR ||============================== //

export default function ReactQuillDemo({ value, borderRadius = 0.5, editorMinHeight = 135, onChange, sx = {} }: Props) {
  const { themeDirection } = useConfig();
  return (
    <Box
      sx={[
        (theme) => ({
          '& .quill': {
            bgcolor: 'background.paper',
            borderRadius: borderRadius,
            '& .ql-toolbar': {
              bgcolor: 'background.default',
              borderColor: theme.palette.secondary.light,
              borderTopLeftRadius: theme.spacing(borderRadius),
              borderTopRightRadius: theme.spacing(borderRadius),
              '& .ql-stroke': { stroke: theme.palette.text.secondary },
              '& .ql-picker': { color: 'text.secondary' }
            },
            '& .ql-snow .ql-picker-options': {
              backgroundColor: 'background.paper'
            },
            '& .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label, .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options':
              {
                borderColor: theme.palette.secondary.light
              },
            '& .ql-snow .ql-picker': {
              ...theme.applyStyles('dark', { color: 'secondary.500' })
            },
            '& .ql-snow .ql-stroke': {
              ...theme.applyStyles('dark', { stroke: theme.palette.secondary[500] })
            },
            '& .ql-container': {
              borderColor: `${theme.palette.secondary.light} !important`,
              borderBottomLeftRadius: theme.spacing(borderRadius),
              borderBottomRightRadius: theme.spacing(borderRadius),
              '& .ql-editor': { minHeight: editorMinHeight }
            },
            '& .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg': {
              position: themeDirection === ThemeDirection.RTL ? 'initial' : 'absolute'
            }
          }
        }),
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <ReactQuill {...(value && { value })} {...(onChange && { onChange })} />
    </Box>
  );
}
