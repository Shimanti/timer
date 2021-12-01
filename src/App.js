import './App.css';

function App() {
  const timeLeft = () => {
    let year = new Date().getFullYear()
    let difference =+new Date(`1/27/${year}`) - new Date()
    console.log(year, difference)
    return year
  }

  return (
    <div className="App">
      {timeLeft()}
    </div>
  );
}

export default App;
