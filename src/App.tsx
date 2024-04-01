import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const Wrapper = styled(motion.div)`
    height: 200vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-color: white;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    place-self: center;
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
    start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    end: {
        fill: "rgba(255, 255, 255, 1)",
        pathLength: 1,
    },
};

const boxVariant = {
    initial: {
        opacity:0,
        scale:0,
    },
    visible: {
        opacity:1,
        scale:1,
        rotateZ: 360,
    },
    leaving: {
        opacity:0,
        y:50,
    },
}

function App() {
    const[showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (
        <Wrapper >
            <button onClick={toggleShowing}>Click</button>
            <AnimatePresence>{showing? <Box variants ={boxVariant} initial="initial" animate="visible" exit="leaving"/>: null}</AnimatePresence>
        </Wrapper>
    );
}

export default App;