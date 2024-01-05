import React, { useMemo } from 'react';
import { Table } from "./components/table";
import { useGetCryptoCurrency } from "./hooks/queries/useGetCryptoCurrency";
import './App.css';

function App() {
  const { data } = useGetCryptoCurrency();

  const cryptoCurrencyData = useMemo(() => {
    if (!data && !data?.hasOwnProperty('data')) return [];

    return data?.data?.map((row: any | unknown) => {
      return {
        id: row?.id,
        name: row?.name,
        price: row?.quote?.USD?.price,
        marketCap: row?.quote?.USD?.market_cap,
        circulatingSupply: row?.circulating_supply,
        change: row?.quote?.USD?.percent_change_24h,
        symbol: row?.symbol
      }
    })
  }, [data]);

  return (
    <div className="App" data-testid='App'>
        <Table data={cryptoCurrencyData} />
    </div>
  );
}

export default App;
