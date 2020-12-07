import './App.css';
import React, {useState} from "react";
var library = {
  "The Immortals of Meluha" : "Amish Tripathi",
  "The Secret of the Nagas" : "Amish Tripathi",
  "The Oath of the Vayuputras" : "Amish Tripathi",
  "Percy Jackson and the Olympians : The Lightning Thief" : "Rick Riordan",
  "Percy Jackson and the Olympians : The Golden Fleece" : "Rick Riordan",
  "Percy Jackson and the Olympians : The Titan's Curse" : "Rick Riordan",
  "Percy Jackson and the Olympians : The Battle of the Labyrinth" : "Rick Riordan",
  "Percy Jackson and the Olympians : The Last Olympian" : "Rick Riordan",
  "Heroes of Olympus : The Lost Hero" : "Rick Riordan",
  "Heroes of Olympus : The Son of Neptune" : "Rick Riordan",
  "Heroes of Olympus : The Mark of Athena" : "Rick Riordan",
  "Heroes of Olympus : The House of Hades" : "Rick Riordan",
  "Heroes of Olympus : The Blood of Olympus" : "Rick Riordan",
  "Four" : "Veronica Roth",
  "Divergent" : "Veronica Roth",
  "Allegiant" : "Veronica Roth",
  "Theodore Boone" : "John Grisham",
  "Timeline" : "Michael Crichton",
  "Jurassic Park" : "Michael Crichton",
  "Revolution 2020" : "Chetan Bhagat"   
}

var knownTitles = Object.keys(library);
function App() {
  const [auth,setAuthor] = useState("");

  function bookHandler(event){
    var input = event.target.value;
    var auth = library[input];
    if(auth === undefined){
      auth = "This has not been yet added in our database";
    }
    setAuthor(auth);
  }

  function bookClickHandler(title){
    var auth = library[title];
    setAuthor(auth);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Author finder</h1>
        <input onChange={bookHandler} />
        <h3>{auth}</h3>
        <h3 style={{color : "orange"}}>Titles we have so far</h3>
        <div class="books" style={{display:"flex", flexWrap:"wrap"}}>
        {knownTitles.map(function (book) {
        return (
          <span
            onClick={() => bookClickHandler(book)}
            style={{ fontSize: "2rem", padding: "0.25rem", cursor: "pointer" , flex: "20%", color: "yellowgreen", border: "2px red solid"}}
            key={book}
          >
            {book}
          </span>
        );
      })}
      </div>
      </header>
    </div>
  );
}

export default App;
