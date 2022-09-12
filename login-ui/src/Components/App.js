import '../App.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from '../Reducer/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Home from './Home'
import About from './About'
import Login from './Login'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} >
              <Route path='home' element={<Home />} />
              <Route path='about' element={<About/>} />
            </Route>
            <Route path='/signIn' element={<Login />} />
            <Route path='/signUp' element={<Register />} />
            <Route path='*' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider >
  );
}

export default App;
