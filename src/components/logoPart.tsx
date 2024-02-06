import { JSX, SVGProps } from "react"
import { motion } from "framer-motion"
import React from "react"

// function template({ rotate, x, y}: { rotate: number, x: number, y: number}) {
//     return `translateX(${60}) translateY(${48.5})  rotate(${rotate}) translateX(${x}) translateY(${y}) `
//   }

const LogoPart: React.FC<{ color: string, rotate: number, onclick: any, id: number}> = (props) => {
// console.log()
// , x: 60, y:48.45
    return (
        <motion.path
             whileHover={{ scale: 1.1 }}
            fill={props.color}
            // transformTemplate={template}
            // initial={{ x: 60, y:48.45}}
            onClick={props.onclick(props.id)}
            animate={{originX: 0,  originY: 0.5,  rotate: props.rotate , x: 65, y: 48.45}}

            // animate={{ rotate: props.rotate }}
            // transform={{ x: 60, y:48.45}}
            d="m 0 20.01 l 34.63 20.02 l 0.02 -0.03 c 1.36 -2.36 2.49 -4.87 3.35 -7.49 h 9 c 1.66 0 3 -1.34 3 -3 v -19 c 0 -1.66 -1.34 -3 -3 -3 h -9 c -0.86 -2.63 -1.99 -5.13 -3.35 -7.48 v -0.03 s -34.65 20.01 -34.65 20.01 z"
        />
        
   )
}


// function move(angle : number, distance : number) {
//     // const rad = (angle % 360) * Math.PI / 180;


//     let [x, y] = [50,48.45];
//     x +=  Math.sin(rad) / 10;
//     y -=  Math.cos(rad) / 10;
//     console.log(y)
//     return [x, y];
// }

// const LogoPart = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
//     return (<svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={100}
//         height={96.91}
//         data-name="logo"
//         {...props}
//     >
//         <g   transformOrigin={"0 50%"}>
//         <path
//             fill={props.color}

//             // animate={{ rotate: props.rotate }}
//             transform={`rotate(${props.rotate})`}
//             d="m 60 48.45 c 0 1.81 -0.48 3.51 -1.33 4.98 c 0 0 -0.01 0.02 -0.02 0.03 l 25.98 15.01 l 0.02 -0.03 c 1.36 -2.36 2.49 -4.87 3.35 -7.49 h 9 c 1.66 0 3 -1.34 3 -3 v -19 c 0 -1.66 -1.34 -3 -3 -3 h -9 c -0.86 -2.63 -1.99 -5.13 -3.35 -7.48 v -0.03 l -26 15 c 0 0.01 0.02 0.02 0.02 0.03 a 9.912 9.912 0 0 1 1.33 4.98 z"
//         />
//         </g>

//     </svg>)
// }



// const MotionLogoComp = motion(LogoPart)
export default LogoPart


