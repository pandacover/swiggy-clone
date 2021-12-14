import { Hero, Features, Mobile, Footer } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (  
    <Router>
      <div className="App">
        <Hero />
        <Features />
        <Mobile />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
