import { Tools, ToolsCat } from "../_classes/enums"

export const Chips: React.FC<{ chips: Tools[] }> = ({ chips }) => {
    let sorted = ToolsCat.sortTools(chips);
    return (
        <ul className="flex gap-1 flex-wrap p-1">
            {sorted.map((chip) => {
                let color = ToolsCat.getCategoryColor(chip);
                return (
                    <li className={`text-white rounded px-3 py-1.5 text-xs  ${color}`} key={chip}>{chip}</li>
                )
            })}
        </ul>
    )
}