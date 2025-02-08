import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function Blog3() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    )
}

interface CardProps {
    emoji: string
    hueA: number
    hueB: number
    i: number
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.84 }}
        >
            <div style={{ ...splash, background }} />
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    hello
                </div>
            <motion.div style={card} variants={cardVariants} className="card" initial={{y:300}} whileInView={{y:10}} transition={{duration:1}}>
                <img src={emoji} alt="img" className="to-background h-full rounded-2xl"/>
            </motion.div>
            </div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    // offscreen: {
    //     y: 300,
    // },
    // onscreen: {
    //     y: 50,
    //     rotate: 0,
    //     transition: {
    //         type: "spring",
    //         bounce: 0.1,
    //         duration: 1,
    //     },
    // },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    // margin: "100px auto",
    // maxWidth: 700,
    // paddingBottom: 100,
    // width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: 0,
}

const splash: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    height:100
 }

const card: React.CSSProperties = {
    fontSize: 164,
    width: 700,
    height: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
}

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
    ["https://images.unsplash.com/photo-1651600444588-54790c125d30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",0, 900],
    ["https://images.unsplash.com/photo-1651600444588-54790c125d30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D", 0, 0],
]