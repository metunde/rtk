import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Counter from './Counter'
import './index.css';
import { store } from './app/store.jsx';
import  {Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Counter />
  </Provider>
,
)
