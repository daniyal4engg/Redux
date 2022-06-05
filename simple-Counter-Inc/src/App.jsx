import "./App.css";
// import { CakeContainer } from "./components/CakeContainer";
import { HookCakeContainer } from "./components/HookCakeContainer";
import { IceCreamContainer } from "./components/icecreamContainer";
function App() {
  return (
    <div className="App">
      {/*<CakeContainer />*/}
      <HookCakeContainer />

      <IceCreamContainer />
    </div>
  );
}

export default App;
