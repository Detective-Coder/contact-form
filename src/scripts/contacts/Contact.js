export function Contact(contactObject){
  return `
  <section class="contact-card">
    <div class="contact-card-text">
      <h3>${contactObject.name}</h3>
      <p>Email: ${contactObject.email}</p>
      <p>Phone Number: ${contactObject.number}</p>
    </div>
  </section>`
}

// Today you'll be tasked with making a Contact List.
// The contact list should include a form with Name, Email and Phone Number inputs. Users should be able to create new contacts and see a list of their current contacts.
// Getting Started:
// i. make a Contact-List directory
// ii. cd into the Contact-List directory and create an api and src directory
// iii. in api, create a contact.json file
// iv. src will contain your index.html file, scripts directory and styles directory