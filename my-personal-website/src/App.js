import logo from './logo.svg';
import myImage from 'C/Users/15135/Documents/GitHub/PersonalWebsite/my-personal-website/public/index.html';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>My personal Website</h1>
          <p>This is the next part of my page, this is after the header</p>
          <div style={{ height: '2000px' }}></div> 
        </header>
    </div>
  );
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
//         <header className="App-name">
//           <h1>
//             My personal Website
//           </h1>
//         </header>
//       </header>
//     </div>
//   );
// }

export default App;
