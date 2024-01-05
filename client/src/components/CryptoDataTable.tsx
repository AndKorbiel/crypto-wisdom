import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { formatPriceToCurrency } from '../utils';
import { PercentageValue } from './PercentageValue';
import { CryptoData } from '../types';

const StyledTableRow = styled(TableRow)`
  th {
    font-weight: bold;
  }
`;

type CryptoDataTableProps = {
  cryptoData: CryptoData[];
};

export const CryptoDataTable = ({ cryptoData }: CryptoDataTableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ background: '#f5f5f5' }}>
            <StyledTableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">1h %</TableCell>
              <TableCell align="right">24h %</TableCell>
              <TableCell align="right">7d %</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Volume (24h)</TableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody>
            {cryptoData.map(({ name, slug, quote }, index) => (
              <TableRow key={name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {name} ({slug})
                </TableCell>
                <TableCell align="right">
                  {formatPriceToCurrency(quote.USD.price)}
                </TableCell>
                <TableCell align="right">
                  <PercentageValue value={quote.USD.percent_change_1h} />
                </TableCell>
                <TableCell align="right">
                  <PercentageValue value={quote.USD.percent_change_24h} />
                </TableCell>
                <TableCell align="right">
                  <PercentageValue value={quote.USD.percent_change_7d} />
                </TableCell>
                <TableCell align="right">
                  {formatPriceToCurrency(quote.USD.market_cap)}
                </TableCell>
                <TableCell align="right">
                  {formatPriceToCurrency(quote.USD.volume_24h)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
