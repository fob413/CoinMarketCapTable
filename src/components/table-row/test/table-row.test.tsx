import { TableRow } from "../index";
import { Table } from "../../table";
import { render, screen, cleanup } from "../../../test-utils";


afterEach(cleanup);

describe("TableRow", () => {
    test("should render within the table", () => {
        render(
            <Table />
        );
        expect(screen.getByTestId('table-row-component')).toBeInTheDocument();
    })
})
