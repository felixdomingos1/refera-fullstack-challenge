import 'dotenv/config';
import express from 'express';
import { ordersRoutes } from './routes/oders.routes';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/orders', ordersRoutes);

export { app };
