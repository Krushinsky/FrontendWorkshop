import { useState, useEffect } from 'react';
import './App.css';
import { MyServices } from './MyServices'
import { getAllServices, addService, editService, deleteService } from './FetchServices';


function Service() {

  const [myService, setService] = useState([]);
  const [title, setTitle] =useState('');
  const [editing, setEditing] = useState(false);
  const [ServiceId, setServiceId] = useState('')

  useEffect(() => {
    getAllServices(setService)
  },[])

  const updatingInInput = (_id, title)=> {
    setEditing(true)
    setTitle(title)
    setServiceId(_id)
  }

  return(
    <div className='Reviews'>
      <h3>
      Reviews
      </h3>
      <input
      className='Input' 
      type = 'text' 
      placeholder = "Add a review"
      value={ title }
      onChange={(e) => setTitle(e.target.value)}
      />
      <button className='BtnComments' disabled={!title} onClick=
        
        {editing ? ()=> editService(ServiceId, title, setTitle, setService, setEditing) : ()=> addService(title, setTitle, setService) }>
        { editing ? "Edit" : "Add"}
      </button>
      {/* <MyServices text ='We got here'/> */}

      {myService.map((service) => <MyServices text={service.title} key={service._id}
      updatingInInput={() => updatingInInput(service._id, service.title)}
      deleteService={() => deleteService(service._id, setService) }
      />
      )}


    </div>
    
  )
}

export default Service;
