
// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Services from './components/Services';
import Nav from './components/Nav'
import Order from './components/Order'
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import NewProduct from './components/NewProduct'
import OfferedProd from './components/OfferedProducts'
import User from './components/User'
import UserDetail from './components/UserDetail';
import React from 'react';
import { AuthProvider } from './components/auth';
import Profile from './components/Profile';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';
import Signup from './components/Signup';
const LazyAbout=React.lazy(()=>import('./components/About'))
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <React.Suspense fallback="Loading...">
        <LazyAbout/>
        </React.Suspense>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/order-confirmation' element={<Order/>}/>
        <Route path='*' element={<NoMatch/>}/>
        <Route path='/products' element={<RequiredAuth>
          <Product/>
        </RequiredAuth>}>
          <Route index element={<OfferedProd/>}/>
          <Route path='new' element={<NewProduct/>}/>
          <Route path='offered' element={<OfferedProd/>}/>
        </Route>
        <Route path='/user' element={<User/>}>
          <Route path=':userId' element={<UserDetail/>}/>
        </Route>
        <Route path='/profile' element={<RequiredAuth>
          <Profile/>
        </RequiredAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Admin' element={<Admin/>}/>

      </Routes>
      
      </AuthProvider>
    </div>
  );
}

export default App;

