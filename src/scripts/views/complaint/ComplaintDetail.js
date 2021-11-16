import { useEffect } from "react";
import { useParams } from "react-router";
import { Navbar } from "../../components";

const ComplaintDetail = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log('id', id);
    })
    return (
        <div className="container">
            <Navbar />
            <h1 className="title">ComplaintDetail</h1>
            <p>Complaint ID : {id}</p>
        </div>
    )
};

export default ComplaintDetail;