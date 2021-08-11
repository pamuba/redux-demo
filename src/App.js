import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
           <ItemContainer cake/>
           <ItemContainer />
           <CakeContainer/>
           <HooksCakeContainer/>
           <IceCreamContainer></IceCreamContainer>
           <NewCakeContainer></NewCakeContainer>
        </header>
      </div>
    </Provider>
  );
}

export default App;
