import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import Records from "./pages/Records";
import D3Playground from './pages/D3Playground';
import PdfDisplay from './pages/PdfDisplay';
const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Map />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/records" element={<Records />} />
          <Route path="/d3playground" element={<D3Playground />} />
          <Route path='*' element={<NotFound />} />

          <Route path="/pdfdisplay" element={<PdfDisplay />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
