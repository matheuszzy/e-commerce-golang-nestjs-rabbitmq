import { Product } from "@/app/models";

export class ProductService {
  async getProducts({
    search,
    category_id,
  }: {
    search: string | undefined;
    category_id: string | undefined;
  }): Promise<Product[]> {
    let URL = `${process.env.CATALOG_API_URL}/products`;

    if (category_id) {
      URL += `/category/${category_id}`;
    }

    const response = await fetch(URL, {
      next: {
        revalidate: 1,
      },
    });

    let data = await response.json();
    data = !data ? [] : data;

    if (search) {
      return data.filter((product: Product) => {
        return product.Name.toLowerCase().includes(search.toLowerCase());
      });
    }

    return data;
  }

  async getProductsByIds(productIds: string[]): Promise<Product[]> {
    const responses = await Promise.all(
      productIds.map((productId) =>
        fetch(`${process.env.CATALOG_API_URL}/products/${productId}`, {
          next: {
            revalidate: 1,
          },
        })
      )
    );

    return Promise.all(responses.map((response) => response.json()));
  }

  async getProduct(productId: string): Promise<Product> {
    const response = await fetch(
      `${process.env.CATALOG_API_URL}/product/${productId}`,
      {
        next: {
          revalidate: 1,
        },
      }
    ); //revalidate on demand
    return response.json();
  }
}
