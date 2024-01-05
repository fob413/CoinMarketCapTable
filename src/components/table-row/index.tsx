import { Table, Text, rem } from "@mantine/core";
import { IconCoinBitcoin } from "@tabler/icons-react";
import classes from './TableRow.module.css';


type Props = {
    name: string;
    price: string;
    marketCap: string;
    circulatingSupply: string;
    change: string;
    symbol: string;
}

export const TableRow = ({
    name, price, marketCap, circulatingSupply, change, symbol
}: Props) => {
    return (
        <Table.Tr data-testid={'table-row-component'}>
            <Table.Td>
                <div className={classes.name}>
                    <IconCoinBitcoin
                        style={{ width: rem(80)}}
                        size={50}
                        color="var(--mantine-color-blue-filled)"
                    />

                    <div className={classes.nameContainer}>
                        <Text size={'md'}>{name}</Text>
                        <Text size={'md'}>{symbol}</Text>
                    </div>
                </div>
            </Table.Td>

            <Table.Td>{price}</Table.Td>
            <Table.Td>{marketCap}</Table.Td>
            <Table.Td>{circulatingSupply}</Table.Td>
            <Table.Td>{change}</Table.Td>
        </Table.Tr>
    )
}
