import CandyColoredHeart from "./components/CandyColoredHeart";

function App() {
    return (
        <>
            <nav className="flex justify-center justify-items-center items-center bg-indigo-500 text-white w-100 h-20">
                <h1 className="text-xl md:text-3xl">I ❤️ React</h1>
            </nav>
            <CandyColoredHeart msg={"blah"} />
        </>
    );
}

export default App;
