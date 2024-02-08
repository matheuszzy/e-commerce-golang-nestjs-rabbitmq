export type Category = {
	ID: number;
	Name: string;
  };
  
  export type Product = {
	ID: string;
	Name: string;
	Description: string;
	ImageURL: string;
	Price: number;
	CategoryID: number;
  };

  export enum OrderStatus {
	PENDING = "pending",
	PAID = "paid",
	FAILED = "failed",
  }
  
  export type Order = {
	id: string;
	total: number;
	status: OrderStatus;
	items: OrderItem[];
	created_at: string;
  };
  
  export type OrderItem = {
	id: number;
	quantity: number;
	price: number;
	product: ProductOrder;
  };

  export type ProductOrder = {
	id: string;
	name: string;
	description: string;
	image_url: string;
	price: number;
	category_id: number;
  }