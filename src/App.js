import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <div>Hello World</div>
      </Container>
      <Container className="bg-blue-500">
        <div>Hello World</div>
      </Container>
    </div>
  );
}

export default App;
