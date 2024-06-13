import { Container } from "react-bootstrap";
import Nav from "./components/Nav/index.js";
import RouterMapping from "./pages/RouterMapping.jsx";

function App() {
    return (
        <>
            <Nav className="custom-nav" />
            <h1 className="text-center mt-5 mb-5">React Hil App</h1>

            <Container>
                <RouterMapping />
            </Container>
        </>
    );
}

export default App;
