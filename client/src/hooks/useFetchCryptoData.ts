import axios from 'axios';
import { CryptoData } from '../types';
import { useEffect, useState } from 'react';

export const useFetchCryptoData = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const result = await axios.get('/data/get');
      const cryptoData: CryptoData[] = result.data.data;

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
