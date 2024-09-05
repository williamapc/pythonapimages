
// function App() {
//   return (
//     <div className="App">
//       <h1>Images Gallery</h1>
//     </div>
//   );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// export default App;


const App = () =>{
  return (
    <div className="App">
      <Header title="Gallery of Image From Unsplash"/>
    </div>
  );
}

export default App;