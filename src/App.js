import './App.css';
import Welcome from './components/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ParamsComponent from './components/other';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/:word" element={<ParamsComponent />} />
        <Route path="/:word/:color/:bgCol" element={<ParamsComponent />}  />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
