import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/ProtectedLayout';
// Web Admin routes
import { WebAdmin } from './pages/WebAdmin';
import { WAAddProduct } from './pages/WebAdmin/WAAddProduct';
import { WAProducts } from './pages/WebAdmin/WAProducts';
import { WACategories } from './pages/WebAdmin/WACategories';
import { WAOrders } from './pages/WebAdmin/WAOrders';
import { WAClients } from './pages/WebAdmin/WAClients';
// Public routes
import { Home } from './pages/Home';
import { Accesorios } from './pages/Accesorios';
import { Carteras } from './pages/Carteras';
import { Hombre } from './pages/Hombre';
import { Mochilas } from './pages/Mochilas';
import { Mujer } from './pages/Mujer';

import "./App.css";

function App() {
  return (
    <div className='usa-shop'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/accesorios" element={<Accesorios />}></Route>
            <Route path="/carteras" element={<Carteras />}></Route>
            <Route path="/hombre" element={<Hombre />}></Route>
            <Route path="/mochilas" element={<Mochilas />}></Route>
            <Route path="/mujer" element={<Mujer />}></Route>
            <Route element={<ProtectedLayout allowedRoles={["Administrador"]}/>}>
              <Route path="/web-admin" element={<WebAdmin />}></Route>
              <Route path="/wa-agregar-producto" element={<WAAddProduct />}></Route>
              <Route path="/wa-productos" element={<WAProducts />}></Route>
              <Route path="/wa-categorias" element={<WACategories />}></Route>
              <Route path="/wa-pedidos" element={<WAOrders />}></Route>
              <Route path="/wa-clientes" element={<WAClients />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
