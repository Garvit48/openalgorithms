import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import PersonalPage from './routes/PersonalPage/PersonalPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="about/developers/GarvitJoshi" element={<PersonalPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
