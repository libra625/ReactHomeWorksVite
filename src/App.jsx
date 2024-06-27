import { Container } from "react-bootstrap";
import Nav from "./components/Nav/index.js";
import RouterMapping from "./router/RouterMapping.jsx";
import AuthTemplate from "./templates/AuthTemplate";

function App() {
    return (
        <AuthTemplate>
            <Nav className="custom-nav" />

            <Container>
                <RouterMapping />
            </Container>
        </AuthTemplate>
    );
}

export default App;
