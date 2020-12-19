import React, { useState } from 'react'


function GitRepoInfo(props) {

    const [repo, setRepo] = useState([])
    const [display, setDisplay] = useState({ show: false })

    function repoInfo() {

            async function fetchdata() {
                const response = await fetch(`https://api.github.com/users/${props.login}/repos`)
                const json = await response.json();
                setRepo(() => json)
        };
        fetchdata();
        setDisplay({ show:!display.show });
    };
      
    return (
            <div className="repo">
            {display.show ? <div>{repo.map(repoItem => <div key={repoItem.id}>{repoItem.name}</div>)}</div> : ''}
            <button style={{ width: "100px", height: "40px" }} onClick={repoInfo}>Get Repo Info</button>
        </div>
        
        
    )
}

export default GitRepoInfo
