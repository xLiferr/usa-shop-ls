import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/ProtectedLayout';
// Shared routes
import { Profile } from './pages/Profile';
import { Addresses } from './pages/Profile/Addresses';
import { CreateAddress } from './pages/Profile/Addresses/CreateAddress';
import { Shopping } from './pages/Profile/Shopping';
import { ChangePassword } from './pages/Profile/ChangePassword'
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
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';

import "./App.css";

function App() {
  return (
    <div className='usa-shop'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/accesorios" element={<Accesorios />}></Route>
            <Route path="/carteras" element={<Carteras />}></Route>
            <Route path="/hombre" element={<Hombre />}></Route>
            <Route path="/mochilas" element={<Mochilas />}></Route>
            <Route path="/mujer" element={<Mujer />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route element={<ProtectedLayout allowedRoles={["Cliente", "Administrador"]} />}>
              <Route path="/mi-cuenta" element={<Profile />}></Route>
              <Route path="/mi-cuenta/direcciones" element={<Addresses />}></Route>
              <Route path="/mi-cuenta/direcciones/crear" element={<CreateAddress />}></Route>
              <Route path="/mi-cuenta/compras" element={<Shopping />}></Route>
              <Route path="/mi-cuenta/contrasena" element={<ChangePassword />}></Route>
              <Route path="/carrito" element={<Cart />}></Route>
            </Route>
            <Route element={<ProtectedLayout allowedRoles={["Administrador"]} />}>
              <Route path="/web-admin" element={<WebAdmin />}></Route>
              <Route path="/web-admin/agregar-producto" element={<WAAddProduct />}></Route>
              <Route path="/web-admin/productos" element={<WAProducts />}></Route>
              <Route path="/web-admin/categorias" element={<WACategories />}></Route>
              <Route path="/web-admin/pedidos" element={<WAOrders />}></Route>
              <Route path="/web-admin/clientes" element={<WAClients />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
