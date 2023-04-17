import '../Style/style.css'

const RelativeContacts = ({familyConnections}) => {

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