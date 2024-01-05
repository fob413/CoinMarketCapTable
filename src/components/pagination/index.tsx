import { Pagination as BasicPagination } from '@mantine/core';


type Props = {
    total: number;
    onChange: (event: any) => void;
}

export const Pagination = ({ total, onChange }: Props) => {
    return (
        <BasicPagination total={total} onChange={onChange} radius={'xl'} withEdges data-testid={'pagination-component'} />
    )
};
