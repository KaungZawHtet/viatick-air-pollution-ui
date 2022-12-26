import React from 'react';
import Header from '../components/layout/Header'


const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'This is Home Page'

  return (
    <div>

      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Home