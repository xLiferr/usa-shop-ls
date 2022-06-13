import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

// WEB ADMIN
import { WebAdmin } from './pages/WebAdmin';
import { WAAddProduct } from './pages/WebAdmin/WAAddProduct';
import { WAProducts } from './pages/WebAdmin/WAProducts';
import { WACategories } from './pages/WebAdmin/WACategories';
import { WAOrders } from './pages/WebAdmin/WAOrders';
import { WAClients } from './pages/WebAdmin/WAClients';

import "./App.css";

function App() {
  return (
    <div className='usa-shop'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/web-admin" element={<WebAdmin />}></Route>
          <Route path="/wa-agregar-producto" element={<WAAddProduct />}></Route>
          <Route path="/wa-productos" element={<WAProducts />}></Route>
          <Route path="/wa-categorias" element={<WACategories />}></Route>
          <Route path="/wa-pedidos" element={<WAOrders />}></Route>
          <Route path="/wa-clientes" element={<WAClients />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
