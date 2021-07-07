import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ChatBot from './Components/ChatBot';



function App() {
  return (
    <Provider store={store}>
      <div className="conteudo">
          <Header/>            
          <Home/>
          <ChatBot/>      
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
