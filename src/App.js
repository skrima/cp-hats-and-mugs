import Stylesheet from 'reactjs-stylesheet';
import './App.css';
import First from './segments/First'
import Footer from './segments/Footer';
import Second from './segments/Second';
import Third from './segments/Third';

function App() {
  return (
    <div className="App">
          <First />
          <div style={styles.overlay}>
            <Second />
            <Third />
            <Footer />
          </div>
    </div>
  );
}

const styles = Stylesheet.create({
  overlay: {
    position: 'absolute',
    marginTop: '100vh',
    top: 0,
    left: 0,
    right: 0
  }
})

export default App;
