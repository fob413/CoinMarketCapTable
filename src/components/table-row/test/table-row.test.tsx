import { TableRow } from "../index";
import { Table } from "../../table";
import { render, screen, cleanup } from "../../../test-utils";


afterEach(cleanup);

const data = [
    {
        id: 1,
        name: 'Bitcoin',
        price: '4331.75',
        marketCap: '4331.75',
        circulatingSupply: '4331.75',
        change: '4.75%',
        symbol: 'BTN'
    }
]

describe("TableRow", () => {
    test("should render within the table", () => {
        render(
            <Table data={data} />
        );
        expect(screen.getByTestId('table-row-component')).toBeInTheDocument();
    });

    test("should render with the data provided to the table", () => {
        render(
            <Table data={data} />
        );
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
        expect(screen.getByText('BTN')).toBeInTheDocument();
        expect(screen.getByText('4.75%')).toBeInTheDocument();
    })
})
