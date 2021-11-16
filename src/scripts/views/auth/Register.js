import "../../../styles/components/auth-card.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../components";

const Register = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ NIK, setNIK ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const handleRegister = () => {
        console.log(name, email, NIK, password, confirmPassword);
    }

    return (
        <div className="auth container">
            <div className="auth-card">
                <Hero />
                <form>
                    <div className="form-group">
                        <label>Nama</label>
                        <input placeholder="example@email.com" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input placeholder="example@email.com" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>NIK</label>
                        <input placeholder="32XXXXXXXXXXXXXX" type="text" value={NIK} onChange={e => setNIK(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Kata Sandi</label>
                        <input placeholder="***********" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Konfirmasi Kata Sandi</label>
                        <input placeholder="***********" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={handleRegister}>Daftar</button>
                    <Link to="/login" className="btn btn-block text-white mt-10">Sudah punya akun? <span className="text-primary">Masuk di sini</span></Link>
                </form>
            </div>
        </div>
    )
};

export default Register;