import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoleRegisterPage from './pages/RoleRegisterPage'
import RolePage from './pages/RolePage';
import ArticlePages from './pages/ArticlePages'
import Article from './pages/Article'

{/* pasien */}
import LoginPasien from './pages/PasienPages/LoginPage';
import RegisterPasien from "./pages/PasienPages/RegisterPage";
import DashboardPasien from "./pages/DashboardPage";
import ProfilePasien from "./pages/PasienPages/ProfilePage"
import MyDoctors from "./pages/MyDoctors";
import Sidebar from "./assets/components/Sidebar";

{/* doctor */}
import LoginDoctor from './pages/DoctorPages/LoginPage';
import RegisterDoctor from "./pages/DoctorPages/RegisterPage";
import DashboardDoctor from "./pages/DoctorPages/Dashboard"
import SidebarDoctor from "./assets/components/doctorsComponents/Sidebar"
import ProfileDoctor from "./pages/DoctorPages/Profile"
import ArtikelPage from "./pages/DoctorPages/Article"



export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/Article" element={<ArticlePages />} />
        <Route path="/Article/judul" element={<Article />} />
        <Route path="/role" element={<RolePage />} />
        <Route path="/chooseRole" element={<RoleRegisterPage />} />
        <Route path="/role/LoginAsPasien" element={<LoginPasien />} />
        <Route path="/role/RegisterAsPasien" element={<RegisterPasien />} />
        <Route path="/role/LoginAsDoctor" element={<LoginDoctor />} />
        <Route path="/role/RegisterAsDoctor" element={<RegisterDoctor />} />

        {/* Route untuk pasien */}
        <Route path="/role/LoginAsPasien/*" element={<WithSidebar />} />
        

        {/* Route untuk dokter */}
        <Route path="/role/LoginAsDoctor/*" element={<AsDoctor />} />

      </Routes>
    </Router>
  );
}

//route user pasien
function WithSidebar() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 h-full fixed" />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<DashboardPasien />} />
          <Route path="profile" element={<ProfilePasien />} />
          <Route path="mydoctor" element={<MyDoctors />} />
        </Routes>
      </div>
    </div>
  );
}

function AsDoctor() {
  return (
    <div className="flex h-screen">
      <SidebarDoctor className="w-64 h-full fixed" />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<DashboardDoctor />} />
          <Route path="profile" element={<ProfileDoctor />} />
          <Route path="article" element={<ArtikelPage />} />
        </Routes>
      </div>
    </div>
  );
}

