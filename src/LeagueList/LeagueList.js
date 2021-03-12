import React from 'react';
import { useHistory } from 'react-router';
import './LeagueList.css'; 
 
const LeagueList = ({ idLeague, strLeague ,strSport }) => {
    const history = useHistory();
    const showLeague = idLeague => {
        const url = 'league-'+idLeague+'-'+strLeague; 
        history.push(url);   
    }  
    return (
            <div className='col-md-4 col-sm-12 float-left mt-3' >
            <div className='border card-panel'>
              
            <h4>{strLeague}</h4>
            <p>Sports Type : {strSport}</p>

            <div className=" button-main">
                <button className='btn btn-primary' onClick={() => showLeague(idLeague)}>Explore</button>
            </div>
            </div>
        </div>
        
    ); 
};

export default LeagueList;