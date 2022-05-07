import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "../Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {state} = useLocation()

    useEffect(()=>{
        characterService.getByCharacterList(state).then(({data})=>setCharacters(data))
    },[])

    return (
        <div>
            {characters.map(character=> <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};