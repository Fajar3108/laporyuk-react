import { ComplaintCard } from ".";

const ComplaintWrapper = () => {
    return (
        <div className="complaints mt-20">
            <ComplaintCard complaintId="1" />
            <ComplaintCard complaintId="2" />
            <ComplaintCard complaintId="3" />
            <ComplaintCard complaintId="4" />
            <ComplaintCard complaintId="5" />
            <ComplaintCard complaintId="6" />
        </div>
    );
};

export default ComplaintWrapper;