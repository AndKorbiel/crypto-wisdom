import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { formatDate, formatPriceToCurrency } from '../utils';
import { PercentageValue } from './PercentageValue';
import { CryptoData } from '../types';
import { StyledTableCell, StyledTableRow } from './CryptoDataTable.styled';
import { useMemo } from 'react';

type CryptoDataTableProps = {
  activeFilter: string;
  cryptoData: CryptoData[];
};

export const CryptoDataTable = ({
  activeFilter,
  cryptoData,
}: CryptoDataTableProps) => {
  const filteredData = useMemo(() => {
    return activeFilter !== ''
      ? [...cryptoData].filter((data) => data.id === activeFilter)
      : cryptoData;
  }, [activeFilter, cryptoData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ background: '#f5f5f5' }}>
          <StyledTableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>1h %</StyledTableCell>
            <StyledTableCell>24h %</StyledTableCell>
            <StyledTableCell>7d %</StyledTableCell>
            <StyledTableCell>Market Cap</StyledTableCell>
            <StyledTableCell>Volume (24h)</StyledTableCell>
            <StyledTableCell>Last Update</StyledTableCell>
          </StyledTableRow>
        </TableHead>

        <TableBody>
          {filteredData.map(({ name, slug, quote, last_updated }, index) => (
            <TableRow key={name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <b>{name}</b> ({slug})
              </TableCell>
              <StyledTableCell>
                <b>{formatPriceToCurrency(quote.USD.price)}</b>
              </StyledTableCell>
              <StyledTableCell>
                <PercentageValue value={quote.USD.percent_change_1h} />
              </StyledTableCell>
              <StyledTableCell>
                <PercentageValue value={quote.USD.percent_change_24h} />
              </StyledTableCell>
              <StyledTableCell>
                <PercentageValue value={quote.USD.percent_change_7d} />
              </StyledTableCell>
              <StyledTableCell>
                {formatPriceToCurrency(quote.USD.market_cap)}
              </StyledTableCell>
              <StyledTableCell>
                {formatPriceToCurrency(quote.USD.volume_24h)}
              </StyledTableCell>
              <StyledTableCell>{formatDate(last_updated)}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
