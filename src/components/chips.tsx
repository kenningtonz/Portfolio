import { Tools, ToolsCat } from "../_classes/enums";

export const Chips: React.FC<{ chips: Tools[]; className?: string }> = ({
	chips,
	className,
}) => {
	let sorted = ToolsCat.sortTools(chips);
	return (
		<ul className={`flex gap-1 flex-wrap justify-center p-1 ${className}`}>
			{sorted.map((chip) => {
				let color = ToolsCat.getCategoryColor(chip);
				return (
					<li
						className={`text-white rounded px-3 py-1.5  h-7 text-xs  ${color}`}
						key={chip}
					>
						{chip}
					</li>
				);
			})}
		</ul>
	);
};
