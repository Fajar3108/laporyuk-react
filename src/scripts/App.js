import '../styles/App.css';
import '../styles/components/button.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComplaintDetail, ComplaintList, CreateComplaint, ForgotPassword, Login, Profile, ProfileSetting, Register, Notification, NotFoundPage } from './views';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route exact path="/" element={<ComplaintList/>}/>
        <Route exact path="/complaint/:id" element={<ComplaintDetail/>}/>
        <Route exact path="/complaint/create" element={<CreateComplaint/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/settings" element={<ProfileSetting/>}/>
        <Route exact path="/notification" element={<Notification/>}/>
        <Route exact path="*" element={<NotFoundPage/>} />
      </Routes>
    </main> 
  );
};

export default App;
