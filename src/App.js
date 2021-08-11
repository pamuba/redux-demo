import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
           <CakeContainer/>
           <HooksCakeContainer/>
           <IceCreamContainer></IceCreamContainer>
        </header>
      </div>
    </Provider>
  );
}

export default App;
