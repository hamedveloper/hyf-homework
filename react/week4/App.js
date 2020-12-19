import React, {useState} from 'react'
import './App.css';
import GitFetch from './components/gitFetch';
import GitList from './components/gitList'

export const UserContext = React.createContext()
export const QueryContext = React.createContext()

function App() {
  const [searchedGithub, setSearchedGithub] = useState([]);
  const [state, setState] = useState(false)
  const [query, setQuery] = useState("");


  return (
    <div className="App">
      <UserContext.Provider value={searchedGithub}>
        <QueryContext.Provider value={query}>
          <GitFetch {...{ query, setQuery, setSearchedGithub, setState }} />
          <div className="content">
          {state ? <div><GitList /></div> : 'No Result'}
          </div>
        </QueryContext.Provider>
      </UserContext.Provider>
    </div>

  );
};

export default App;
