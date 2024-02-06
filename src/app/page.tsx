"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Content } from '@/components/content'
import { getWellnessCategories } from '@/_classes/wellness';
import Header from '@/components/header';
import Timeline from '../components/timeline';
import Card from '@/components/card';


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
  const wellnessCategories = getWellnessCategories();

  const [active, setActive] = useState({ section: wellnessCategories[0], position: 1, rotation: 0 });
  const [pos, setPos] = useState([0, 1, 2, 3, 4, 5]);
  let pastActive;

  const [isScrolled, setIsScrolled] = useState(false);
  const [width, height] = useDeviceSize();

  const svgVariants = {

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

  const { scrollYProgress } = useScroll();
  const isMobile = width < 768;

  return (
    <>
      <Header isScrolled={isScrolled} isAnimated={true} />

      <main className="flex-col flex min-h-screen ">
        <section className=" flex flex-wrap items-center justify-center gap-2 p-24 dark:bg-brown  h-dvh">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
          <div className=''>
            <h1 className="text-4xl font-display dark:text-white text-brown ">Kennedy Adams</h1>
            <h2 className="text-2xl font-display  dark:text-white text-brown ">Full Stack Developer focusing on Wellness</h2>
          </div>

        </section>
        <section id="projects" className="flex  justify-end	h-dvh relative" data-position={active.position}>
          <motion.div
            className="z-20 w-2/4 h-full flex  justify-end items-center "
            variants={{ hidden: { display: "none" }, visible: { display: "flex" } }}
            animate={active.position == 1 ? "hidden" : "visible"}
          >
            <Content wellnessE={active.section.enum} />
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
              <motion.g
                variants={{
                  left: {
                    rotate: isMobile ? active.rotation + 60 : active.rotation,
                    x: width / -18,
                    y: isMobile ? -100 : 0,
                    // scale: isMobile ? 0.5 : 1
                  },
                  middle: {
                    rotate: active.rotation,
                    x: 0,
                    y: 0,
                    // scale: 1
                  },
                  right: {
                    rotate: isMobile ? active.rotation + 60 : active.rotation,
                    x: width / 18,
                    y: isMobile ? -100 : 0,
                    // scale: isMobile ? 0.5 : 1
                  },
                }}
                className={``}
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
        <section id="about" className="  dark:text-white text-brown flex flex-col items-center w-full justify-center gap-2 p-24 dark:bg-brown bg-white">
          {/* <h2>About</h2> */}
          <FontAwesomeIcon className=" dark:text-white text-brown place-self-start justify-self-start text-2xl" icon={faUser} />
          <h2 className="text-2xl"> Who is Kennedy Adams?</h2>
          <article className='flex flex-wrap gap-4 mb-4 justify-center '>
            <Image src={"/kennedy.jpg"} alt="kennedy" width={200} height={200} className='rounded sm:basis-4/12' />
            <p className='flex-auto'>
              I’m just a human, with probably the most interesting past you’ll hear. Years ago, my therapist told me "your life is fucked but its about to get better". I didn't know or believe it at the time, but he was right. After being in therapy and working on myself, I'm finally ready to help those through their journey.
              My passion is using technology to make mental health resources more accessible.
            </p>
          </article>

          <div className=''>
            <Timeline />
          </div>

        </section>
        <section id="contact" className=" flex items-center w-full justify-center gap-2 p-24 bg-brown h-dvh">
          {/* <h2>About</h2> */}
          <FontAwesomeIcon className=" dark:text-white text-brown place-self-start justify-self-start text-2xl" icon={faEnvelope} />
          <Card title='test' />
        </section>
      </main>
    </>

  )
}
