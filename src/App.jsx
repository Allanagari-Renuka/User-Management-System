import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import HomePage from './page'
import AboutPage from './about/page'
import CareersPage from './about/careers/page'
import FullStackDeveloperPage from './about/careers/fullstack-developer/page'
import UxUiDesignerPage from './about/careers/ux-ui-designer/page'
import DevOpsEngineerPage from './about/careers/devops-engineer/page'
import CustomerSuccessManagerPage from './about/careers/customer-success-manager/page'
import TeamPage from './about/team/page'
import MissionPage from './about/mission/page'
import PortfolioPage from './portfolio/page'
import ContactPage from './contact/page'
import WebDevPage from './services/web-development/page'
import DigitalMarketingPage from './services/digital-marketing/page'
import BrandingPage from './services/branding/page'
import UiUxPage from './services/ui-ux-design/page'
import LoginPage from './auth/login/page'
import SignUpPage from './auth/sign-up/page'
import SignUpSuccessPage from './auth/sign-up-success/page'
import DashboardPage from './dashboard/page'
import BlogPage from './blog/page'
import AuthCallbackPage from './auth/callback/page'
import ProfilePage from './profile/page'
import EditProfilePage from './edit-profile/page'
import DebugPage from './debug/page'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/careers" element={<CareersPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/branding" element={<BrandingPage />} />
        <Route path="/services/ui-ux-design" element={<UiUxPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/auth/sign-up-success" element={<SignUpSuccessPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/debug" element={<DebugPage />} />
      </Routes>
    </Layout>
  )
}

export default App
