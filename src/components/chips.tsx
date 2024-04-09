import { Tools, ToolsCat } from "@/lib/classes/enums";

const Chips: React.FC<{ chips: Tools[]; className?: string }> = ({
	chips,
	className,
}) => {
	let sorted = ToolsCat.sortTools(chips);
	return (
		<ul className={`flex gap-2 flex-wrap justify-center p-1 ${className}`}>
			{sorted.map((chip) => {
				let color = ToolsCat.getCategoryColor(chip);
				return (
					<li
						className={`text-brown-dark rounded font-medium px-3 py-1.5  h-8 text-sm   bg-${color}-200 shadow-drop-${color}-sm`}
						key={chip}
					>
						{chip}
					</li>
				);
			})}
		</ul>
	);
};

export default Chips;
