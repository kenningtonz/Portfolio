import { motion, useScroll, useMotionValueEvent, useMotionValue } from 'framer-motion';
import { Content } from '@/components/content'
import { getWellnessCategories } from '@/_classes/wellness';
import { useState } from 'react';
import { useDeviceSize } from '@/_data/deviceSize';
import { colorsHex } from '@/_data/colorsDynamic';

export const Projects: React.FC<{}> = ({ }) => {
    const wellnessCategories = getWellnessCategories();
    const [width, height] = useDeviceSize();
    const isMobile = width < 600;
    const [active, setActive] = useState({ section: wellnessCategories[0], position: 1, rotation: 0 });
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
        e.preventDefault()
        let id = parseInt(e.target.id);
        let tempActive: any = { ...active };
        tempActive.section = wellnessCategories.find((sec) => sec.color.id == id);

        let numOfMovements = shiftArray(id);

        let rotationDirection: number = -1;
        if (numOfMovements > 3) {
            rotationDirection = 1
            numOfMovements = 6 - numOfMovements;
        }
        console.log(tempActive.section.color.id)
        if (tempActive.position == 1) {
            if (tempActive.section.color.id == 5 || tempActive.section.color.id == 0 || tempActive.section.color.id == 1) {
                tempActive.position = 2;
            }
            else {
                tempActive.position = 0;
            }
        }



        if (tempActive.section.color.id != pastActive.section.color.id) {
            tempActive.rotation = pastActive.rotation + (rotationDirection * 60 * numOfMovements);
            if (tempActive.position == 0 && pastActive.position == 1) {
                tempActive.rotation = tempActive.rotation + 180;
            }
            console.log(tempActive.position)
            console.log(tempActive.rotation)
        }
        setActive(tempActive);
    }
    // const xGroup = useMotionValue(0)

    // useMotionValueEvent(xGroup, "change", (latest) => {
    //     console.log(latest)
    //   })


    return (
        <section id="projects" className="flex sectionFlip items-center	h-dvh relative" data-position={active.position}>

            <motion.div
                layout
                className="z-20  h-3/4 flex items-center px-5"
                initial={{ width: 50 }}
                variants={{
                    hidden: {
                        display: "none",
                    },
                    visible: {
                        display: "flex",
                        width: isMobile ? "100%" : "50%",
                    }
                }}
                animate={active.position == 1 ? "hidden" : "visible"}
            >
                <Content wellnessE={active.section.enum} direction={active.position} />
            </motion.div>
            <motion.div className='z-10 w-full h-full absolute'
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full "
                    viewBox={`-100 -100 200 200`}
                    preserveAspectRatio="xMidYMid slice"
                    data-name="logo"
                    style={{ originX: "0", originY: "0" }}
                >
                    <motion.g
                        variants={{
                            left: {
                                rotate: isMobile ? active.rotation + 70 : active.rotation,
                                x: isMobile ? (width / -20) - 10 : -70,
                                y: isMobile ? -80 : 0,
                                scale: isMobile ? 0.35 : 0.5,
                            },
                            middle: {
                                rotate: active.rotation,
                                x: 0,
                                y: 0,
                            },
                            right: {
                                rotate: isMobile ? active.rotation - 70 : active.rotation,
                                x: isMobile ? (width / 20) + 10 : 70,
                                y: isMobile ? -80 : 0,
                                scale: isMobile ? 0.35 : 0.5
                            },
                        }}
                        style={{ originX: "0", originY: "0", scale: 0.5 }}
                        animate={active.position == 1 ? "middle" : active.position == 2 ? "left" : "right"}
                    >
                        <motion.g
                            style={{ originX: "0", originY: "0", scale: 5 }}
                        >
                            {wellnessCategories.map((cat) => (
                                <motion.path
                                    fill={`${colorsHex[cat.color.name][600]}`}
                                    key={`${cat.color.id}background`}

                                    id={cat.color.id.toString()}
                                    style={{ originX: "0", originY: "0", x: -245.8, y: -207.4 }}
                                    d={`${cat.color.backgroundPath}`}
                                    variants={{
                                        active:
                                            { fill: colorsHex[cat.color.name][200] },
                                        inactive: { fill: isMobile && active.position != 1 ? colorsHex[active.section.color.name][200] : colorsHex[cat.color.name][600] }
                                    }}
                                    animate={active.position != 1 && active.section.color.id == cat.color.id ? "active" : "inactive"}
                                />
                            ))}
                        </motion.g>
                        {wellnessCategories.map((cat) => (
                            <motion.g
                                style={{ x: -50, y: -50 }}
                                id={cat.color.id.toString()}
                                whileHover={{ scale: 1.05, cursor: "pointer", zIndex: 200 }}
                                whileTap={{ scale: 0.9 }}
                                key={cat.color.id}
                                // className={`focus:outline-2 focus:outline-${cat.color.name}-300 `}
                                onClick={handleClick}
                                whileInView={{ scale: 0.9 }}
                            >
                                <motion.path
                                    id={cat.color.id.toString()}
                                    fill={`${colorsHex[cat.color.name][200]}`}
                                    d={`${cat.color.arrowPath}`}
                                    style={{ filter: `drop-shadow(-1px 0px 2px ${colorsHex[cat.color.name][500]})` }}
                                    variants={{ active: { opacity: 0 }, inactive: { opacity: 1 } }}
                                    animate={active.position != 1 && active.section.color.id == cat.color.id ? "active" : "inactive"}
                                />
                                <motion.path
                                    id={cat.color.id.toString()}
                                    fill={`${colorsHex[cat.color.name][500]}`}
                                    d={`${cat.color.iconPath}`}
                                />
                            </motion.g>
                        ))}

                    </motion.g>
                </motion.svg>
            </motion.div>
        </section>
    )

}
