import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

// assets
import { SearchNormal } from 'iconsax-reactjs';

// types
interface Props extends OutlinedInputProps {
  value: string | number;
  onFilterChange: (value: string | number) => void;
  debounce?: number;
}

// ==============================|| FILTER - INPUT ||============================== //

export default function DebouncedInput({
  value: initialValue,
  onFilterChange,
  debounce = 500,
  size,
  startAdornment = <SearchNormal size="18" />,
  ...props
}: Props) {
  const [value, setValue] = useState<number | string>(initialValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <OutlinedInput
      value={value}
      onChange={handleInputChange}
      sx={{ minWidth: 100 }}
      {...(startAdornment && { startAdornment })}
      {...(size && { size })}
      {...props}
    />
  );
}
