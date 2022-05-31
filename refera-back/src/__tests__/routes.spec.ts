import request from 'supertest';
import { v4 } from 'uuid';

import { app } from '../index';
import { CategoriesRepository } from '../modules/categories/repositories/implementations/CategoriesRepository';

describe('[POST] /categories', () => {
  it('should be able to create new categories', async () => {
    const response = await request(app)
      .post('/categories')
      .send({
        name: 'Elétrica',
      })
      .expect(201);

    expect(response.body).toMatchObject({
      name: 'Elétrica',
    });
  });

  describe('[GET] /categories/:category_id', () => {
    it('should be able to get category_id by ID', async () => {
      const categoriesRepository = CategoriesRepository.getInstance();

      const category = categoriesRepository.create({
        name: String(Math.random()),
      });

      const response = await request(app).get(`/categories/${v4()}`);

      const parsedResponse = {
        ...response.body,
        created_at: new Date(response.body.created_at),
      };

      expect(parsedResponse).toMatchObject(category);
    });

    it('should not be able to show category of a non existing category', async () => {
      const response = await request(app).get(`/categories/${v4()}`).expect(404);

      expect(response.body.error).toBeTruthy();
    });
  });

  describe('[GET] /categories', () => {
    it('should be able to list all categories', async () => {
      const categoriesRepository = CategoriesRepository.getInstance();

      const user1 = categoriesRepository.create({
        name: String(Math.random()),
      });

      const user2 = categoriesRepository.create({
        name: String(Math.random()),
      });

      const user3 = categoriesRepository.create({
        name: String(Math.random()),
      });

      const response = await request(app).get('/categories').set('category_id', v4());

      expect(
        response.body.map((res) => ({
          ...res,
          created_at: new Date(res.created_at),
        })),
      ).toEqual(expect.arrayContaining([expect.objectContaining(user1), user2, user3]));
    });

    it('should not be able to a non existing category get list of all categories', async () => {
      const response = await request(app).get('/categories').set('category_id', v4()).expect(400);

      expect(response.body.error).toBeTruthy();
    });
  });
});
