import styled from "styled-components";
import {motion} from "framer-motion";
import {useRef} from "react";

const Wrapper = styled.div`
    height: 100vh;
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

function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box drag
                     dragSnapToOrigin
                     dragElastic={0.5}
                     dragConstraints={biggerBoxRef}
                     variants={boxVariants}
                     whileHover="hover"
                     whileTap="click"
                     whileDrag="drag"/>
            </BiggerBox>
        </Wrapper>
    );
}

export default App;