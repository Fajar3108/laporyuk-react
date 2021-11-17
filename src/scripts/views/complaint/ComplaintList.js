import "../../../styles/views/complaint.css";
import { Link } from "react-router-dom";
import { ComplaintAction, ComplaintWrapper, Footer, Hero, Navbar } from "../../components";

const ComplaintList = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero className="mt-60" />
            <Link to="/complaint/create" className="btn btn-primary mt-20">Kirim Laporan</Link>
            <ComplaintAction />
            <ComplaintWrapper />
            <Footer />
        </div>
    )
};

export default ComplaintList;