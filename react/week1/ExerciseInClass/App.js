//import logo from './logo.svg';
import './App.css';
import UserAttributes from './components/UserItemExpanded'
import Users from './data/UserList' 


function App() {
const mm=Users.map(x=>{
  return (
      <UserAttributes
        fullname={x.fullname} 
        adress={x.adress} 
        age={x.age}
        height={x.height}
        languages={x.languages.map(y=><div>{y}</div>)}
      />
  );
})
  return <ul>{mm}</ul>;
}

export default App;

