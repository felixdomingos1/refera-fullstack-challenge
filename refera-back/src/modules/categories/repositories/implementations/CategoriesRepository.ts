import { Category, CategoryInterface } from '../../model/';

import { ICategoriesRepository, ICreateCategryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;

  private constructor() {}

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async create({ name }: ICreateCategryDTO): Promise<CategoryInterface> {
    try {
      const category = new Category();

      Object.assign(category, {
        name,
        created_at: new Date(),
        updated_at: new Date(),
      });

      await Category.create(category);

      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<CategoryInterface | undefined> {
    try {
      const user = await Category.findById(id);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async list(): Promise<CategoryInterface[]> {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { CategoriesRepository };
