
// Importing the required components
import Board from './board';
import Info from "./info";
import "./App.css";
  
// Importing the useState hook
import { useState } from 'react';
  
function App() {
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState('');
    
    const resetBoard = () => {
        setReset(true);
    }
  
    return (
        <div className="App">
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
            {/* <Info /> */}
        </div>
    );
}
  
export default App;
