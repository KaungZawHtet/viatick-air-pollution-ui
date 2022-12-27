# Overview

## Steps to open

For a ReactJS project, there is not much left to consider before setting up. Here are 2 simple steps.

1. Set up the server side first
2. After that, simply run `num install` and after that, run `npm run start`

## Project Exploration

1. The UI is built on a minimal layout compatible with leaflet.

2. There are 4 pages in the UI and all the requirments are built on the Map Page. The rest (Records Page, D3 Playground Page and About Page) are for debugging purposes.

3.According the requirements, in summery, major Functions in the Map Page are voronoi diagram rendering with triangles (by using data from sensors), Map Display with Leaflet, Triangles Coloring by PM 2.5 Data, Saving data into Log Server and export the Map.

3. No specific coordinates are written in the requirement. So I assume that I can point any coordinates on the world map. The Map in the UI is in the range of latitude 52 and longitude 21

4. The requirement does not say to use real PM 2.5 data from open air quality APIs. So I use a mocking API to get the data.









## Notable Modules

1. Leaflet for Map
2. D3 Delaunay for Voronoi rendering