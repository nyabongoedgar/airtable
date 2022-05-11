import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import IndexRoutes from "./routes/IndexRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
