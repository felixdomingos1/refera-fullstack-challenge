import { validate } from 'uuid';

import { Category } from '../../../modules/categories/model';

describe('Category model', () => {
  it('should be able to create an category with all props', () => {
    const category = new Category();

    Object.assign(category, {
      name: 'Atlas',
      created_at: new Date(),
    });

    expect(category).toMatchObject({
      name: 'Atlas',
    });
    expect(validate(category.id)).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  });
});
