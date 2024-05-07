import Carousel from "./components/Carousel/Carousel.jsx";
import angularLogo from "./assets/angular.svg";
import reactLogo from "./assets/react.svg";
import vueLogo from "./assets/vue.svg";

function App() {
    const images = [angularLogo, reactLogo, vueLogo];
    return (
        <>
            <Carousel images={images} />
        </>
    );
}

export default App;
