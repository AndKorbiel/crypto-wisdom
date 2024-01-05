import { Typography } from '@mui/material';
import { useFetchCryptoData } from '../hooks';
import { CryptoDataTable } from './CryptoDataTable';

export const CryptoData = () => {
  const { cryptoData, error, isLoading } = useFetchCryptoData();

  if (isLoading) return <Typography variant="h3">Loading...</Typography>;

  if (error || !cryptoData)
    return <Typography variant="h3">No data ;(</Typography>;

  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: '0.5em' }}>
        Current Cryptocurrency stats
      </Typography>

      <CryptoDataTable cryptoData={cryptoData} />
    </>
  );
};
