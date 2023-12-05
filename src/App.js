

import './App.css';
import Header from './components/header';
import Home from './components/home';
import Sidebar from './components/sidebar';
// function App({showState}) {
  function App() {
  return (
    <div>

   
      <div className="grid-container">

        <Header />
        <Sidebar />
        <Home/>
      
      </div>
    </div>
  );
}

export default App;
