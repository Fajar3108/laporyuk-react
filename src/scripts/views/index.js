import Login from './auth/Login.js'
import Register from './auth/Register.js'
import ForgotPassword from './auth/ForgotPassword.js'
import ComplaintList from './complaint/ComplaintList.js';
import ComplaintDetail from './complaint/ComplaintDetail.js';
import CreateComplaint from './complaint/CreateComplaint.js';
import Profile from './user/Profile.js';
import ProfileSetting from './user/ProfileSetting.js';
import Notification from './user/Notification.js';
import NotFoundPage from './error/NotFoundPage.js';

export {
    Login, Register, ForgotPassword,
    ComplaintDetail, ComplaintList, CreateComplaint,
    Profile, ProfileSetting, Notification,
    NotFoundPage
}