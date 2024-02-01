package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	_ "github.com/go-sql-driver/mysql"
	"github.com/matheuszzy/imersao17/goapi/internal/database"
	"github.com/matheuszzy/imersao17/goapi/internal/service"
	"github.com/matheuszzy/imersao17/goapi/internal/webserver"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/imersao17")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	categoryDB := database.NewCategoryDB(db)
	categoryService := service.NewCategoryService(*categoryDB)

	productDB := database.NewProductDB(db)
	productService := service.NewProductService(*productDB)

	webCategoryHandler := webserver.NewWebCategoryHandler(categoryService)
	webProductHandler := webserver.NewWebProductHandler(productService)

	c := chi.NewRouter()
	c.Use(middleware.Logger)
	c.Use(middleware.Recoverer)

	c.Post("/categories", webCategoryHandler.CreateCategory)
	c.Get("/categories", webCategoryHandler.GetCategories)
	c.Get("/categories/{id}", webCategoryHandler.GetCategory)

	c.Post("/products", webProductHandler.CreateProduct)
	c.Get("/products", webProductHandler.GetProducts)
	c.Get("/products/{id}", webProductHandler.GetProduct)
	c.Get("/products/category/{categoryID}", webProductHandler.GetProductsByCategoryID)

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", c)
}
