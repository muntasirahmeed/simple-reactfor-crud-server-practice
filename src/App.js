import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Components/AddProducts/AddProducts';
import MangeProducts from './Components/MangeProducts/MangeProducts';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<AddProducts></AddProducts>}></Route>
        <Route path='manage' element={<MangeProducts></MangeProducts>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
     </Routes>
    </div>
  );
}

export default App;
