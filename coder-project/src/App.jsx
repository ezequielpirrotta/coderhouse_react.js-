import Header from './components/Header';
import Products from './components/Products';
//import './styles/styles.css';


function App() {
  return (
    <div className="container">
      <div className='row'>
        <Header/>
      </div>
      
      <div className='row'>
        <Products/>
      </div>
      
    </div>
  );
}

export default App;
