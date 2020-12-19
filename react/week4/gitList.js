import React, { useContext } from 'react'
import { UserContext } from '../App';
import GitRepoInfo from './gitRepoInfo'

function GitList() {

    const searchArray = useContext(UserContext)
    
    return (
        <div>
            <ul>
                {searchArray.map((item) => <li key={item.id} ><div className="repoList"><span>{item.login}</span><GitRepoInfo login={item.login}/></div></li>)}
            </ul>
        </div>
    )
}

export default GitList;