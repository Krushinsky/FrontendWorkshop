import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

export const MyServices = ({text, updatingInInput, deleteService}) => {


    return(
        <div>
            <p>{text}</p>
            {/* <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick={deleteService}></AiFillDelete> */}
        </div>
    )
}

