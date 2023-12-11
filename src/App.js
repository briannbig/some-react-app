import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating/StarRating';

function App() {
  return (

    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={e => { alert("Thank you for your feedback") }}
      />
    </div>
  );
}

export default App;
