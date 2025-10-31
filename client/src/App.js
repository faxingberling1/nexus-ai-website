import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AITools from './components/AITools';
import AIAgents from './components/AIAgents';
import Automation from './components/Automation';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import GetStarted from './components/GetStarted';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import APIDocumentation from './components/APIDocumentation';
import Documentation from './components/Documentation';
import TermsOfService from './components/Terms';
import Tutorials from './components/Tutorials';
import CaseStudyDetail from './components/CaseStudyDetail'; // Add this import
import Contact from './components/Contact';
import './App.css';
import CaseStudies from './components/CaseStudies';
import PrivacyPolicy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/api-docs" element={<APIDocumentation />} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="/tutorials" element={<Tutorials/>} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/terms" element={<TermsOfService/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;