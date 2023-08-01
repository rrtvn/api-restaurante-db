
import './App.css';
import {Provider} from 'react-redux';
import { BaseRouter } from "./routes/BaseRouter";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BaseRouter></BaseRouter>

    </Provider>
  )
}

export default App;
