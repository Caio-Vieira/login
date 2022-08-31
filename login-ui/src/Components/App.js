import '../App.css';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import allReducers from '../Reducer';
import Main from './Main'
import Home from './Home'
import Register from './Register'
import Login from './Login'


function App() {

  const store = createStore(allReducers, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path='signIn' element={<Login />} />
            <Route path='signUp' element={<Register />} />
            <Route path='home' element={ <Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
