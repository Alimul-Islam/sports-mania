import React, { useEffect, useState } from 'react';
import Image from '../../ImageData/image.json'
import { useParams } from "react-router-dom";


import LeagueList from './../../LeagueList/LeagueList';

const LeagueDetail = () => { 
    const[ leagues, setLeague] = useState([]);
    const [image, setImage] = useState([]); 
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const slice_data = data.leagues.slice(0, 9); 
            console.log(slice_data);
            setLeague(slice_data);
        }) 

    },[]) 
    useEffect(() =>{
       setImage(Image); 
       console.log(Image);
    },[]) 
    return ( 
        <div>  
           {leagues.length > 0 &&
            leagues.map((league,index) => 
            <LeagueList key={league.idLeague}  {...league} {...league.index}></LeagueList>
            )}        
        </div>
    );
};

export default LeagueDetail;