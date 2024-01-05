export type CryptoApi = {
  id: string;
  name: string;
  max_suply: number;
  quote: {
    USD: CryptoQuoteAPI;
  };
  slug: string;
};

export type CryptoQuoteAPI = {
  market_cap: number;
  price: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  volume_24h: number;
};
