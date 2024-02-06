
"use client";
import { fredoka } from '@/_ui/fonts'
import { useTheme } from '../_classes/theme';
import { MotionConfig } from "framer-motion"


export default function Body({
    children,
}: {
    children: React.ReactNode
}) {
    const { theme } = useTheme();
    return (
        // <MotionConfig reducedMotion="user">
        <body className={`${fredoka.className} antialiased ${theme}`}>
            {children}
        </body>
        // </MotionConfig>
    )
}

