import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';

import Header from 'common/Header'
import styled from 'styled-components';
import SliderComponent from 'common/SlideToggle'

import { useDispatch, useSelector } from 'services/hooks';
import { getFacts } from 'ducks/data';
import { addFavorite } from 'ducks/favorites';



const PrimeContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
  img{
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: auto;
    display: block;
  }
`;


const Prime: React.FC = () => {
  const dispatch = useDispatch();
  const [isCat, setCat] = useState(true);
  const facts = useSelector<any>((state) => state.data);
  const favorites = useSelector((state) => state.favorites);
  const container = useRef<HTMLDivElement>(null);

  const getFact = (cats: boolean) => {
    dispatch(getFacts(cats));
  };

  const addToFavorite = (fact: string) => {
    dispatch(addFavorite(fact));
  }

  const handleSlider = () =>   setCat(!isCat);

  useEffect(() => {
    if(container.current){
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../static/json/cats-loader.json') //kan dit beter?
    })
  }
  }, [container])

  useEffect(() => {
    getFact(isCat);
  }, [isCat]);


  return (
    <>
      <PrimeContent>
      <Header favoriteCount={favorites.favorites?.length}/>
        <SliderComponent>
        <input type="checkbox" id="toggle" onChange={handleSlider} />
        <div className="emoji"></div>
        <label htmlFor="toggle"></label>
      </SliderComponent>
        <button onClick={() => getFact(isCat)}>Get a {isCat ? 'cat' : 'dog'} pic!!</button>
        <button onClick={() => addToFavorite(facts?.data)}>Add fact to favorites!</button>
        {facts.loading ? <div className="container" ref={container}></div>: <img src={facts?.data} />}
      </PrimeContent>
    </>
  );
};

export default Prime;
