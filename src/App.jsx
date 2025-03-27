import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Objectives from './pages/Objectives'
import RulesRegulations from './pages/RulesRegulations'
import EducationInitiatives from './components/EducationInitiatives'
import HealthcareSupport from './components/HealthcareSupport'
import WomenChildWelfare from './components/WomenChildWelfare'
import SkillDevelopment from './components/SkillDevelopment'
import SocialUpliftment from './components/SocialUpliftment'
import TribalRuralDevelopment from './components/TribalRuralDevelopment'
import Members from './pages/Members'
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/education-initiatives" element={<EducationInitiatives />} />
            <Route path="/programs/healthcare-&-medical-support" element={<HealthcareSupport />} />
            <Route path="/programs/women-&-child-welfare" element={<WomenChildWelfare />} />
            <Route path="/programs/skill-development" element={<SkillDevelopment />} />
            <Route path="/programs/social-upliftment-programs" element={<SocialUpliftment />} />
            <Route path="/programs/tribal-&-rural-development" element={<TribalRuralDevelopment />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/objectives" element={<Objectives />} />
            <Route path="/rulesregulations" element={<RulesRegulations />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}