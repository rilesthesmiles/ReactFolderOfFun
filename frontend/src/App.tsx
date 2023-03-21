import React from 'react';
import logo from './logo.svg';
import './App.css';

const bandNames = [{name: "One", members: "Me, you", formed: 1998},
{name: "Two", members: "Yes", formed: 2002},
{name: "Three", members: "Okay", formed: 1020}];


interface BandProps {
  name: string;
  members: string;
  formed: number;
}

class Band extends React.Component<BandProps>{
  render(){
    
    const oneBand = this.props;

    return(
      <div>
        <h2>{oneBand.name}</h2>
        <h3>{oneBand.members}</h3>
        <h3>{oneBand.formed}</h3>

      </div>

    );


  }
}


function BandList(){
  return(
    <div>
      {bandNames.map((oneBand: BandProps) => <Band {...oneBand}/>)}
    </div>
  );
}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BandList/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
