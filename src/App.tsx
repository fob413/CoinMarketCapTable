import React, { useMemo, useState } from 'react';
import { Table } from "./components/table";
import { useGetCryptoCurrency } from "./hooks/queries/useGetCryptoCurrency";
import { Pagination } from "./components/pagination";
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const { data } = useGetCryptoCurrency(page);

  const cryptoCurrencyData = useMemo(() => {
    if (!data && !data?.hasOwnProperty('data')) return [];

    setTotal(data?.status?.total_count);

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
        <Pagination total={total} onChange={setPage} />
    </div>
  );
}

export default App;
