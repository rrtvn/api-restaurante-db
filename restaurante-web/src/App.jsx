
import './App.css';
import { BaseRouter } from "./routes/BaseRouter";
import { store } from './store/store';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>

      <BaseRouter></BaseRouter>
    </Provider>
  )
}

export default App;
