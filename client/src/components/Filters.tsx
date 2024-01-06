import { Autocomplete, Grid, Paper, TextField } from '@mui/material';
import { CryptoData } from '../types';
import { Dispatch, SetStateAction } from 'react';

type FiltersProps = {
  options: CryptoData[];
  setActiveFilter: Dispatch<SetStateAction<string>>;
};

export const Filters = ({ options, setActiveFilter }: FiltersProps) => {
  return (
    <Grid
      container
      margin={'dense'}
      sx={{ marginBottom: '1em' }}
      justifyContent="flex-end"
    >
      <Paper>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter Crypto by name" />
          )}
          onChange={(_, value) =>
            value ? setActiveFilter(value.id) : setActiveFilter('')
          }
        />
      </Paper>
    </Grid>
  );
};
