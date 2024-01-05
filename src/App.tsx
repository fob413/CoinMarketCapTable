import React from 'react';
import { Table } from "./components/table";
import { useGetCryptoCurrency } from "./hooks/queries/useGetCryptoCurrency";
import './App.css';

function App() {
  const { data } = useGetCryptoCurrency();
  console.log('>>>> ', data);

  return (
    <div className="App" data-testid='App'>
        <Table />
    </div>
  );
}

export default App;
