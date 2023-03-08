// import "./App.css";
import { Header, Fotter } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Fotter />
    </div>
  );
}

export default App;
