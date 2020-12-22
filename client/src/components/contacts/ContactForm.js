import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const {addContact, updateCurrent, current, clearCurrent} = contactContext;

    useEffect(() => {
        if(current != null){
            setContact(current)
        }else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const onChange = (e) => setContact({...contact, [e.target.name]: e.target.value })

    const {name ,email, phone, type} = contact
    
    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addContact(contact);
        }else{
            updateCurrent(contact)
        }
        
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    const clearAll = () => {
        clearCurrent();
    }

    return  (
        <div>
            <h2 className="text-primary">{current ? 'Edit Current' : 'Add Contact'}</h2>
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange} />
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange} />Personal {'  '}
            <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange} />Professional {'  '}
            <div className="">
                <input type="submit" value={current ? 'Update Current' : 'Add Contact'} className="btn btn-primary btn-block" />
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>}
            </form>
        </div>
    )
}

export default ContactForm