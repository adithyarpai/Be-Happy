import React,{ useState} from "react";
import Confetti from "react-dom-confetti";

const noOptions = [{
    key: 1,
    title: "No",
}, {
    key: 2,
    title: "Why Not?"
}, {
    key: 3,
    title: "Why not spice up life with a dash of unpredictability?"
}, {
    key: 4,
    title: "But I like seeing you happy (and with me????)"
}, {
    key: 5,
    title: "You know I could have programmed it to be an infinite loop. How long will you say no?"
}, {
    key: 6,
    title: "Okay maybe I was lying there.."
}, {
    key: 7,
    title: "Come on, I'm trying so hard"
}, {
    key: 8,
    title: "You know it's not easy to come up with this"
}, {
    key: 9,
    title: "Trust me this my last try"
}, {
    key: 10,
    title: "I swear I will disabled this if you dont press yes."
}]

function Button(){

    const [headingText, setHeadingText] = useState('Can you plis smile?')
    const [noButtonText, setNoButtonText] = useState('No');
    const [yesButtonText, setYesButtonText] = useState('Yes');
    const [isNoFinal, setIsNoFinal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yesButtonSize, setYesButtonSize] = useState(30);
    const [confettiActive, setConfettiActive] = useState(false);
    const [catImage, setCatImage] = useState('./Images/rupert-cat.gif');

    const style = {
        heading: {
            fontSize: "65px"
        },

        containerStyle: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "87vh",
            gap: "20px",

        },

        yesButtonStyle: {
            fontSize: `${yesButtonSize}px`,
            padding: '15px'
        },

        noButtonStyle: {
            fontSize: "30px",
            padding: '15px'
        },
    };

    function handleNoClick() {
        if (currentIndex < noOptions.length - 1) {
            // Update button text with the next item in the array
            setNoButtonText(noOptions[currentIndex + 1].title);
            setYesButtonSize((prevSize) => prevSize + 15);
            setCurrentIndex(currentIndex + 1);
        } else {
            setNoButtonText("Fuck you. Just press yes now.")
            setIsNoFinal(true);
        }
    }

    function handleYesClick() {
        setHeadingText(`See. That wasn't so hard was it?`)
        setYesButtonText('Now talk to me bitch')
        setCatImage('./Images/happy-cat-happy-happy-cat.gif')
        setIsNoFinal(true);
        setConfettiActive(true);
    }
    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 50,
        elementCount: 200,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    };

    return (
        <div className="bree-serif-regular" style={style.containerStyle}>
            <h1 style={style.heading}> {headingText}</h1>
            <Confetti active={confettiActive} config={confettiConfig} />
            <img src={catImage} alt="Love-Loading"/>
            <button style={style.yesButtonStyle} onClick={handleYesClick}>{yesButtonText}</button>
            <button style={style.noButtonStyle} onClick={handleNoClick} disabled={isNoFinal}>
                {noButtonText}
            </button>
            
        </div>
    );
}


export default Button;