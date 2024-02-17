import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {FormRecherche} from "./FormRecherche";
import { SearchWord } from './Searchword';
import { useState } from 'react';
import axios from 'axios'

export const Dictionnaire = () => {
     //state
     const [data, setData] = useState("");
     const [searchMot, setSearchMot] = useState('');
     
     //comportements
     const recherche = (newVal) => {
         setSearchMot(newVal)
     }

     const valideSearch = () => {
         console.log('success');
         query();
     }
        const query = () => {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchMot}`)

            .then(response => {
                setData(response.data[0])
                console.log(response.data[0]);
            })
            .catch(error => {
                console.error(error);
            });  
        } 

        // phonetics du mot a chercher
        function playAudio() {
            let audio = new Audio(data.phonetics[0].audio);
            audio.play();
        }
 
    return(
        <div className="Container px-5 dictionaire py-5">
            <div className="row ">
                <div className="col-sm-6 mx-auto bg-primary">
                    <FormRecherche onChange={recherche} value={searchMot} onClick={valideSearch} 
                    motRech={searchMot} phonetic={ data &&
                        data.phonetics[1].text }  />   
                </div> 
            </div>
            <div className="row mt-3">
                <div className="col-sm-6 mx-auto ">
                {
                    data &&
                        <div>
                            <SearchWord words={data.word} onClick={() => playAudio()} titre1="Nature:"
                                nature={data.meanings[0].partOfSpeech} titre2="Definition:" 
                                def={data.meanings[0].definitions[0].definition} titre3="Synonym:" titre4="Example:"
                                syno={data.meanings[1].synonyms[1]} example={data.meanings[1].definitions[1].example} />
                        </div>
                }
                </div>
            </div>
        </div>
    ) 
}