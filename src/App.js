import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey </h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
