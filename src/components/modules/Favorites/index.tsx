import React, { useEffect } from 'react';
import { useRef } from "react";
import styled from 'styled-components';

import { useDispatch, useSelector } from 'services/hooks';
import { removeFavorite, getFavorite } from 'ducks/favorites';
import { motion } from "framer-motion";

import Header from 'common/Header';



const FavoriteContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
  ul{
    list-style: none;
    li{
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
    /* position: relative; */
  img{
    user-select: none;
    object-fit: contain;
    width: 100%;
    height: 100%;
    margin: auto;
  }

    }
  }
  button{
    position: relative;
  }
`;


const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites)
  const constraintsRef = useRef(null);

  console.log(favorites)


  const removeFromFavorites = (fact: string) => {
    dispatch(removeFavorite(fact));
  }

  const recieveFromFavorites = () => {
    dispatch(getFavorite());
  }

  useEffect(() => {
    recieveFromFavorites();
  }, []);

  return (
    <>
      <FavoriteContent>
      <Header favoriteCount={favorites.favorites?.length}/>

        <motion.ul className="container" ref={constraintsRef}>
        { favorites.favorites ? favorites.favorites.map((item: string, index: number) =>
          <motion.li key={index} className="item" drag dragConstraints={constraintsRef}> <img src={item} draggable="false" /> <button onClick={() => removeFromFavorites(item)}>remove</button></motion.li>
        ) : null}
        </motion.ul>
      </FavoriteContent>
    </>
  );
};

export default Favorites;
