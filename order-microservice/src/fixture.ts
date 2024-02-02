import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '10c83bae-cf4b-4564-b38a-5c15a4d6f0da',
      name: 'Relogio A3',
      description: 'Descricao do relogio A3',
      price: 300,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: '17aa763e-0efb-4462-bb0f-d1d3d86d7a06',
      name: 'Relogio B9',
      description: 'Descricao do relogio B9',
      price: 1900,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/18.png',
    },
    {
      id: '2be82129-cf3b-46ab-bd2c-acf7cb13917d',
      name: 'Relogio A1',
      description: 'Descricao do relogio A1',
      price: 100,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: '4b59fc2d-3e9f-4aae-8237-b1efc717f3b8',
      name: 'Relogio B1',
      description: 'Descricao do relogio B1',
      price: 1100,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/10.png',
    },
    {
      id: '5a925810-1ab2-4bab-a4c1-d8e0419c1e7f',
      name: 'Relogio A2',
      description: 'Descricao do relogio A2',
      price: 200,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: '5b1f0513-06b5-439b-909b-e1bb46d03e1b',
      name: 'Relogio C2',
      description: 'Descricao do relogio C2',
      price: 2200,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/20.png',
    },
    {
      id: '6f13d8cd-8a6e-4084-97db-e6c2c635f0c8',
      name: 'Relogio A5',
      description: 'Descricao do relogio A5',
      price: 500,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/5.png',
    },
    {
      id: '80a798bf-cdf9-4eb9-b711-5e0a1a91db5e',
      name: 'Relogio B6',
      description: 'Descricao do relogio B6',
      price: 1600,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/15.png',
    },
    {
      id: '9ff96e62-9f38-4341-bba6-3e4b3562ad9c',
      name: 'Relogio A9',
      description: 'Descricao do relogio A9',
      price: 900,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/9.png',
    },
    {
      id: 'a6b35c01-af32-40e1-9602-4871d0d1f862',
      name: 'Relogio B4',
      description: 'Descricao do relogio B4',
      price: 1400,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/13.png',
    },
    {
      id: 'a9f14e9d-4e7a-4e87-8913-1bcf2ef79c4d',
      name: 'Relogio A7',
      description: 'Descricao do relogio A7',
      price: 700,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/7.png',
    },
    {
      id: 'b3b6b6ab-811d-4a8d-b453-2c3c3bbabf58',
      name: 'Relogio B3',
      description: 'Descricao do relogio B3',
      price: 1300,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/12.png',
    },
    {
      id: 'b98c0f4d-451c-4b37-bc5a-2c44ff823d31',
      name: 'Relogio C1',
      description: 'Descricao do relogio C1',
      price: 2100,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/19.png',
    },
    {
      id: 'c5c7115f-795c-4a9c-8aeb-57d0eef9f6e7',
      name: 'Relogio B2',
      description: 'Descricao do relogio B2',
      price: 1200,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/11.png',
    },
    {
      id: 'ca9b23c3-2b08-42db-99ac-cf9d8b7a6f9e',
      name: 'Relogio A6',
      description: 'Descricao do relogio A6',
      price: 600,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/6.png',
    },
    {
      id: 'e2b0e34f-1862-4f1a-b05d-745779f6cbea',
      name: 'Relogio B5',
      description: 'Descricao do relogio B5',
      price: 1500,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/14.png',
    },
    {
      id: 'e55400c2-4bfc-4cf9-9ce5-4787a27c5711',
      name: 'Relogio B8',
      description: 'Descricao do relogio B8',
      price: 1800,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/17.png',
    },
    {
      id: 'ed23a755-717c-4f8d-90b0-3f44b9a7c816',
      name: 'Relogio A8',
      description: 'Descricao do relogio A8',
      price: 800,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/8.png',
    },
    {
      id: 'f2ed5ba3-df7f-4d6b-92d4-87e540c9a90d',
      name: 'Relogio B7',
      description: 'Descricao do relogio B7',
      price: 1700,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/16.png',
    },
    {
      id: 'f435d8e7-84db-4f1b-92a7-e88e7351e497',
      name: 'Relogio A4',
      description: 'Descricao do relogio A4',
      price: 400,
      category_id: '5ad44529-8d96-4bc1-a882-e1d3004344cb',
      image_url: 'http://localhost:9000/products/4.png',
    },
  ]);

  await app.close();
}
bootstrap();
