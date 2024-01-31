"use client";
import { motion, useCycle } from "framer-motion"
import LogoPart from "../logoPart"
// import { create } from 'zustand'
import { useState } from "react";


// interface SectionState {
//   section: number
//   setNumber: (section: number) => void
// }

// const useSectionStore = create<SectionState>()((set) => ({
//   section: 0,
//   setNumber: (by: number) => set((state) => ({ section: state.section + by }))
// }))

const variants = {
  left: { x: -100 },
  middle: { x: 0 },
  right: { x: 100 },
}

const sections = [
  { id: 1, color: "#c5ecac", rotate: 0 },
  { id: 2, color: "#aef7ff", rotate: 60 },
  { id: 3, color: "#d4bbfc", rotate: 120 },
  { id: 4, color: "#faab99", rotate: 180 },
  { id: 5, color: "#fcbc5d", rotate: 240 },
  { id: 6, color: "#ffdc5e", rotate: 300 },
]

export default function Page() {
  // const section = useSectionStore(state => state.section)
  // const {setNumber: setNumber} = useSectionStore();
  // const setNumber = useSectionStore(state => state.setNumber)
  const [section, setSection] = useState(0);

  function handleClick(e: any) {
    console.log(e.target)
    e.preventDefault()
    setSection(parseInt(e.target.id))
  }

  return (
    <motion.div className="flex place-content-center min-h-dvh" animate={section == 0 ? "middle" : section > 3 ? "left" : "right"}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="place-self-center"
        width={140}
        height={136.91}

        data-name="logo"
        variants={variants}
      >
        {sections.map((section) => (
            <motion.path
            whileHover={{ scale: 1.1, cursor: "pointer"}}
           fill={section.color}
           id={section.id.toString()}
           key= {section.id}
           onClick={handleClick}
           animate={{originX: 0,  originY: 0.5,  rotate: section.rotate , x: 65, y: 48.45}}
           d="m 0 20.01 l 34.63 20.02 l 0.02 -0.03 c 1.36 -2.36 2.49 -4.87 3.35 -7.49 h 9 c 1.66 0 3 -1.34 3 -3 v -19 c 0 -1.66 -1.34 -3 -3 -3 h -9 c -0.86 -2.63 -1.99 -5.13 -3.35 -7.48 v -0.03 s -34.65 20.01 -34.65 20.01 z"
       />
        ))}
      </motion.svg>
    </motion.div>
  )

}