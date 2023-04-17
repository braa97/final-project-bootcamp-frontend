import '../Style/style.css'

const RelativeContacts = ({familyConnections}) => {
  /*let familyConnections = [
    {
        name: "Rina Levi",
        contactNumber: "054-1234567",
    },
    {
        name: "Avi Cohen",
        contactNumber: "052-9876543",
    }
  ]*/
  
    return (
        <div class="container">
        <div class="relative-appointment-contacts-card">
          <h2>Relative Contacts</h2>
          <ul>
            {familyConnections.map(contact => <li>{contact.name +' : ' + contact.contactNumber}</li>)}
    
          </ul>
          <button>Add Contact</button>
        </div>
      </div>
      
    )
}

export default RelativeContacts