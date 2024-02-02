CREATE DATABASE imersao17;
USE imersao17;

CREATE TABLE categories (
  id varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO categories (id, `name`) VALUES ("5ad44529-8d96-4bc1-a882-e1d3004344cb", "Relogios");
INSERT INTO categories (id, `name`) VALUES ("ededd741-a6a3-4eda-ae9e-991fd0f76430", "Eletronicos");

CREATE TABLE products (
  id varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  price decimal(10,2) NOT NULL,
  category_id varchar(36) NOT NULL,
  image_url varchar(255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_products_categories_idx FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO products (id, `name`, `description`, price, category_id, image_url) 
VALUES ("2be82129-cf3b-46ab-bd2c-acf7cb13917d", "Relogio A1", "Descricao do relogio A1", 100, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/1.png"),
("5a925810-1ab2-4bab-a4c1-d8e0419c1e7f", "Relogio A2", "Descricao do relogio A2", 200, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/2.png"),
("10c83bae-cf4b-4564-b38a-5c15a4d6f0da", "Relogio A3", "Descricao do relogio A3", 300, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/3.png"),
("f435d8e7-84db-4f1b-92a7-e88e7351e497", "Relogio A4", "Descricao do relogio A4", 400, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/4.png"),
("6f13d8cd-8a6e-4084-97db-e6c2c635f0c8", "Relogio A5", "Descricao do relogio A5", 500, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/5.png"),
("ca9b23c3-2b08-42db-99ac-cf9d8b7a6f9e", "Relogio A6", "Descricao do relogio A6", 600, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/6.png"),
("a9f14e9d-4e7a-4e87-8913-1bcf2ef79c4d", "Relogio A7", "Descricao do relogio A7", 700, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/7.png"),
("ed23a755-717c-4f8d-90b0-3f44b9a7c816", "Relogio A8", "Descricao do relogio A8", 800, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/8.png"),
("9ff96e62-9f38-4341-bba6-3e4b3562ad9c", "Relogio A9", "Descricao do relogio A9", 900, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/9.png"),
("4b59fc2d-3e9f-4aae-8237-b1efc717f3b8", "Relogio B1", "Descricao do relogio B1", 1100, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/10.png"),
("c5c7115f-795c-4a9c-8aeb-57d0eef9f6e7", "Relogio B2", "Descricao do relogio B2", 1200, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/11.png"),
("b3b6b6ab-811d-4a8d-b453-2c3c3bbabf58", "Relogio B3", "Descricao do relogio B3", 1300, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/12.png"),
("a6b35c01-af32-40e1-9602-4871d0d1f862", "Relogio B4", "Descricao do relogio B4", 1400, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/13.png"),
("e2b0e34f-1862-4f1a-b05d-745779f6cbea", "Relogio B5", "Descricao do relogio B5", 1500, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/14.png"),
("80a798bf-cdf9-4eb9-b711-5e0a1a91db5e", "Relogio B6", "Descricao do relogio B6", 1600, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/15.png"),
("f2ed5ba3-df7f-4d6b-92d4-87e540c9a90d", "Relogio B7", "Descricao do relogio B7", 1700, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/16.png"),
("e55400c2-4bfc-4cf9-9ce5-4787a27c5711", "Relogio B8", "Descricao do relogio B8", 1800, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/17.png"),
("17aa763e-0efb-4462-bb0f-d1d3d86d7a06", "Relogio B9", "Descricao do relogio B9", 1900, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/18.png"),
("b98c0f4d-451c-4b37-bc5a-2c44ff823d31", "Relogio C1", "Descricao do relogio C1", 2100, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/19.png"),
("5b1f0513-06b5-439b-909b-e1bb46d03e1b", "Relogio C2", "Descricao do relogio C2", 2200, "5ad44529-8d96-4bc1-a882-e1d3004344cb", "http://localhost:9000/products/20.png");