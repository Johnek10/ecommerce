export const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-200">
			<img
				width={300}
				height={300}
				alt={alt}
				src={src}
				className="hover:scale-106 h-full w-full object-cover object-center p-4 transition-transform"
			></img>
		</div>
	);
};
