import { type ProductItem } from "../types";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductImage } from "@/components/atoms/ProductImage";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
