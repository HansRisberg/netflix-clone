
import './App.css';
import Row from './Row';
import requests from "./Request"
import Banner from './Banner';
import Nav from './Nav';
import { GoogleLogIn } from "./GoogleAuthentication";


function App() {

  return (
    
    <div className="app">
    <Nav />
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      {/* <GoogleLogIn /> */}
          
    </div>
  );
}

export default App;


