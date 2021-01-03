import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Landing from './landing';

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

describe('Landing Component test', () => {
  it('title letter test', () => {
    act(() => {
      render(<Landing/>, container);
    });
    expect(container?.textContent).toEqual(expect.stringContaining('Front Developer'));
  });
})