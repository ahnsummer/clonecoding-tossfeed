import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Finance from "@/views/finance";
import Loading from "@/views/loading";
import Login from "@/views/login";
import Toss from "@/views/toss";

export const AppRoutes = () => (
  <Routes>
    <Route path="/loading" element={<Loading />} />
    <Route path="/login" element={<Login />} />
    <Route path="/toss" element={<Toss />} />
    <Route path="/finance" element={<Finance />} />
    <Route path="/finance/:category/:page" element={<Finance />} />
  </Routes>
);