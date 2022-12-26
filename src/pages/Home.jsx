import React from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'This is Home Page'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Home