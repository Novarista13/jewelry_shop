import './App.css';
import Footer from './reusable/Footer';
import NavBar from './reusable/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
