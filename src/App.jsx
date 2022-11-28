import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes'
import DefaultLayout from "./components/layouts/DefaultLayout/indexDefaultLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((rou, index) => {
            const Page = rou.component || DefaultLayout
            const Layout = rou.layout
            return <Route key={index} path={rou.path} element={
              <Layout>
                <Page />
              </Layout>}
            />
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;