import './App.scss';
import { Benefits } from './components/Benefits/Benefits';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Header />
        <Hero />
      </div>
      <Benefits />
    </div>
  );
}

export default App;
