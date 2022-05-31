import { Category } from '../../model/ICategoryInterface';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  category_id: string;
}

class ShowCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ category_id: category_id }: IRequest): Category {
    const category = this.categoriesRepository.findById(category_id);

    if (!this.categoryExists({ category_id })) {
      throw new Error('Categoriy does not exist');
    }

    return category;
  }

  categoryExists({ category_id: category_id }: IRequest): boolean {
    const category = this.categoriesRepository.findById(category_id);

    return !!category;
  }
}

export { ShowCategoryUseCase };
