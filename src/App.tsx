import React from 'react';
import AppRouter from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './store/store';


const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
