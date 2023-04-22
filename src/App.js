import { Routes, Route, BrowserRouter } from "react-router-dom";
import VerCategorias from "./components/VerCategorias";
import CreateCategoria from "./components/CreateCategoria";
import EditarCategoria from "./components/EditarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<VerCategorias/>} />
          <Route path="/create" element ={<CreateCategoria/>} />
          <Route path="/edit/:id" element ={<EditarCategoria/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
