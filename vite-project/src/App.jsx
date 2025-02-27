import './App.css'

import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* NavBar component */}
          <NavBar />

          {/* Define Routes for different categories */}
          <Routes>
            <Route exact path="/about" element={<News pageSize={6} country="us" category="general" />} />
            <Route exact path="/business" element={<News pageSize={6} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News pageSize={6} country="us" category="general" />} />
            <Route exact path="/health" element={<News pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={6} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={6} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
