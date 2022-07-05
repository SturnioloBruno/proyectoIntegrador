import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Api from "../Helpers/Api";
import "../../styles/Favourites/FavouritesList.css";
import HeaderProduct from '../Products/HeaderProduct';

function FavouritesList({type}) {
    const [favourites, setFavourites] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        //Cargo favoritos
        const getFavourites = async()=>{
            await fetch(Api + "favourites/findByUserId/" + id,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (favourites) {
                setFavourites(favourites);
            })
        }      
        getFavourites();
    }, [id]);

    return (
        <>
        <HeaderProduct name="Mis favoritos" type={type} />
        <section className="section__favourites-list">
            <ul>
                {/*favourites?.map((favourite) => {
                    
                */}
            </ul>
        </section>
        </>
    )
}

export default FavouritesList;