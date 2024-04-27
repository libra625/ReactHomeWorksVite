import Definitions from "./components/Definitions.jsx";

function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return (
    <>
      <Definitions data={definitions} />
    </>
  )
}

export default App
