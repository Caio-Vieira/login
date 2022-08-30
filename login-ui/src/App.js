import './App.css';
import {Provider} from 'react-redux'
import { legacy_createStore as createStore } from 'redux';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import authController from './Reducer/index'


function App() {

  const store = createStore(authController)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Teste</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
