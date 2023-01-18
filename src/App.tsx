import React from "react";
import Header from "./components/Header";
import "./App.css";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
        <Header />
        <Routes>
          <Route element={<NotesPage />} path="/" />
          <Route element={<NotePage />} path="/note/:id" />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
