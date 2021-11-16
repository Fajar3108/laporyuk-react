import { Link } from "react-router-dom";
import "../../../styles/components/auth-card.css";
import { Hero } from "../../components";

const ForgotPassword = () => {
    return (
        <div className="auth container">
            <div className="auth-card">
                <Hero />
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="email" placeholder="example@email.com" type="email" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Konfirmasi Email</button>
                    <Link to="/login" className="btn btn-block text-primary mt-10">Masuk di sini</Link>
                    <Link to="/register" className="btn btn-block text-white mt-60">Belum punya akun? <span className="text-primary">Daftar Sekarang!</span></Link>
                </form>
            </div>
        </div>
    )
};

export default ForgotPassword;