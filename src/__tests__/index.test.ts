import { describe, expect, it } from 'vitest';

import * as index from '../components';

describe('index', () => {
  it('should have a list of index', () => {
    expect(index).toMatchSnapshot();
  });
});
