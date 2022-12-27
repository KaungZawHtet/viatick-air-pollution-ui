import React from 'react';
import Header from '../components/layout/Header'


const HomePage = () => {
  // page content
  const pageTitle = 'HomePage'
  const pageDescription = 'This is HomePage Page'

  return (
    <div>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default HomePage