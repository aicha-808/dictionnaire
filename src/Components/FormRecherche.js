import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaSearch } from "react-icons/fa";

export const  FormRecherche = ({value, onChange, onClick, motRech, phonetic}) => {

    return(
    <>
        <div className="input-group p-3 ">
            <input onChange={(event) => onChange(event.target.value)} value={value}
             type="search" className="form-control" placeholder="Chercher..."></input>
            <button className='btn-warning border-0'
            onClick={(event) => onClick(event.preventDefault())}
            > <FaSearch size="20px" />
            </button>
        </div>   
        <p className='text-center'> {motRech}<br/> {phonetic}</p>
    </>  
    )
}