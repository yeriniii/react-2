import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import fakeData from "fakeData.json";
import { useState } from "react";
const Router = () => {
  const [data, setData] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} setData={setData} />}
        ></Route>
        <Route
          path="letters/:id"
          element={<Detail data={data} setData={setData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
