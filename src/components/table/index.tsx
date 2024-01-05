import { Table as BasicTable } from "@mantine/core";
import { TableRow } from "../table-row";

import classes from './Table.module.css';


type Props = {

}

export const Table = ({}: Props) => {
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
                    
                </BasicTable.Tbody>
            </BasicTable>
        </BasicTable.ScrollContainer>
    )
}
