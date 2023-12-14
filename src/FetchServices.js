import axios from 'axios';

const getAllServices = (setMyService) => {
    axios.get('http://localhost:7000')
    .then(({data})=> {console.log(data)
    setMyService(data)}
    
)}

const addService = (title, setTitle, setMyService) => {
    axios.post('http://localhost:7000/saveServices', { title} )
    .then((data)=> {console.log(data)
    setTitle('')
    getAllServices(setMyService)
    }
)}

const editService = (ServiceId, title, setTitle, setService, setEditing) => {
    axios.post('http://localhost:7000/editService', {_id: ServiceId, title})
    .then((data)=> {
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllServices(setService)
    })
}

const deleteService = (_id, setMyService) =>{
    axios.post('http://localhost:7000/deleteService', {_id})
    .then((data)=> {
        console.log(data)
        getAllServices(setMyService)
    })
}
export { getAllServices, addService, editService, deleteService };