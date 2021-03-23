import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../../components/App/App";

describe(`react-router test`, () => {
    test('should  render the home page', () => {
        const container = mount(<MemoryRouter initialEntries={["/news"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('news_page')).not.toBe(-1);
    });
    test('should  render the not_found page', () => {
        const container = mount(<MemoryRouter initialEntries={["/some_underfined_url"]}>
            <App />
        </MemoryRouter>);
        expect(container.debug().search('error_page')).not.toBe(-1);
    });
});
