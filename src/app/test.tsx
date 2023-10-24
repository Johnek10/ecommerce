import { ProductList } from "@/components/organism/ProductList";
import { type ProductItem } from "@/components/types";

const products: ProductItem[] = [
	{
		id: "1",
		price: 134,
		category: "Sport",
		name: "Bag",
		image: {
			src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			alt: "blue bag",
		},
	},
	{
		id: "3",
		price: 123,
		category: "Sport",
		name: "T-shrit",
		image: {
			src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
			alt: "blue t-shirt",
		},
	},
	{
		id: "3",
		price: 144,
		category: "Sport",
		name: "Jacket",
		image: {
			src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
			alt: "creame jacket",
		},
	},
];

export const HomePage = () => {
	return (
		<section className="lg:max-7xl: mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
};
