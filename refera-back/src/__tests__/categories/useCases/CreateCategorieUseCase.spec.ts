import { CategoriesRepository } from '../../../modules/categories/repositories/implementations/CategoriesRepository';
import { CreateCategoryUseCase } from '../../../modules/categories/useCases/createCategory/CreateCategoryUseCase';

describe('CreateCategoryUseCase', () => {
  let createCategoryUseCase: CreateCategoryUseCase;
  let categoriesRepository: CategoriesRepository;

  beforeAll(() => {
    categoriesRepository = CategoriesRepository.getInstance();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  it('should be able to create new categories', () => {
    const category = createCategoryUseCase.execute({
      name: 'Elétrica',
    });

    expect(categoriesRepository.list()).toStrictEqual([category]);
  });
});
