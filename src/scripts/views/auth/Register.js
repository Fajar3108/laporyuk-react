import { Link } from "react-router-dom";
import "../../../styles/components/auth-card.css";
import { Hero } from "../../components";

const Register = () => {
    return (
        <div className="auth container">
            <div className="auth-card">
                <Hero />
                <form>
                    <div className="form-group">
                        <label>Nama</label>
                        <input placeholder="example@email.com" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input placeholder="example@email.com" type="email" />
                    </div>
                    <div className="form-group">
                        <label>NIK</label>
                        <input placeholder="32XXXXXXXXXXXXXX" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Kata Sandi</label>
                        <input placeholder="***********" type="password" />
                    </div>
                    <div className="form-group">
                        <label>Konfirmasi Kata Sandi</label>
                        <input placeholder="***********" type="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                    <Link to="/login" className="btn btn-block text-white mt-10">Sudah punya akun? <span className="text-primary">Masuk di sini</span></Link>
                </form>
            </div>
        </div>
    )
};

export default Register;