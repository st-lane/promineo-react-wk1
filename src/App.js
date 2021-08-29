// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginFormJSX';
import Navigation from './components/navigationJSX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React: Week 1 - Login form</h1>
      <Navigation />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
