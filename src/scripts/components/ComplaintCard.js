import { useNavigate } from "react-router";

const ComplaintCard = (props) => {
    const { complaintId } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/complaint/${complaintId}`);
    }

    return (
        <div className="complaint-card" onClick={handleClick}>
            <div className="complaint-header">
                <div className="user-image">
                    <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" alt="" />
                </div>
                <div className="header-detail">
                    <strong className="text-white">Username</strong>
                    <small className="text-light">31 Agustus 2021</small>
                </div>
            </div>
            <div className="complaint-content">
                <h3>Judul Laporan</h3>
                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor perferendis tempora voluptates repellendus similique, aliquam sapiente porro. Vitae blanditiis dolore ducimus, sequi aspernatur nobis facilis harum est odit voluptates.</p>
            </div>
            <div className="complaint-footer">
                <p className="text-white">City, Province</p>
                <strong className="text-primary">Status</strong>
            </div>
        </div>
    );
};

export default ComplaintCard;