import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Github from './pages/Github';

import './css/home.css';

function App() {
    return (
        <div className='container center'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="github" element={<Github />} />
            </Routes>
        </div>
    )
    }

export default App