import { addItem } from './items';

describe('items actions', () => {
  it('handles addItem action creator', () => {
    const action = { type: 'ADD_ITEM', text: 'zoop' };

    expect(addItem('zoop')).toEqual(action);
  });
});
