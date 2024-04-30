import Progress from "./components/Progress.jsx";

function App() {
  return (
    <>
      <Progress percentage={40} />
      <Progress percentage={90} />
      <Progress percentage={20} />
    </>
  );
}

export default App;
