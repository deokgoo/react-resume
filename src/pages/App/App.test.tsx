import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container: null | HTMLElement = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if(!container) return;
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('test app', () => {
  it('header title check', () => {
    act(() => {
      render(<App />, container);
    });
    expect(container?.textContent).toEqual(expect.stringContaining('Learn React'));
  });
})
