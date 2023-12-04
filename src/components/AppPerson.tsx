import React from 'react';
import './App.css';
import { Person, Country} from "./components/Person";
function App() {
// const getAge =(name: string) :number=>{
// return 99;
// // specifies that we obtaina string and retuns a number
// }

  return (
    <div className="App">
      <Person
      name="Vanistelrooy"
      email="masime@mailme"
      age={22}
      isMarried={true}
      friends={["Me","Gym","Alex"]}
      country={Country.Uganda}
      />
    </div>

  );
}

export default App;
