import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes'
import DefaultLayout from "./components/layouts/DefaultLayout/indexDefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            const Page = route.component

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            } else if (route.img === null) {
              Layout = Fragment
            }

            return <Route
              key={index}
              path={route.path}
              element={<Layout>
                {!!route.img && <img
                  width={route.width}
                  height={route.height}
                  src={route.img}
                  alt="Human Image" />}
                <Page />
              </Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}


export default App;