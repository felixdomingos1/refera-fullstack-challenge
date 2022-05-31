import { Category } from '../../model/ICategoryInterface';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  category_id: string;
}

class ListAllCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListAllCategoriesUseCase };
