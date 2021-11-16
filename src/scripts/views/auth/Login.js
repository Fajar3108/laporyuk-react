import { Link } from "react-router-dom";
import "../../../styles/components/auth-card.css";
import { Hero } from "../../components";

const Login = () => {
    return (
        <div className="auth container">
            <div className="auth-card">
                <Hero />
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input id="email" placeholder="example@email.com" type="email" />
                    </div>
                    <div className="form-group">
                        <label id="password" for="password">Kata Sandi</label>
                        <input placeholder="***********" type="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <Link to="/forgot-password" className="btn btn-block text-primary mt-10">Lupa Kata Sandi ?</Link>
                    <Link to="/register" className="btn btn-block text-white mt-60">Belum punya akun? <span className="text-primary">Daftar Sekarang!</span></Link>
                </form>
            </div>
        </div>
    )
};

export default Login;