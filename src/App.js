import './App.css';

//Routing
import {BrowserRouter,Routes,Route} from "react-router-dom";

//Components
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
  return (
      <BrowserRouter>
           <div>
             <Header/>
             <Routes>
               <Route path='/' element={<Product/>}/>
             </Routes>
           </div> 
      </BrowserRouter>
  );
}

export default App;
