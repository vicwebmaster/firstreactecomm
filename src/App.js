import Home from './Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Layout from './Layout';
import LayoutII from './LayoutII';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyDashboard from './pages/MyDashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutII/>}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/shop" element={<Layout/>}>
            <Route index element={<Shop />}/>
          </Route>
          <Route path="/wishlist" element={<Layout/>}>
            <Route index element={<Wishlist />}/>
          </Route>
          <Route path="/cart" element={<Layout/>}>
            <Route index element={<Cart />}/>
          </Route>
          <Route path="/checkout" element={<Layout/>}>
            <Route index element={<Checkout />}/>
          </Route>
          <Route path="/dashboard" element={<Layout/>}>
            <Route index element={<MyDashboard />}/>
          </Route>
          <Route path="/about" element={<Layout/>}>
            <Route index element={<About />}/>
          </Route>
          <Route path="/contact" element={<Layout/>}>
            <Route index element={<Contact />}/>
          </Route>
          <Route path="/singleProduct" element={<Layout/>}>
            <Route index element={<SingleProduct />}/>
          </Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}/>
          <Route path="/resetPassword" element={<ResetPassword />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
