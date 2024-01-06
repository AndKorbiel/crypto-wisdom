import { Typography } from '@mui/material';
import { useFetchCryptoData } from '../hooks';
import { CryptoDataTable } from './CryptoDataTable';
import { Filters } from './Filters';
import { useState } from 'react';

export const CryptoData = () => {
  const { cryptoData, error, isLoading } = useFetchCryptoData();
  const [activeFilter, setActiveFilter] = useState<string>('');

  if (isLoading) return <Typography variant="h3">Loading...</Typography>;

  if (error || !cryptoData)
    return <Typography variant="h3">No data ;(</Typography>;

  console.log(activeFilter);

  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: '0.5em' }}>
        Current Cryptocurrency stats
      </Typography>

      <Filters options={cryptoData} setActiveFilter={setActiveFilter} />
      <CryptoDataTable cryptoData={cryptoData} activeFilter={activeFilter} />
    </>
  );
};
