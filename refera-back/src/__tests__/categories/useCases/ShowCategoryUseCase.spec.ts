import { v4 } from 'uuid';

import { CategoriesRepository } from '../../../modules/categories/repositories/implementations/CategoriesRepository';
import { ShowCategoryUseCase } from '../../../modules/categories/useCases/showCategory/ShowCategoryUseCase';

describe('ShowCategoryUseCase', () => {
  let categoriesRepository: CategoriesRepository;
  let showCategoryUseCase: ShowCategoryUseCase;

  beforeAll(() => {
    categoriesRepository = CategoriesRepository.getInstance();
    showCategoryUseCase = new ShowCategoryUseCase(categoriesRepository);
  });

  it('should be able to get category by ID', () => {
    const category = categoriesRepository.create({
      name: 'Elétrica',
    });

    const findUser = showCategoryUseCase.execute({ category_id: category.id });

    expect(findUser).toMatchObject(category);
  });

  it('should not be able to show category of a non existing category', () => {
    expect(() => {
      showCategoryUseCase.execute({ category_id: v4() });
    }).toThrow();
  });
});
