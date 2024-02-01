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
      id: '7f8c9d8e-9f0a-1b2c-3d4e-',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: 'a1b2c3d4-e5f6-g7h8-i9j0-',
      name: 'Fantastic Widget',
      description: 'A wonderful widget for your needs',
      price: 49.99,
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: 'q1w2e3r4-t5y6u7i8-o9p0-',
      name: 'Super Gizmo',
      description: 'The ultimate gizmo for tech enthusiasts',
      price: 129.99,
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: 'z9x8c7v6-b5n4m3q2w1-j0',
      name: 'Incredible Thingamajig',
      description: 'An amazing thingamajig that does it all',
      price: 79.95,
      image_url: 'http://localhost:9000/products/4.png',
    },
    {
      id: 'l3k2j1h0g-9f8d7s6a5f4f3j2a',
      name: 'Awesome Contraption',
      description: 'A truly awesome contraption for your daily life',
      price: 199.99,
      image_url: 'http://localhost:9000/products/5.png',
    },
    {
      id: 'u1i2o3p4-s5s4a3a2a1d',
      name: 'Marvelous Apparatus',
      description: 'A marvelous apparatus that will amaze you',
      price: 89.99,
      image_url: 'http://localhost:9000/products/6.png',
    },
    {
      id: 'x9c8v7b6n5m4-q3w2e1r0t',
      name: 'Spectacular Whatchamacallit',
      description: "A spectacular whatchamacallit you've never seen before",
      price: 149.95,
      image_url: 'http://localhost:9000/products/7.png',
    },
    {
      id: 'p1l2m3o4k5n6b7v8c9-x9z8c7v6b5n4m3',
      name: 'Unbelievable Doohickey',
      description: 'An unbelievable doohickey that defies explanation',
      price: 69.99,
      image_url: 'http://localhost:9000/products/8.png',
    },
    {
      id: 'j2h1g0f9d8g7h6j5k4b3v2c1x0z9',
      name: 'Glorious Gizmo',
      description: 'A glorious gizmo to enhance your daily routine',
      price: 119.99,
      image_url: 'http://localhost:9000/products/9.png',
    },
    {
      id: 'y8u7i6t5r4e3w2q1o9p0l9k8j7h6g5',
      name: 'Fancy Doodad',
      description: 'A fancy doodad that adds style to your life',
      price: 54.99,
      image_url: 'http://localhost:9000/products/10.png',
    },
  ]);

  await app.close();
}
bootstrap();
