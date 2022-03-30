import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Foods from './Foods/Foods';
import PageNotFound from './PageNotFound/PageNotFound';
import FoodInfo from './Food/FoodInfo/FoodInfo';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/Food' element={<Foods></Foods>}> </Route>
        <Route path='/Food/:foodId' element={<FoodInfo></FoodInfo>}> </Route>
        <Route path='*' element={<PageNotFound/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
