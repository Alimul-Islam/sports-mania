import React from 'react';
import  { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'; 
import image from '../../Assets/stadium.jpeg';
import './ExploreLeague.css'; 

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars,faFootballBall ,faMapMarkerAlt,faFlag} from '@fortawesome/free-solid-svg-icons' 
const elfaGander = <FontAwesomeIcon icon={faVenusMars} />
const elfaFootballBall = <FontAwesomeIcon icon={faFootballBall} />
const elaMapMarkerAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
const elafaFlag = <FontAwesomeIcon icon={faFlag} />
const ExploreLeague = () => {
    const{idLeague} =useParams();
    const{name} =useParams();
    const [explore, setExplore] = useState({})
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{ 
            const slice_data = data.leagues[0]; 
            console.log(slice_data);
            setExplore(slice_data);
        }) 
    },[])


    return (
        <div>
             <div className="cardView">
                 <div className = "Header-main">  
                <div> <img className="img-blur" src={image} alt="" />
                    <div className = "heading" ><img src={explore.strBadge} alt=""/></div>
                </div> 
                </div>
            </div>
            <div className="container">
                <div className = "row">
                    <div className="panel bg-primary">
                    <div className="col-md-6 float-left">  
                        <h3>{name}</h3> 
                        <span>
                            <span>{elaMapMarkerAlt} Founded : {explore.intFormedYear}  </span>
                        </span> 
                        <br/>
                        <span>{elafaFlag} Country: {explore.strCountry}</span>
                        <br/>
                        <span> {elfaFootballBall} Sports Type: {explore.strSport}</span>
                        <br/>
                        <span>{elfaGander} Gender: {explore.strGender}</span>

                    </div> 
                    <div className="col-md-6  float-left">
                        <img className="sub-img" src={explore.strFanart1} alt=""/>
                    </div>
                    </div> 
                    <div className="text-justify">
                        <p className="bg-transparent p-3">
                             {explore.strDescriptionEN}
                        </p> 
                        <footer>
                      <span><a href={explore.strFacebook}> Facebook</a></span> 
                      <span><a href={explore.strTwitter}> Twitter</a></span>
                      <span><a href={explore.strYoutube}>  Youtube</a></span>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreLeague;