import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/* TODO: Add Navbar */}

      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSiFiMovies} />
    </div>
  );
}

export default App;
