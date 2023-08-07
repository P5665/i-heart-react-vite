import HeartImg from "../assets/heart-icon.svg";
import HeartSVG from "./HeartSVG";

const CandyColoredHeart = ({ msg }) => {
    const colors = ["#b8e3f5", "#f5b8e4", "#b8f5b9", "#f5f3b8", "#e3b8f5", "#ffccf2"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("🚀 ~ file: CandyColoredHeart.jsx:8 ~ CandyColoredHeart ~ randomColor:", randomColor);

    return (
        <div className="relative w-full">
            <HeartSVG color={randomColor} className="w-full h-auto" />
            {/*
                Just as an image, but breaking this up as a component as well 
                <img className="w-full h-auto " src={HeartImg} alt="heart" /> 
            */}
            {/* Could use absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 but never used the inset property before and looks better.  Test in multiple browsers.*/}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white">
                <p className="text-center w-2/4 text-2xl font-bold">{msg}</p>
            </div>
        </div>
    );
};

export default CandyColoredHeart;
