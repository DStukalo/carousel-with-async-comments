type Props = {
	file: string;
	id: string;
	classes: string;
};

export const SvgSprite = ({ file, id, classes }: Props) => {
	return (
		<svg className={classes}>
			<use xlinkHref={`/svg/${file}.svg#${id}`} />
		</svg>
	);
};
