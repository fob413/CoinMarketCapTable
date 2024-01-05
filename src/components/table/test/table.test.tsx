import { Table } from "../index";
import { render, screen, cleanup } from "../../../test-utils";


afterEach(cleanup);

describe('Table', () => {
    test('should render', () => {
       render(<Table />);
       expect(screen.getByTestId('table-component')).toBeInTheDocument();
    });

    test('should render with the appropriate headers', () => {
       render(<Table />);
       expect(screen.getByText('Name')).toBeInTheDocument();
       expect(screen.getByText('Price')).toBeInTheDocument();
       expect(screen.getByText('Market Cap')).toBeInTheDocument();
       expect(screen.getByText('Circulating Supply')).toBeInTheDocument();
       expect(screen.getByText('Change %')).toBeInTheDocument();
    });
})
