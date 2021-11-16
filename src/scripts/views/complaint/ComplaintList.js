import "../../../styles/views/complaint.css";
import { Link } from "react-router-dom";
import { ComplaintWrapper, Hero, Navbar } from "../../components";

const ComplaintList = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero className="mt-60" />
            <Link to="/complaint/create" className="btn btn-primary mt-20">Kirim Laporan</Link>
            <ComplaintWrapper />
        </div>
    )
};

export default ComplaintList;