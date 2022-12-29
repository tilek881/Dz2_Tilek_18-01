
import './App.css';
import {rootReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import {createStore} from "redux";


const create = createStore(rootReducer)


function App() {
  return (
    <div className="App">
      <Provider create={create}>

      </Provider>
    </div>
  );
}

export default App;
