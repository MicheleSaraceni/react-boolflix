import './App.css';
import HeaderComp from './components/HeaderComp';
import CardComp from './components/CardComp';

function App() {

  return (
    <>
      <header>
        <HeaderComp />
      </header>

      <main className="bg-light-gray vh-100 pt-60">
        <CardComp />
      </main>
    </>
  )
}

export default App
