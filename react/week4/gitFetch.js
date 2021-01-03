import React, { useState, useEffect, useContext } from 'react'
import {UserContext} from '../App'
import {QueryContext} from '../App'


function GitFetch({setQuery, setSearchedGithub, setState}) {

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const searchArray = useContext(UserContext);
    const query= useContext(QueryContext) 


    useEffect(() => {
        
        let ignore = false;

        async function fetchdata() {
            setLoading(true)
            const response = await fetch(`https://api.github.com/search/users?q=${query}`)
            const json = await response.json();
            if (response.status === 403) {
                setMessage("You have reached to Limit of fetching from Github")
                setState(true)
            }else if (!ignore && query !== "") {
                setSearchedGithub(() => json.items)
            } else setState(false)
            setLoading(false)
            console.log('fetch github');
        }
        fetchdata();
        return (() => { ignore = true; });
        
    }, [ query, setSearchedGithub, setState ]);

    return (
            
        <div>
            <h1>Github User Searcher</h1>
            {message ? message : <input type="text" value={query} onChange={(e) => {
                setQuery(e.target.value)
                if (searchArray) setState(true)
            }}></input>}
            {loading ? <div>...Loading</div> : ''}
        </div>
    );
};

export default GitFetch


