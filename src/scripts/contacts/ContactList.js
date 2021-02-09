import { useContacts, getContacts } from "./ContactDataProvider.js";
import { Contact } from "./Contact.js";

// exporting and declaring the main function of this module
export const ContactList = () => {
  let contactListContainer = document.querySelector("#contact-list-container");
  contactListContainer.innerHTML = "";

  getContacts().then(() => {
    
      let contacts = useContacts();

   
      contacts.forEach((singleContact) => {
        contactListContainer.innerHTML += Contact(singleContact);
      });
  })
}

document.querySelector("#contact-list-container").addEventListener("click", () => {
  ContactList();
})