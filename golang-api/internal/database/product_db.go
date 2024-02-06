package database

import (
	"database/sql"

	"github.com/matheuszzy/imersao17/goapi/internal/entity"
)

type ProductDB struct {
	db *sql.DB
}

func NewProductDB(db *sql.DB) *ProductDB {
	return &ProductDB{db: db}
}

func (pd *ProductDB) GetProduct(id string) (*entity.Product, error) {
	var product entity.Product
	err := pd.db.QueryRow("SELECT id, name, price, category_id, description, image_url  FROM products WHERE id = ?", id).Scan(
		&product.ID,
		&product.Name,
		&product.Price,
		&product.CategoryID,
		&product.Description,
		&product.ImageURL,
	)

	if err != nil {
		return nil, err
	}

	return &product, nil
}

func (pd *ProductDB) GetProducts() ([]*entity.Product, error) {
	rows, err := pd.db.Query("SELECT id, name, description, price, category_id, image_url FROM products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []*entity.Product

	for rows.Next() {
		var product entity.Product
		if err := rows.Scan(&product.ID, &product.Name, &product.Description, &product.Price, &product.CategoryID, &product.ImageURL); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}

	return products, nil
}

func (pd *ProductDB) GetProductByCategoryID(categoryID string) ([]*entity.Product, error) {
	rows, err := pd.db.Query("SELECT id, name, description, price, category_id, image_url FROM products WHERE category_id = ?", categoryID)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var products []*entity.Product

	for rows.Next() {
		var product entity.Product
		if err := rows.Scan(&product.ID, &product.Name, &product.Description, &product.Price, &product.CategoryID, &product.ImageURL); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}
	return products, nil
}

func (cd *ProductDB) CreateProduct(product *entity.Product) (*entity.Product, error) {
	_, err := cd.db.Exec("INSERT INTO products (id, name, price, category_id, description, image_url) VALUES (?, ?, ?, ?, ?, ?)",
		product.ID,
		product.Name,
		product.Price,
		product.CategoryID,
		product.Description,
		product.ImageURL,
	)

	if err != nil {
		return nil, err
	}

	return product, nil
}
