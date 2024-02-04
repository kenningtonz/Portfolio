"use client";
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { Content } from '@/app/_components/content'
import { wellnessCategories } from './_data/data';

// const sections = [
//   { id: 0, color: "#C6E1AB", rotate: 0, colorDark: "#243D09", name: "green" },
//   { id: 1, color: "#B8E4F0", rotate: 60, colorDark: "#08303C", name: "blue" },
//   { id: 2, color: "#CDBADB", rotate: 120, colorDark: "#26093B", name: "purple" },
//   { id: 3, color: "#F8AB99", rotate: 180, colorDark: "#40140A", name: "red" },
//   { id: 4, color: "#FCCA7E", rotate: 240, colorDark: "#492F09", name: "orange" },
//   { id: 5, color: "#FFE070", rotate: 300, colorDark: "#3A2F0A", name: "yellow" },
// ]

wellnessCategories.sort((a, b) => {
  return a.color.id - b.color.id
})


// function template({ rotate, x, y}: { rotate: number, x: number, y: number}) {
//     return `translateX(${60}) translateY(${48.5})  rotate(${rotate}) translateX(${x}) translateY(${y}) `
//   }

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}


export default function Home() {

  const [active, setActive] = useState({ section: wellnessCategories[0], position: 1, rotation: 0 });
  const [pos, setPos] = useState([0, 1, 2, 3, 4, 5]);
  let pastActive;

  const [isScrolled, setIsScrolled] = useState(false);
  const [width, height] = useDeviceSize();

  const svgVariants = {
    left: { rotate: active.rotation, x: width / 18 * -1 },
    middle: { rotate: active.rotation },
    right: { rotate: active.rotation, x: width / 18 },
  }
  useDeviceSize
  const sectionVariants = {
    left: { justifyContent: "flex-start" },
    middle: { justifyContent: "center" },
    right: { justifyContent: "flex-end" },
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position of the window
    if (scrollPosition > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };


  useEffect(() => {
    handleScroll();
    if (isScrolled) {
      console.log("scrolled")
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    // console.log(`indexbefore: ${index}color: ${tempActive.section.id} numOfMovements: ${numOfMovements} indexOldPos: ${indexOld} rotationDirection: ${rotationDirection}`);

    if (tempActive.position == 1) {
      if (tempActive.section.id > 2) {
        tempActive.position = 0;
      }
      else {
        tempActive.position = 2;
      }
    }

    if (tempActive.section.id != pastActive.section.color.id) {
      tempActive.rotation = pastActive.rotation + (rotationDirection * 60 * numOfMovements);
      if (tempActive.position == 0 && pastActive.position == 1) {
        tempActive.rotation = tempActive.rotation + 180;
      }
      console.log(tempActive.position)
      console.log(tempActive.rotation)
    }


    setActive(tempActive);

  }

  return (
    <>
      <motion.header
        animate={isScrolled ? "visible" : "hidden"}
        variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
        className={`z-30 flex items-center justify-between bg-brown fixed min-h-16 w-full p-4 `} >
        <div className="flex items-center gap-4">
          <Link href="/">  <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            priority
          /></Link>
          <h1 className="text-4xl font-display text-white ">Kennedy Adams</h1>
        </div>
        <div className='flex items-center gap-4'>
          {[[faUser, '/#about'], [faEnvelope, '/contact']].map((link) => (
            <Link href={link[1] as string} key={link[1] as string}><FontAwesomeIcon className="text-2xl transition duration-200 text-white hover:scale-150 hover:ease-in east-out" icon={link[0] as IconDefinition} /></Link>
          ))}
          <FontAwesomeIcon className="text-2xl transition duration-200 text-white hover:scale-150 hover:ease-in east-out" icon={faCircleHalfStroke} />
        </div>
      </motion.header>

      <main className="flex-col flex min-h-screen ">
        <section className=" flex items-center w-full justify-center gap-2 p-24 bg-brown h-dvh">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
          <div>
            <h1 className="text-4xl font-display text-white ">Kennedy Adams</h1>
            <h2 className="text-2xl font-display text-white ">Full Stack Developer focusing on Wellness</h2>
          </div>
        </section>
        <section id="projects" className="flex justify-end	h-dvh relative" data-position={active.position}>
          <motion.div
            className="z-20 w-2/4 h-full flex  justify-end items-center "
            variants={{ hidden: { display: "none" }, visible: { display: "flex" } }}
            animate={active.position == 1 ? "hidden" : "visible"}
          >
            <Content wellnessCategory={active.section} />
          </motion.div>
          <motion.div className='z-10 w-full h-full absolute'
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full "
              // width={300}
              // height={600}
              viewBox={`-100 -100 200 200`}
              preserveAspectRatio="xMidYMid slice"
              data-name="logo"
              style={{ originX: "0", originY: "0" }}
            // variants={sectionVariants}
            // animate={active.position == 1 ? "middle" : active.position == 1 ? "left" : "right"}
            >
              <filter id="drop-shadow-green">

              </filter>
              <motion.g
                variants={svgVariants}
                // transformTemplate={template}
                style={{ originX: "0", originY: "0" }}
                animate={active.position == 1 ? "middle" : active.position == 2 ? "left" : "right"}
              >
                {wellnessCategories.map((cat) => (
                  <motion.path
                    fill={`${cat.color.colorDarkHex}`}
                    id={cat.color.id.toString()}
                    key={`${cat.color.id}background`}
                    style={{ originX: "0", originY: "0", rotate: cat.color.rotate, scale: 6 }}
                    variants={{ active: { fill: cat.color.colorHex }, inactive: { fill: cat.color.colorDarkHex } }}
                    animate={active.position != 1 && active.section.color.id == cat.color.id ? "active" : "inactive"}

                    d="m -0.02 0 l 34.63 20.02 l 0.02 -0.03 c 1.36 -2.36 2.49 -4.87 3.35 -7.49 h 9 c 1.66 0 3 -1.34 3 -3 v -19 c 0 -1.66 -1.34 -3 -3 -3 h -9 c -0.86 -2.63 -1.99 -5.13 -3.35 -7.48 v -0.03 s -34.65 20.01 -34.65 20.01 z"
                  />
                ))}
                {wellnessCategories.map((cat) => (
                  <motion.path
                    whileHover={{ scale: 0.7, cursor: "pointer" }}
                    // className={`drop-shadow-${sec.name}`}
                    fill={`${cat.color.colorHex}`}
                    filter={`url(#drop-shadow-${cat.color.name})`}
                    id={cat.color.id.toString()}
                    key={cat.color.id}
                    onClick={handleClick}
                    style={{ originX: "0", originY: "0", rotate: cat.color.rotate, scale: 0.6 }}
                    d="m 5 0 l 34.63 20.02 l 0.02 -0.03 c 1.36 -2.36 2.49 -4.87 3.35 -7.49 h 9 c 1.66 0 3 -1.34 3 -3 v -19 c 0 -1.66 -1.34 -3 -3 -3 h -9 c -0.86 -2.63 -1.99 -5.13 -3.35 -7.48 v -0.03 s -34.65 20.01 -34.65 20.01 z"
                  />
                ))}
                {/* <path d="m15 8c-3.55 0-6.4844-2.6437-6.9375-6.0687 1.6687-.2219 3.175-.9563 4.3531-2.0406 2.1375 1.1969 3.5844 3.4844 3.5844 6.1094v1c0 .5531-.4469 1-1 1zm-2-16c.5531-0 1 .4469 1 1v1c0 3.8656-3.1344 7-7 7h-1-5c-.5531 0-1-.4469-1-1s.4469-1 1-1h5c-0-3.8656 3.1344-7 7-7z" /> */}


              </motion.g>
            </motion.svg>
          </motion.div>

        </section>
        <section id="about" className=" flex items-center w-full justify-center gap-2 p-24 bg-brown h-dvh">
          {/* <h2>About</h2> */}
          <FontAwesomeIcon className="text-white place-self-start justify-self-start text-2xl" icon={faUser} />


        </section>
      </main>
    </>

  )
}
