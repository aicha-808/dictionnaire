import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FcSpeaker } from "react-icons/fc";

export const SearchWord = (props) => {
   

    return(
        <div className="p-5">
         <h2>{props.words}
            <span className='mx-1'
            onClick={props.onClick}>
                <FcSpeaker size="26px" />
            </span>
        </h2>
        <h4 className='text-success'>{props.titre1} </h4>
        <p>{props.nature}</p> 
        <h4 className='text-success'>{props.titre2} </h4>
        <p>{props.def}</p>  
        <h4 className='text-success'>{props.titre3} </h4>
        <p>{props.syno}</p>  
        <h4 className='text-success'>{props.titre4} </h4>
        <p>{props.example}</p>    
        </div>
        
    )
}