import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import ReactDOM from 'react-dom';
import App from "../../components/App/App";
import Error from "../../components/Error/Error";

describe(`rendering components`, () => {
    test(`renders App without Nav`, () => {
        const container = mount(<MemoryRouter initialEntries={["/"]}> <App /> </MemoryRouter>);
        expect(container.debug().search('header_page'))
    });

    test(`renders App without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter initialEntries={["/"]}> <App /> </MemoryRouter>, div);
    });

    test(`renders error`, () => {
        const wrapper = mount(<Error error={'some_error'} />);
        expect(wrapper.text()).toEqual('some_error');
    });
});
