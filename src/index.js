import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './redux/store';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
    <Provider store={store}>
        <AuthContextProvider>
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
        </AuthContextProvider>
    </Provider>
    </Router>
  </React.StrictMode>
);