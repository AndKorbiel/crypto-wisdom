export type CryptoData = {
  id: string;
  last_updated: string;
  name: string;
  max_suply: number;
  quote: {
    USD: CryptoQuote;
  };
  slug: string;
};

export type CryptoQuote = {
  market_cap: number;
  price: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  volume_24h: number;
};
