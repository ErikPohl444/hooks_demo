import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentPane from './ContentPane';

// Mock child components to avoid rendering full trees
jest.mock('./Home', () => () => <div>Home Component</div>);
jest.mock('./About', () => () => <div>About Component</div>);
jest.mock('./Contact', () => () => <div>Contact Component</div>);
jest.mock('./UseStateComponent', () => ({ UseStateComponent: () => <div>useState Component</div> }));
jest.mock('./UseMemoComponent', () => ({ UseMemoComponent: () => <div>useMemo Component</div> }));
jest.mock('./UseEffectComponent', () => ({ UseEffectComponent: () => <div>useEffect Component</div> }));
jest.mock('./UseContextComponent', () => ({ UseContextComponent: () => <div>useContext Component</div> }));
jest.mock('./UseReducerComponent', () => ({ UseReducerComponent: () => <div>useReducer Component</div> }));
jest.mock('./UseRefComponent', () => ({ UseRefComponent: () => <div>useRef Component</div> }));
jest.mock('./UseLayoutEffectComponent', () => ({ UseLayoutEffectComponent: () => <div>useLayoutEffect Component</div> }));
jest.mock('./UseCallbackComponent', () => ({
  UseCallbackComponent: (props: any) => <div>useCallback Component</div>
}));
jest.mock('./UseDebugValueComponent', () => ({
  UseDebugValueComponent: (props: any) => <div>useDebugValue Component</div>
}));
jest.mock('./UseImperativeHandleComponent', () => ({
  __esModule: true,
  default: () => <div>useImperativeHandle Component</div>
}));

describe('ContentPane', () => {
  it('renders Home when selectedItem is "Home"', () => {
    render(<ContentPane selectedItem="Home" />);
    expect(screen.getByText(/Home Component/i)).toBeInTheDocument();
  });

  it('renders About when selectedItem is "About"', () => {
    render(<ContentPane selectedItem="About" />);
    expect(screen.getByText(/About Component/i)).toBeInTheDocument();
  });

  it('renders Contact when selectedItem is "Contact"', () => {
    render(<ContentPane selectedItem="Contact" />);
    expect(screen.getByText(/Contact Component/i)).toBeInTheDocument();
  });

  it('renders useState when selectedItem is "useState"', () => {
    render(<ContentPane selectedItem="useState" />);
    expect(screen.getByText(/useState Component/i)).toBeInTheDocument();
  });

  it('renders useMemo when selectedItem is "useMemo"', () => {
    render(<ContentPane selectedItem="useMemo" />);
    expect(screen.getByText(/useMemo Component/i)).toBeInTheDocument();
  });

  it('renders default message when selectedItem is null', () => {
    render(<ContentPane selectedItem={null} />);
    expect(screen.getByText(/Please select a menu item/i)).toBeInTheDocument();
  });

  // Add more tests for other cases as needed
});