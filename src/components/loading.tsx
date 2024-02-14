"use client";
import { motion } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
export default function Loading() {
    return (
        <motion.svg
            initial="hidden"
            animate="visible"
            viewBox="0 0 100 100"
        >
            <motion.path x={-5} y={-5} variants={draw} custom={1} d="M49.99,38.454l.01-30c2.8,0,5.54.29,8.18.84l4.49-7.79c.83-1.44,2.67-1.93,4.1-1.1l16.46,9.5c1.43.83,1.92,2.66,1.1,4.1l-4.51,7.8c1.82,2.04,3.44,4.26,4.82,6.64l.01.03-25.98,15c0-.01-.01-.02-.02-.03-1.73-2.98-4.96-4.99-8.65-4.99h-.01Z" fill="none" stroke="#ffdc5e" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={draw} custom={6} d="M60,48.454c0,1.81-.48,3.51-1.33,4.98,0,.01-.01.02-.02.03l25.98,15.01.02-.03c1.36-2.36,2.49-4.87,3.35-7.49h9c1.66,0,3-1.34,3-3v-19c0-1.66-1.34-3-3-3h-9c-.86-2.63-1.99-5.13-3.35-7.48l-.01-.03-25.99,15c.01.01.02.02.02.03.85,1.47,1.33,3.17,1.33,4.98Z" fill="none" stroke="#c5ecac" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={draw} custom={5} d="M50,88.454c2.8,0,5.54-.29,8.18-.84l4.49,7.79c.83,1.44,2.67,1.93,4.1,1.1l16.46-9.5c1.43-.83,1.92-2.66,1.1-4.1l-4.51-7.8c1.82-2.04,3.43-4.26,4.81-6.63l.02-.03-25.98-15.01c0,.01-.01.02-.02.03-1.73,2.98-4.95,4.99-8.64,4.99h-.03s-.01,30-.01,30h.03Z" fill="none" stroke="#aef7ff" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={draw} custom={4} d="M20.18,75.104l-4.51,7.8c-.82,1.44-.33,3.27,1.1,4.1l16.46,9.5c1.43.83,3.27.34,4.1-1.1l4.49-7.79c2.63.55,5.36.84,8.15.84h.03s.01-30,.01-30h-.01q-.01,0-.02,0c-3.69-.01-6.91-2.01-8.63-4.99-.01-.01-.02-.02-.02-.03l-25.98,15,.01.03c1.38,2.38,3,4.6,4.82,6.64Z" fill="none" stroke="#d4bbfc" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={draw} custom={3} d="M3,60.954h9c.86,2.62,1.99,5.13,3.35,7.48l.01.03,25.99-15c-.01-.01-.02-.02-.02-.03-.85-1.47-1.33-3.17-1.33-4.98,0-1.82.49-3.52,1.34-4.99,0-.01,0-.02.01-.02l-25.98-15.01-.01.02c-1.36,2.36-2.49,4.86-3.36,7.5H3c-1.66,0-3,1.34-3,3v19c0,1.66,1.34,3,3,3Z" fill="none" stroke="#faab99" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={draw} custom={2} d="M16.77,9.904L33.23.404c1.43-.83,3.27-.34,4.1,1.1l4.49,7.79c2.64-.55,5.38-.84,8.18-.84l-.01,30c-3.69,0-6.91,2.01-8.64,4.99-.01,0-.01.01-.01.02l-25.98-15.01.01-.02c1.38-2.37,2.99-4.59,4.81-6.63l-4.51-7.8c-.82-1.44-.33-3.27,1.1-4.1Z" fill="none" stroke="#fcbc5d" stroke-miterlimit="10" stroke-width="2" />
            <motion.path variants={{ hidden: {}, visible: {} }} d="M24.734,52.533v-8.159c0-.552.448-1,1-1h12.851c.683,0,1.165-.669.949-1.316l-3.922-11.765c-.275-.825.562-1.584,1.357-1.229l41.584,18.579c.791.353.789,1.477-.004,1.828l-41.588,18.386c-.794.351-1.628-.407-1.353-1.231l3.926-11.777c.216-.648-.266-1.316-.949-1.316h-12.851c-.552,0-1-.448-1-1Z" fill="#fff" stroke-width="0" />

        </motion.svg>
    )
}
