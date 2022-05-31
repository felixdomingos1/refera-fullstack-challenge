import { v4 } from 'uuid';

import { CategoriesRepository } from '../../../modules/categories/repositories/implementations/CategoriesRepository';
import { ListAllCategoriesUseCase } from '../../../modules/categories/useCases/listAllCategories/ListAllCategoriesUseCase';

describe('ListAllCategoriesUseCase', () => {
  let categoriesRepository: CategoriesRepository;
  let listAllCategoriesUseCase: ListAllCategoriesUseCase;
  let categorieId: string;

  beforeAll(() => {
    categoriesRepository = CategoriesRepository.getInstance();
    listAllCategoriesUseCase = new ListAllCategoriesUseCase(categoriesRepository);
  });

  it('should be able to list all categories', () => {
    const categorie1 = categoriesRepository.create({
      name: 'Elétrica',
    });

    const categorie2 = categoriesRepository.create({
      name: 'Hidraúlica',
    });

    categorieId = v4();

    const categorie3 = categoriesRepository.create({
      name: 'Lorem',
    });

    const categories = listAllCategoriesUseCase.execute();

    expect(categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Elétrica',
        }),
        categorie2,
        categorie3,
      ]),
    );
  });
});
