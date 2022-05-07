import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './episodes.module.css'
import {Episode} from "../Episode/Episode";
import {episodeActions} from "../../redux";



const Episodes = () => {
    const {episodes, prev, next} = useSelector(state => state.episodes)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(episodeActions.getAll({page:query.get('page')}))
    },[query])

    const nextPage = () => {
        const nextPage = +query.get('page')+1
        setQuery({page:`${nextPage}`})
    };
    const prevPage = () => {
        const prevPage = +query.get('page')-1
        setQuery({page:`${prevPage}`})
    };


    return (
        <div>
            <div className={css.episodes}>{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {Episodes};