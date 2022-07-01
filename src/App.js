import './Own.css';
import Data from './data.json'

function App() {
  const box = [];
  for (let i = 0; i < Data.length; i++) {
    box.push(<tr><td>{Data[i].index}</td><td>{Data[i]._id}</td><td>{Data[i].guid}</td></tr>);
  }
return (
<div className="App">
    <table>
        <tbody>

{ box}

        </tbody>
    </table>
</div>
);
}


export default App;
