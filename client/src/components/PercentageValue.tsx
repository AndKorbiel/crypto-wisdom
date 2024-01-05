import { Grid, Typography, styled } from '@mui/material';
import { formatNumber } from '../utils';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const GrowthLabel = styled(Typography)`
  color: green;
`;

const DeclineLabel = styled(Typography)`
  color: red;
`;

type PercentageValueProps = {
  value: number;
};

export const PercentageValue = ({ value }: PercentageValueProps) => {
  const fixedValue = formatNumber(value);

  if (fixedValue > 0) {
    return (
      <Grid container justifyContent="flex-end">
        <ArrowDropUpIcon sx={{ color: 'green' }} />
        <GrowthLabel>{fixedValue} %</GrowthLabel>
      </Grid>
    );
  }

  if (fixedValue < 0) {
    return (
      <Grid container justifyContent="flex-end">
        <ArrowDropDownIcon sx={{ color: 'red' }} />
        <DeclineLabel>{fixedValue} %</DeclineLabel>
      </Grid>
    );
  }

  return <Typography>{fixedValue} %</Typography>;
};
