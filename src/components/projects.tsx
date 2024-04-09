import {
	motion,
	useScroll,
	useMotionValueEvent,
	useMotionValue,
} from "framer-motion";
import { Content } from "@/components/content";
import { getWellnessCategories } from "@/lib/classes/wellness";
import { useState } from "react";
import { useDeviceSize } from "@/lib/data/deviceSize";
import { colorsHex } from "@/lib/data/colorsDynamic";

export const Projects: React.FC<{}> = ({}) => {
	const wellnessCategories = getWellnessCategories();
	const [width, height] = useDeviceSize();
	const isMobile = width < 640;
	const [active, setActive] = useState({
		section: wellnessCategories[0],
		position: 1,
		rotation: 0,
	});
	const [pos, setPos] = useState([0, 1, 2, 3, 4, 5]);
	let pastActive;

	function shiftArray(newNum: number) {
		let index = pos.indexOf(newNum);
		let tempArray: number[] = [...pos];
		for (let i = 0; i < index; i++) {
			tempArray.push(tempArray.shift() as number);
		}
		setPos(tempArray);
		return index;
	}

	function handleClick(e: any) {
		pastActive = active;
		e.preventDefault();
		let id = parseInt(e.target.id);
		let tempActive: any = { ...active };
		tempActive.section = wellnessCategories.find((sec) => sec.color.id == id);

		let numOfMovements = shiftArray(id);

		let rotationDirection: number = -1;
		if (numOfMovements > 3) {
			rotationDirection = 1;
			numOfMovements = 6 - numOfMovements;
		}
		if (tempActive.position == 1) {
			if (
				tempActive.section.color.id == 5 ||
				tempActive.section.color.id == 0 ||
				tempActive.section.color.id == 1
			) {
				tempActive.position = 2;
			} else {
				tempActive.position = 0;
			}
		}

		if (tempActive.section.color.id != pastActive.section.color.id) {
			tempActive.rotation =
				pastActive.rotation + rotationDirection * 60 * numOfMovements;
			if (tempActive.position == 0 && pastActive.position == 1) {
				tempActive.rotation = tempActive.rotation + 180;
			}
		}
		setActive(tempActive);
	}

	return (
		<section
			id='projects'
			className={`flex sectionFlip items-center h-[90dvh] relative 	`}
			data-position={active.position}
		>
			<motion.div
				layout
				className='z-20 '
				initial={{ width: 50 }}
				transition={{ ease: "linear", opacity: { duration: 0.3, delay: 0.5 } }}
				variants={{
					hidden: {
						display: "none",
						opacity: 0,
					},
					visible: {
						display: "flex",
						opacity: 1,
						alignSelf: isMobile ? "end" : "center",
						width: isMobile ? "100%" : "50%",
						height: isMobile ? "60%" : 350,
					},
				}}
				animate={active.position == 1 ? "hidden" : "visible"}
			>
				<Content wellnessE={active.section.enum} direction={active.position} />
			</motion.div>
			<motion.div className='z-10 w-full h-full absolute '>
				<motion.svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-full w-full '
					viewBox={`-100 -100 200 200`}
					preserveAspectRatio='xMidYMid slice'
					data-name='logo'
					style={{ originX: "0", originY: "0" }}
				>
					<motion.g
						variants={{
							left: {
								rotate: isMobile ? active.rotation + 90 : active.rotation,
								x: isMobile ? 0 : -70,
								y: isMobile ? -70 : 0,
							},
							middle: {
								rotate: active.rotation,
								x: 0,
								y: 0,
							},
							right: {
								rotate: isMobile ? active.rotation - 90 : active.rotation,
								x: isMobile ? 0 : 70,
								y: isMobile ? -70 : 0,
							},
						}}
						animate={
							active.position == 1 ? "middle" : active.position == 2 ? "left" : "right"
						}
						transition={{
							ease: "easeInOut",
							y: { duration: 0.5 },
							rotate: { duration: 0.2 },
							x: { duration: 0.5 },
						}}
					>
						<motion.g>
							{wellnessCategories.map((cat) => (
								<motion.path
									fill={`${colorsHex[cat.color.name]["dark"]}`}
									key={`${cat.color.id}background`}
									id={cat.color.id.toString()}
									d={`${cat.color.backgroundPath}`}
									strokeWidth={0.5}
									variants={{
										active: {
											fill: colorsHex[cat.color.name]["base"],
											stroke: colorsHex[cat.color.name]["base"],
										},
										inactive: {
											fill:
												isMobile && active.position != 1
													? colorsHex[active.section.color.name]["base"]
													: colorsHex[cat.color.name]["dark"],
											stroke:
												isMobile && active.position != 1
													? colorsHex[active.section.color.name]["base"]
													: colorsHex[cat.color.name]["dark"],
										},
									}}
									animate={
										active.position != 1 && active.section.color.id == cat.color.id
											? "active"
											: "inactive"
									}
								/>
							))}
						</motion.g>
						{wellnessCategories.map((cat) => (
							<motion.g
								// style={{ originX: "-50", originY: "-50" }}
								role='button'
								aria-label='project-button'
								id={cat.color.id.toString()}
								whileHover={{ scale: 1.05, cursor: "pointer", zIndex: 200 }}
								whileTap={{ scale: 0.9 }}
								key={cat.color.id}
								// className={`focus:outline-2 focus:outline-${cat.color.name}-300 active:outline-none `}
								onTap={handleClick}
								// whileInView={{ scale: 0.9 }}
							>
								<motion.path
									id={cat.color.id.toString()}
									fill={`${colorsHex[cat.color.name]["base"]}`}
									d={`${cat.color.arrowPath}`}
									// style={
									// 	{
									// 		// filter: `drop-shadow(-1px 0px 2px ${colorsHex[cat.color.name][700]})`,
									// 		// scale: 0.9,
									// 	}
									// }
									variants={{
										active: { opacity: 0 },
										inactive: { opacity: 1 },
									}}
									animate={
										active.position != 1 && active.section.color.id == cat.color.id
											? "active"
											: "inactive"
									}
								/>
								<motion.path
									id={`${cat.color.id.toString()}-icon`}
									fill={`${colorsHex[cat.color.name][700]}`}
									d={`${cat.color.iconPath}`}
								/>
							</motion.g>
						))}
					</motion.g>
				</motion.svg>
			</motion.div>
		</section>
	);
};
