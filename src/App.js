import { Routes, Route, BrowserRouter } from "react-router-dom";
import VerEstudiantes from "./components/VerEstudiantes";
import CreateEstudiante from "./components/CreateEstudiante";
import EditarEstudiante from "./components/EditarEstudiante";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<VerEstudiantes/>} />
          <Route path="/create" element ={<CreateEstudiante/>} />
          <Route path="/edit/:id" element ={<EditarEstudiante/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
