import Body from '../components/Body/Body';
import Panel from '../components/Panel/Panel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import GetShift from '../components/GetShift/GetShift';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path='/getShifts' element={<GetShift />} />
                
                <Route path='/panel/*' element={<Panel />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;