import { Pagination } from "../index";
import { render, screen, cleanup } from "../../../test-utils";


afterEach(cleanup);

describe("Pagination", () => {
    test("should render when there's a total count greater than 0", () => {
        render(
            <Pagination total={10} onChange={(e) => {}} />
        );
        expect(screen.getByTestId("pagination-component")).toBeInTheDocument();
    } );

    test("should not render when there's a total count less than 1", () => {
        render(
            <Pagination total={0} onChange={(e) => {}} />
        );
        expect(screen.queryByTestId("pagination-component")).toBeNull();
    } );
})
