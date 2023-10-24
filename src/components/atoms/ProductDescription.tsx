import { type ProductItem } from "../types";

type ProductDescription = {
	product: ProductItem;
};
export const ProductDescription = ({ product: { name, price, category } }: ProductDescription) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-50"> {name}</h3>
				<p className="text-sm text-gray-800">
					<span className="sr-only">Katerogia:</span>
					{category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{price}
			</p>
		</div>
	);
};
