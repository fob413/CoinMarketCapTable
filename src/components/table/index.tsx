import { Table as BasicTable } from "@mantine/core";
import { TableRow } from "../table-row";
import { CryptoCurrencyProps } from '../../utils/types';

import classes from './Table.module.css';


type Props = {
    data: CryptoCurrencyProps[];
}

export const Table = ({ data }: Props) => {
    return (
        <BasicTable.ScrollContainer minWidth={800} className={classes.table} data-testid='table-component'>
            <BasicTable verticalSpacing={'lg'}>
                <BasicTable.Thead>
                    <BasicTable.Tr>
                        <BasicTable.Th>Name</BasicTable.Th>
                        <BasicTable.Th>Price</BasicTable.Th>
                        <BasicTable.Th>Market Cap</BasicTable.Th>
                        <BasicTable.Th>Circulating Supply</BasicTable.Th>
                        <BasicTable.Th>Change %</BasicTable.Th>
                    </BasicTable.Tr>
                </BasicTable.Thead>

                <BasicTable.Tbody>
                    {
                        data.map((row) => (
                            <TableRow
                                name={row.name}
                                price={row.price}
                                marketCap={row.marketCap}
                                circulatingSupply={row.circulatingSupply}
                                change={row.change}
                                symbol={row.symbol}
                                key={row.id}
                            />
                        ))
                    }
                </BasicTable.Tbody>
            </BasicTable>
        </BasicTable.ScrollContainer>
    )
}
