import { validate } from 'uuid';

import { CategoriesRepository } from '../../../modules/categories/repositories/implementations/CategoriesRepository';

describe('CategoriesRepository', () => {
  let categoriesRepository: CategoriesRepository;

  beforeAll(() => {
    categoriesRepository = CategoriesRepository.getInstance();
  });

  it('should be able to create new categories', () => {
    const category = categoriesRepository.create({
      name: 'Elétrica',
    });

    expect(category).toMatchObject({
      name: 'Elétrica',
    });
    expect(validate(category.id)).toBe(true);
  });

  it('should be able to list all users', () => {
    const category = categoriesRepository.create({
      name: 'Elétrica',
    });

    const categories = categoriesRepository.list();

    expect(categories).toStrictEqual(expect.arrayContaining([category]));
  });
});
