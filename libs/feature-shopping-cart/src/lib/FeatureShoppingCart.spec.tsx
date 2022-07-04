import { render } from '@testing-library/react';

import FeatureShoppingCart from './FeatureShoppingCart';

describe('FeatureShoppingCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureShoppingCart />);
    expect(baseElement).toBeTruthy();
  });
});
