import React from 'react';


const ContactList = (props) => {
    const {contacts} = props;
    console.log(contacts);

    const contactList = contacts.map((contact)=>{
        return (
            <div className="item">
                <div className='content'>
                    <div className='header'>
                        {contact.name}
                    </div>
                    <div>
                        {contact.email}
                    </div>
                    <i className='trash alternate outline icon'></i>
                </div>

            </div>
        );
    })
    return (
        <div className='ui celled list'>
            Contact List
            {contactList}
        </div>
    );

}

export default ContactList;