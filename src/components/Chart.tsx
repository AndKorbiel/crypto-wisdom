import { useFetchCryptoData } from '../hooks';
import { formatNumber, formatPriceToCurrency } from '../utils';

export const Chart = () => {
  const { cryptoData, error, isLoading } = useFetchCryptoData();

  if (isLoading) return <>Loading...</>;
  if (error || !cryptoData) return <>No data ;(</>;

  return (
    <>
      Your stats
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Price</td>
            <td>1h %</td>
            <td>24h %</td>
            <td>7d %</td>
            <td>Market Cap</td>
            <td>Volume (24h)</td>
          </tr>
        </thead>

        <tbody>
          {cryptoData.map(({ name, slug, quote }, index) => (
            <tr key={name}>
              <td>{index + 1}</td>
              <td>
                {name} ({slug})
              </td>
              <td>{formatPriceToCurrency(quote.USD.price)}</td>
              <td>{formatNumber(quote.USD.percent_change_1h)} %</td>
              <td>{formatNumber(quote.USD.percent_change_24h)} %</td>
              <td>{formatNumber(quote.USD.percent_change_7d)} %</td>
              <td>{formatPriceToCurrency(quote.USD.market_cap)}</td>
              <td>{formatPriceToCurrency(quote.USD.volume_24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
