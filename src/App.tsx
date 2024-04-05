import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Box = styled(motion.div)`
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: {scale: 1.5, rotateZ: 90},
    click: {scale: 1, borderRadius: "100px"},
    drag: {backgroundColor: "rgb(46, 204, 113)", transition: {duration: 10}},
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const Svg = styled.svg`
    width: 300px;
    height: 300px;

    path {
        stroke: white;
        stroke-width: 2;
    }
`;

const svg = {
    start: {pathLength: 0, fill: "rgba(255, 255, 255, 0)"},
    end: {
        fill: "rgba(255, 255, 255, 1)",
        pathLength: 1,
    },
};

const box = {
    entry: (isBack: boolean) => ({
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateZ: 360,
        transition: {
            duration: 1,
        },
    },

    exit: (isBack: boolean) => ({
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {duration: 1}
    }),
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked((prev) => !prev);
    const [id, setId] = useState<null | string>(null);
    return (
        <Wrapper>
            <Grid>
                {["1", "2", "3", "4"].map((n) => (
                    <Box onClick={() => setId(n)} key={n} layoutId={n} />
                ))}
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        variants={overlay}
                        onClick={() => setId(null)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Box layoutId={id} style={{ width: 400, height: 200 }} />
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;