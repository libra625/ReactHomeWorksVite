import MarkdownEditor from "./components/MarkdownEditor";

function App() {
    return (
        <>
            <MarkdownEditor onContentChange={console.log} />
        </>
    );
}

export default App;
