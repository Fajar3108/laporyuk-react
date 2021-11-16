import { Link } from "react-router-dom";
import "../../../styles/components/auth-card.css";
import { Hero } from "../../components";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleLogin = () => {
        console.log(email, password);
        if (email && password) {
            navigate("/");
        }
    }
    return (
        <div className="auth container">
            <div className="auth-card">
                <Hero />
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="email" placeholder="example@email.com" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="password">Kata Sandi</label>
                        <input placeholder="***********" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Masuk</button>
                    <Link to="/forgot-password" className="btn btn-block text-primary mt-10">Lupa Kata Sandi ?</Link>
                    <Link to="/register" className="btn btn-block text-white mt-60">Belum punya akun? <span className="text-primary">Daftar Sekarang!</span></Link>
                </form>
            </div>
        </div>
    )
};

export default Login;