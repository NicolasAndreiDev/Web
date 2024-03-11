import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Motoboy from "./pages/motoboy";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:id" element={<Motoboy />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;