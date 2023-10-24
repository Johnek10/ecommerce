import { type ProductItem } from "../types";
import { ProductListItem } from "../molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItem[] }) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((el) => {
				return <ProductListItem key={el.id} product={el} />;
			})}
		</ul>
	);
};
