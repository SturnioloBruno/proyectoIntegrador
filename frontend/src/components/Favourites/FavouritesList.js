import { React, useState, useEffect } from 'react';
import Api from "../Helpers/Api";
import "../../styles/Favourites/FavouritesList.css";
import HeaderProduct from '../Products/HeaderProduct';

function FavouritesList({type}) {
    const [favourites, setFavourites] = useState(null);
    const id = JSON.parse(localStorage.getItem("user")).id;

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
        <div className='div__favourites-list'>
            <HeaderProduct name="Mis favoritos" type={type} />
            <section className="section__favourites-list">
                <ul>
                    {favourites?.map((favourite) => {
                        console.log(favourite);
                    })}
                </ul>
            </section>
        </div>
    )
}

export default FavouritesList;