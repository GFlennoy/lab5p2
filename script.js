//Create AddressBook & Contact classes
class Contact {
  //properties
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  } //extended method
  toString() {
    //return a string of name & email property
    return `${this.name} <${this.email}>`;
  }
}
//class AddressBook
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  //methods
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  //deleteAt method
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  //create getAt(index) **extended challenge
  getAtIndex(index) {
    return this.contacts[index];
  }
  //extended challenge**
  findContactByName(name) {
    this.contacts.forEach(contact => {
      let foundContact = {};
      if (contact.name === name) {
        console.log(contact.name);
        return contact;
      }
    });
  }
  //extended challenge**
  findContactsByRelation(relation) {
    let contactsToReturn = [];
    for (let contact of this.contacts) {
      if (contact.relation === relation) {
        contactsToReturn.push(contact);
      }
      return contact;
    }
  }
}
//create one instance of AddressBook
// instance an AddressBook object
let goodBook = new AddressBook();
//Call the AddressBook's add method
//add contacts to the address book instance
goodBook.add("Michael Jordan", "mj@jordan23.com", "248.777.9311", "homie");
goodBook.add("Mike Jones", "mj@cas.edu", "281.330.8004", "droog");
goodBook.add(
  "Grant Flennoy",
  "flennoyg@gmail.com",
  "248.207.2281",
  "young Bull"
);
console.log(goodBook);
//goodBook.deleteAt(0);
console.log(goodBook);
//Create & calling print function
function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact); //"contact" is the argument
  });
}
// Declare function
function display() {
  //create variable called container, defined as docqueryselector
  let container = document.querySelector("#contact-list");
  //look up why
  container.innerHTML = "";
  //create a for loop
  for (let contact of goodBook.contacts) {
    console.log(contact);
    //create variables for divs & p's. Make them for name, email, phone, and relation
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${contact.email}`;
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    //ASK. everytime i uncomment, my cards disappear.
    // //implement icon. First create it as a variable
    // let icon = document.createElement("i");
    // //now set icon attributes.
    // icon.classList.add("fas", "fa-trash"); //ASK! how do I target this in CSS?
    // icon.setAttribute("data-index-number", `${index}`);
    // newEntry.append(name, email, phone, relation);
    // document.querySelector("#contact-list").append(newEntry);
    card.append(name, email, phone, relation);
    container.append(card);
    card.setAttribute("class", "card");
  }
}
display();
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  //adding names. Start with a function
  const formData = new FormData(form);
  goodBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
});
//ASK
//referring to dom-code-along for remove addeventlistener. use arrow function
// removeEventListener("click", function() {
//   removeAdd.addEventListener("click", () => {
//     const myAddressBook = document.querySelectorAll(".card");
//     //need loop to seat every element
//     for (let contact of myContacts) {
//       this.contacts.goodBook.remove();
//     }
//   });
// });
// // see if you should reference deleteAt instead of line 130.
// // deleteAt method
// // deleteAt(index) {
// // this.contacts.splice(index, 1);
