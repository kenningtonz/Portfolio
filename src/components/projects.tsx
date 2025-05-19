import { motion, useAnimation } from "framer-motion";
import { Content } from "@/components/content";
import { getWellnessCategories } from "@/lib/classes/wellness";
import { useEffect, useReducer, useState } from "react";
import { useDeviceSize } from "@/lib/data/deviceSize";
import { colorsHex } from "@/lib/data/colorsDynamic";

enum Position {
	right,
	middle,
	left,
}

type State = {
	activeId: number | null;
	rotation: number;
	position: Position;
};

const SLICE_COUNT = 6;
const SLICE_ANGLE = 360 / SLICE_COUNT; // 60°

type Action = { type: "SELECT"; id: number } | { type: "RESET" };

/**
 * Returns the signed smallest angle to go from `from` to `to` in degrees, in the range (−180, +180].
 */
function shortestAngleDiff(from: number, to: number): number {
	let diff = ((((to - from) % 360) + 540) % 360) - 180;
	return diff;
}

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "SELECT": {
			const { activeId, rotation, position } = state;
			const id = action.id;
			if (id === activeId) {
				return {
					...state,
				};
			}
			//determining position
			//from MIDDLE

			//if rotation is 0
			//if target is 300, 60, or 0 then move to left
			//if target is 180, 240, 120 then move to right

			//if rotation is 240
			// if target is current rotation, +60, or -60
			//if target is 180, 240, 300 move to left
			//if target is 120, 60, or 0 move to right

			//determining rotation
			//if position is left, target rotation stays as id * 60
			//if position is right, target rotation is actually (id * 60 )+ 180

			// compute the slice’s raw front‐facing angle in [0,360)

			// determine new position
			let newPosition = position;
			if (position === 1) {
				const targetRaw = (((id * SLICE_ANGLE) % 360) + 360) % 360;

				const frontIndex =
					(((-rotation / SLICE_ANGLE) % SLICE_COUNT) + SLICE_COUNT) %
					SLICE_COUNT;
				const currentRaw = frontIndex * SLICE_ANGLE;

				// build the three "left" angles: current, +60, −60 (wrapped)
				const leftAngles = new Set([
					currentRaw,
					(currentRaw + SLICE_ANGLE) % 360,
					(currentRaw - SLICE_ANGLE + 360) % 360,
				]);
				newPosition = leftAngles.has(targetRaw)
					? Position.left
					: Position.right;
			}
			const targetAngle = (((-id * SLICE_ANGLE) % 360) + 360) % 360;

			// compute the displayed target (add 180° if we're sliding right)
			const displayedTarget =
				newPosition === Position.right
					? targetAngle + 180
					: targetAngle;

			// shortest spin from current→displayedTarget
			let delta = shortestAngleDiff(rotation, displayedTarget);
			const newRotation = state.rotation + (delta === -180 ? 180 : delta);
			return {
				rotation: newRotation,
				activeId: id,
				position: newPosition,
			};
		}
		case "RESET": {
			console.log(state.rotation, "id:", state.activeId);
			return {
				...state,
				position: 1,
				activeId: null, // clear active
			};
		}
		default:
			return state;
	}
}

export const Projects: React.FC<{}> = ({}) => {
	const wellnessCategories = getWellnessCategories();
	const [width, height] = useDeviceSize();
	const isMobile = width < 640;

	const [state, dispatch] = useReducer(reducer, {
		activeId: null,
		rotation: 0,
		position: Position.middle,
	});

	// lookup the active section by ID
	const activeSection = wellnessCategories.find(
		(cat) => cat.color.id === state.activeId
	)!;

	function handleOutsideClick() {
		dispatch({ type: "RESET" });
	}

	function handleClick(e: any) {
		e.preventDefault();
		const id = parseInt(e.target.id);
		dispatch({ type: "SELECT", id });
	}

	return (
		<section
			id='projects'
			className={`flex sectionFlip items-center h-[90dvh] relative 	`}
			data-position={state.position}
		>
			<motion.div
				layout
				className='z-20 '
				initial={{ width: 50 }}
				transition={{
					ease: "linear",
					opacity: { duration: 0.3, delay: 0.5 },
				}}
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
				animate={
					state.position == Position.middle ? "hidden" : "visible"
				}
			>
				{state.activeId != null ? (
					<Content
						wellnessE={activeSection.enum}
						direction={state.position}
					/>
				) : null}
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
								rotate: isMobile
									? state.rotation + 90
									: state.rotation,
								x: isMobile ? 0 : -70,
								y: isMobile ? -70 : 0,
							},
							middle: {
								rotate: state.rotation,
								x: 0,
								y: 0,
							},
							right: {
								rotate: isMobile
									? state.rotation - 90
									: state.rotation,
								x: isMobile ? 0 : 70,
								y: isMobile ? -70 : 0,
							},
						}}
						animate={
							state.position == Position.middle
								? "middle"
								: state.position == Position.left
								? "left"
								: "right"
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
									onTap={handleOutsideClick}
									fill={`${
										colorsHex[cat.color.name]["dark"]
									}`}
									key={`${cat.color.id}background`}
									id={cat.color.id.toString()}
									d={`${cat.color.backgroundPath}`}
									strokeWidth={0.5}
									variants={{
										active: {
											fill: colorsHex[cat.color.name][
												"base"
											],
											stroke: colorsHex[cat.color.name][
												"base"
											],
										},
										inactive: {
											fill:
												isMobile &&
												state.position !=
													Position.middle
													? colorsHex[
															activeSection.color
																.name
													  ]["base"]
													: colorsHex[cat.color.name][
															"dark"
													  ],
											stroke:
												isMobile &&
												state.position !=
													Position.middle
													? colorsHex[
															activeSection.color
																.name
													  ]["base"]
													: colorsHex[cat.color.name][
															"dark"
													  ],
										},
									}}
									animate={
										state.position != Position.middle &&
										state.activeId == cat.color.id
											? "active"
											: "inactive"
									}
								/>
							))}
						</motion.g>
						<motion.g
							variants={{
								static: {
									rotate: 0,
								},
								jiggle: {
									rotate: [0, -5, 5, 0],
								},
							}}
							transition={{
								repeatDelay: 5, // wait 2s before each jiggle
								duration: 0.6, // how long the wiggle cycle takes
								ease: "easeInOut",
								repeat: Infinity, // keep repeating
							}}
							animate={
								state.position == Position.middle
									? "jiggle"
									: "static"
							}
						>
							{wellnessCategories.map((cat) => (
								<motion.g
									role='button'
									aria-label='project-button'
									id={cat.color.id.toString()}
									whileHover={{
										scale: 1.05,
										cursor: "pointer",
										zIndex: 200,
									}}
									whileTap={{ scale: 0.9 }}
									key={cat.color.id}
									onTap={handleClick}
								>
									<motion.path
										id={cat.color.id.toString()}
										fill={`${
											colorsHex[cat.color.name]["base"]
										}`}
										d={`${cat.color.arrowPath}`}
										variants={{
											active: { opacity: 0 },
											inactive: { opacity: 1 },
										}}
										animate={
											state.position != Position.middle &&
											state.activeId == cat.color.id
												? "active"
												: "inactive"
										}
									/>
									<motion.path
										id={`${cat.color.id.toString()}-icon`}
										fill={`${
											colorsHex[cat.color.name][700]
										}`}
										d={`${cat.color.iconPath}`}
									/>
								</motion.g>
							))}
						</motion.g>
					</motion.g>
				</motion.svg>
			</motion.div>
		</section>
	);
};
