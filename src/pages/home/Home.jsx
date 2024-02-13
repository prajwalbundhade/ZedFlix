import React from 'react'
import './style.scss'

import HeroBanner from './heroBanner/HeroBanner'
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from './topRated/TopRated';
import Latest from './latest/Latest';
import BackToTopButton from '../../components/backToTop/BackToTopButton';
const Home = () => {
  return (
    <div className="homePage">
            <HeroBanner />
            
            <Trending />
            <Popular /> 
            <TopRated/>
            <Latest /> 
            <BackToTopButton/>
        </div>
  );
};

export default Home