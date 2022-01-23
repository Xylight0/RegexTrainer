import logo from './images/test.png';

function App() {
  return (
    <div className="bg-dark-gray w-screen h-screen">
      <div className="h-16 bg-gray w-screen">
        <div className="h-full w-16 p-2 ml-4 flex flex-row items-center gap-8">
          <img src={logo} alt="Regex Trainer Logo" className="invert"/>
          <p className="text-white text-2xl font-poppins">RegexTrainer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
