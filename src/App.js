import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

      // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function App() {
      // console.log("API Key:", API_KEY);

  return (
    <div className="App">

     <h1 className='heading'> Random GIFS</h1>

     <div className='component_containing'>
      <Random />
      <Tag />

     </div>
    </div>
  );
}

export default App;
