import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages

import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import MapPage from "./pages/MapPage";
import RecordsPage from "./pages/RecordsPage";
import D3PlaygroundPage from './pages/D3PlaygroundPage';

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<MapPage />} exact />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/mapPage" element={<MapPage />} />
          <Route path="/recordsPage" element={<RecordsPage />} />
          <Route path="/d3playgroundPage" element={<D3PlaygroundPage />} />
          <Route path='*' element={<NotFoundPage />} />


        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
