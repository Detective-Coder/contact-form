import {saveContact} from "./ContactDataProvider.js"
import {ContactList} from "./ContactList.js"

// this is where we're printing the form
const contentTarget = document.querySelector("#form-container")



// this function contains the form where we get all the information that we want to save to our .json api
export const ContactForm = () => {
    contentTarget.innerHTML = `
        <div class="mb-3 col-sm-8">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3 col-sm-8">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3 col-sm-8">
          <label for="number" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="number">
        </div>
        <button id="saveContact">Save Contact</button>
    `
}

// getting a reference to the main element
const eventHub = document.querySelector("#form-container")
// if there's a click event in the main element, we run this function with clickEvent as the parameter
eventHub.addEventListener("click", clickEvent => {
  // if what the user clicked on has the id of saveNote... which is the button that saves the info...
  if (clickEvent.target.id === "saveContact") {
    
      // Make a new object representation of a note, this seems to be the object with the info that we want to get and save into the local api, stored in a variable
      let newContact = {
          // Key/value pairs here
          "name": document.querySelector("#name").value,
          "email": document.querySelector("#email").value,
          "number": document.querySelector("#number").value
      }
      console.log(newContact)

      // Change API state and application state, we're calling the saveNote function - which takes in the info from the argument of newNote and writes it to the local api, then we're calling the NoteList function, which I believe just gets everything again
      saveContact(newContact)
      .then(ContactList) // Refresh your list of notes once you've saved your new one
      console.log(newContact)
  }
})