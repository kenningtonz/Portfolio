"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image'
import { faUser, faEnvelope, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'




import { useTheme } from '../_classes/theme';

const Header: React.FC<{ isScrolled?: boolean, isAnimated: boolean }> = ({ isScrolled, isAnimated }) => {
    const { toggleTheme, theme } = useTheme();

    function animate() {
        if (!isAnimated) {
            return "visible"
        } else {
            if (isScrolled) {
                return "visible"
            } else {
                return "hidden"
            }
        }
    }

    return (
        <motion.header
            animate={animate()}
            variants={{ hidden: { backgroundColor: "#FFFFFF00" }, visible: { backgroundColor: theme === 'dark' ? "#221603" : "#FFFFFF" } }}
            className={`z-30 flex items-center justify-between  ${isAnimated && 'fixed'} min-h-16 w-full p-4`} >
            <motion.div className="flex items-center gap-4"
                animate={animate()}
                variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
            >
                <Link href="/">  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                /></Link>
                <h1 className="text-4xl font-display dark:text-white text-brown">Kennedy Adams</h1>
            </motion.div>
            <div className='flex items-center gap-4'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link href="/#about">    <FontAwesomeIcon className="text-2xl dark:text-white text-brown " icon={faUser} /></Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link href="/#contact">    <FontAwesomeIcon className="text-2xl dark:text-white text-brown " icon={faEnvelope} /></Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}>
                    <FontAwesomeIcon className="text-2xl dark:text-white text-brown " icon={faCircleHalfStroke} />
                </motion.button>
            </div>
        </motion.header>
    );
}

export default Header;