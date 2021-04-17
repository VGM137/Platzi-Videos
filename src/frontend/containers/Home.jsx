import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
/* import useInitialState from '../hooks/useInitialState.js' */
import '../assets/styles/App.scss'
import '../assets/styles/Media.scss'

/* const API = 'http://localhost:3000/initalState/' */

const Home = ({ myList, trends, originals }) => {
/*   const initialState = useInitialState(API) */
  return (
    <>
      <Header />
      <Search isHome />
        {myList.length > 0 &&
          <Categories title='Mi lista'>
            <Carousel>
              {myList.map(item => 
              <CarouselItem 
                key={item.id}
                {...item}
                isListed
              />
              )}
            </Carousel>
          </Categories>
        }

        <Categories title='Tendencias'>
          <Carousel>
            {trends.map(item => 
            <CarouselItem  
              key={item.id}
              {...item}/>
            )}
          </Carousel>
        </Categories>

        <Categories title='Originals'>
          <Carousel>
            {originals.map(item => 
            <CarouselItem  
              key={item.id}
              {...item}/>
            )}
          </Carousel>
        </Categories>
    </>
)};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);