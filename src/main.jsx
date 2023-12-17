import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/lato/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SpeedInsights } from "@vercel/speed-insights/react";
import TemaPlanin from "@theme/TemaPlanin.jsx";
import Login from "@pages/Login";
import Teste from "@pages/Teste.jsx";
import { Home } from "@pages/Home";
import { Calendario } from "@pages/Calendario";
import { Curso } from "@pages/Curso";
import { Disciplina } from "@pages/Disciplina";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/calendarios",
    element: <Calendario />,
  },
  {
    path: "/cursos",
    element: <Curso />,
  },
  {
    path: "/disciplinas",
    element: <Disciplina />,
  },
  {
    path: "/teste",
    element: <Teste />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={TemaPlanin}>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ThemeProvider>
  </React.StrictMode>,
);
