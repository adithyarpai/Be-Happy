import React,{ useState} from "react";

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
    title: "Trust me this the last try"
}, {
    key: 10,
    title: "Fuck you. I've disabled it. Just press yes."
}]

function Button(){

    
    const [noButtonText, setNoButtonText] = useState('No');
    const [isNoFinal, setIsNoFinal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yesButtonSize, setYesButtonSize] = useState(20);

    const style = {
        heading: {
            fontSize: "65px"
        },

        containerStyle: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            gap: "20px",

        },

        yesButtonStyle: {
            fontSize: `${yesButtonSize}px`,
            padding: '15px'
        },

        noButtonStyle: {
            fontSize: "20px",
            padding: '15px'
        },
    };

    function handleNoClick() {
        if (currentIndex < noOptions.length - 1) {
            // Update button text with the next item in the array
            setNoButtonText(noOptions[currentIndex + 1].title);
            setYesButtonSize((prevSize) => prevSize + 10);
            setCurrentIndex(currentIndex + 1);
        } else {
            // If last item is reached, disable the button
            setIsNoFinal(true);
        }
    }

    return (
        <div style={style.containerStyle}>
            <h1 style={style.heading}> Can you plis smile?</h1>
            <button style={style.yesButtonStyle} >Yes</button>
            <button style={style.noButtonStyle} onClick={handleNoClick} disabled={isNoFinal}>
                {noButtonText}
            </button>
        </div>
    );
}


export default Button;