import axios from 'axios';
import { CryptoApi } from '../types';
import { useEffect, useState } from 'react';

export const useFetchCryptoData = () => {
  const [cryptoData, setCryptoData] = useState<CryptoApi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const result = await axios.get('/data');
      const cryptoData: CryptoApi[] = result.data.data;

      console.log('cryptoData');
      console.log(cryptoData);

      setCryptoData(cryptoData);
    } catch (ex) {
      console.log(ex);
      setError('Failed to fetch Crypto Data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return { cryptoData, error, isLoading };
};
