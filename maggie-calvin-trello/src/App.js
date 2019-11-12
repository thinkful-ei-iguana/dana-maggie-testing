import React from 'react';
import './App.css';
import List from './List';


export default function App({store}) {
  
  let storeList = store.lists.map(list => 
    (<List header={list.header} cards={store.getCards(list.cardIds)}/>));
  console.log(store);
  
  return (
    <main class="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{storeList}</div>
    </main>
  
  )//hello)
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }