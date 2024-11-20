
const username= document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("phone");
const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');
let contacts = [];

function checkInputname(){
    const NameValue = Name.value;

    if(nameValue === ""){
        errorInput(name, "Preencha com um nome ")
    }else{
        const formItem = name.parentElement;
        formItem.classList = "form-content"
    }
}

function addContact(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const contact = { name, phone, email };
  contacts.push(contact);
  updateContactList();
  form.reset();
}

function updateContactList() {
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${rodolfo.name} - ${rodolfo.phone} - ${contact.email}</span>
      <button onclick="deleteContact(${index})">Excluir</button>
    `;
    contactList.appendChild(li);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  updateContactList();
}

form.addEventListener('submit', addContact);


