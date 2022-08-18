import React, { Suspense } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AddArticle from './AddArticle';
import Admin from './Admin';
import Home from './Home';
import Erfolg from './Erfolg';
import Buch from './Buch'
import About from './About';
import Veranstaltungen from './Veranstaltungen';
import Contact from './Contact';
import Spende from './Spende';
import Editbloger1 from './Editbloger1';
import Bloger from './Bloger';
import AddErfolg from './AddErfolg';
import AdminVeranstaltungen from './AdminVeranstaltungen';
import AdminErfolg from './AdminErfolg'
import EditErfoig from './EditErfoig';
import Adminimghome from './Adminimghome';
import AddImg from './AddImg';
export default function Router() {
  return (
    <BrowserRouter>
    
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Veranstaltungen" element={<Veranstaltungen />} />
        <Route path="/AddArticle"exact element={<AddArticle />} />
        <Route path="/AddErfolg"exact element={<AddErfolg />} />
        <Route path="/AdminVeranstaltungen"exact element={<AdminVeranstaltungen />} />
        <Route path="/AdminErfolg"exact element={<AdminErfolg />} />
        <Route path="/Adminimghome"exact element={<Adminimghome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Buch" element={<Buch />} />
        <Route path="/Erfolg" element={<Erfolg />} />
        <Route path="/Spende" element={<Spende />} />
        <Route path="/Bloger/:id" element={<Bloger />} />
        <Route path="/EditErfoig/:id" element={<EditErfoig />} />
        <Route path="/Editbloger1/:id" element={<Editbloger1 />} />
        <Route path="/AddImg" element={<AddImg />} />
        
      </Routes>
    </Suspense>
  
  </BrowserRouter>
  )
}


