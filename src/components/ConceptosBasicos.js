import React from 'react';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import { Routes, Route, Navigate } from 'react-router-dom';
import MenuConceptos from './MenuConceptos';
import Usuario from '../pages/Usuario';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Login from '../pages/Login';
import Dashborad from '../pages/Dashborad';

const ConceptosBasicos = () => {
    let auth;
    auth = true;
    auth = null;


    return (
        <div>
            <h2>Conceptos Básicos</h2>
            <MenuConceptos/>
            
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<Acerca/>}/>
                <Route exact path='/contact' element={<Contacto/>}/>
                <Route exact path='/usuario/:username' element={<Usuario/>}/>
                <Route exact path='/productos' element={<Productos/>}/>
                <Route exact path='/acerca' element={<Navigate to='/about'/>}/>
                <Route exact path='/contacto' element={<Navigate to='/contact'/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={auth ? <Dashborad/> : <Navigate to='/login'/>}/>
                <Route path='/react/*' element={<ReactTopics/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
            
        </div>
    )
}

export default ConceptosBasicos
