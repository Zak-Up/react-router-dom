import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const ReactTopics = () => {
    // let match = useMatch();
    // console.log(match);
    return (
        <div>
            <h3>React Topics</h3>
            <h4>Elige un tema</h4>
            <ul>
                <li>
                    <Link to='jsx'>JSX</Link>
                </li>
                <li>
                    <Link to='props'>Props</Link>
                </li>
                <li>
                    <Link to='estado'>Estado</Link>
                </li>
                <li>
                    <Link to='componentes'>Componentes</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/jsx' element={<><h2>JSX DOCS PAG</h2></>}/>
                <Route path='/props' element={<><h2>PROPS DOCS PAG</h2></>}/>
                <Route path='/estado' element={<><h2>ESTADO DOCS PAG</h2></>}/>
                <Route path='/componentes' element={<><h2>COMPONENTES DOCS PAG</h2></>}/>
            </Routes>
        </div>
    )
}

export default ReactTopics
