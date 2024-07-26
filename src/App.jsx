import { Container } from "react-bootstrap";
import RouterMapping from "./router/RouterMapping.jsx";
import AuthTemplate from "./templates/AuthTemplate";

function App() {
    return (
        <AuthTemplate>
            <Container>
                <RouterMapping />
            </Container>
        </AuthTemplate>
    );
}

export default App;
