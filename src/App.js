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
var bookCategory ={
  "Mythological fiction" : ["The Immortals of Meluha","The Secret of the Nagas","The Oath of the Vayuputras","Percy Jackson and the Olympians : The Lightning Thief","Percy Jackson and the Olympians : The Golden Fleece","Percy Jackson and the Olympians : The Titan's Curse","Percy Jackson and the Olympians : The Battle of the Labyrinth","Percy Jackson and the Olympians : The Last Olympian","Heroes of Olympus : The Lost Hero","Heroes of Olympus : The Son of Neptune","Heroes of Olympus : The Mark of Athena","Heroes of Olympus : The House of Hades","Heroes of Olympus : The Blood of Olympus"],
  
  "Fiction" : ["Four", "Divergent", "Allegiant", "Timeline", "Jurassic Park", "Revolution 2020"],

  "Child fiction" : ["Theodore Boone","Percy Jackson and the Olympians : The Lightning Thief","Percy Jackson and the Olympians : The Golden Fleece","Percy Jackson and the Olympians : The Titan's Curse","Percy Jackson and the Olympians : The Battle of the Labyrinth","Percy Jackson and the Olympians : The Last Olympian","Heroes of Olympus : The Lost Hero","Heroes of Olympus : The Son of Neptune","Heroes of Olympus : The Mark of Athena","Heroes of Olympus : The House of Hades","Heroes of Olympus : The Blood of Olympus"]
}
var displayBooks = {
  "The Secret of the Nagas" : "Amish Tripathi",
  "Percy Jackson and the Olympians : The Last Olympian" : "Rick Riordan",
  "Four" : "Veronica Roth",
  "Jurassic Park" : "Michael Crichton",
  "Revolution 2020" : "Chetan Bhagat"   
}

var knownTitles = Object.keys(displayBooks);
var categories = Object.keys(bookCategory);
function App() {
  const [auth,setAuthor] = useState("");
  const [books,setBooks] = useState([]);
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
    setAuthor("Author is : "+auth);
  }
  

  function categoryHandler(category){
    var books = bookCategory[category];
    setBooks(books);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Recommender</h1>
        <h3>Search author for a book if you wish to</h3>
        <input style={{width:"50vw", height:"8vh"}} onChange={bookHandler} />
        <h3 id="author">{auth}</h3>
        <h3 style={{color : "green"}}>Categories</h3>
        <div class="text-center" style={{display:"flex", flexWrap:"wrap"}}>
          {categories.map(function (category){
            return(
              <button
                onClick = {() => categoryHandler(category)}
                style={{ fontSize: "2rem", marginLeft: "2.5%", marginRight: "2.5%", cursor: "pointer" , color: "green", flex:"25%", width:"80vw"}}
              >
                {category}
              </button>
            );
          })}
        </div>
        <h3><ul>
                {books.map((book,index) => 
                  <li
                    onClick={() => bookClickHandler(book)}
                    style={{ fontSize: "2rem", margin: "0.25rem", cursor: "pointer" , flex: "50%", color: "yellowgreen", width:"50vw"}}
                    key={index}>{book}
                  </li>
                )}
              </ul></h3>

        <h3 style={{color : "orange"}}>Some titles we have</h3>
        <div class="book" style={{display:"flex", flexWrap:"wrap"}}>
        {knownTitles.map(function (book) {
        return (
          <span
            onClick={() => bookClickHandler(book)}
            style={{ fontSize: "1.5rem", cursor: "pointer" , flex: "15%", color: "yellowgreen", width: "90vw"}}
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
