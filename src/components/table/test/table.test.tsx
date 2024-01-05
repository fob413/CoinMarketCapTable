import { Table } from '../index';
import { render, screen, cleanup } from "../../../test-utils";


afterEach(cleanup);

describe('Table', () => {
    test('should render', () => {
       render(<Table />);
       expect(screen.getByTestId('table-component')).toBeInTheDocument();
    });
})
