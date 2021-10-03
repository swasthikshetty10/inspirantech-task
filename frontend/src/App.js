
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Mission from "./Components/Mission";
import InfoPage from "./Components/InfoPage";
import WhyUS from "./Components/WhyUsPage";
import NewsAndPost from "./Components/NewsAndPost";
import Footer from "./Components/Footer";
import Traning from "./Components/Traning";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/trainings">
            <Trainings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function Home() {
  return <>
    <NavBar />
    <LandingPage />
    <Mission />
    <InfoPage />
    <WhyUS />
    <NewsAndPost />
    <Footer />
  </>
}
function Trainings() {
  return <>
    <NavBar />
    <Traning />
    <WhyUS trainings={true} />
    <Footer trainings={true} />
  </>
}
export default App;
