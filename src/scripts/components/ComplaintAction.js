import "../../styles/components/complaint-action.css";

const ComplaintAction = () => { 
    return (
        <div className="complaint-action mt-60">
            <div className="left">
                <div className="form-group">
                    <input placeholder="cari disini..." type="text" />
                </div>
            </div>
            <div className="right">
                <button className="btn btn-surface text-primary">Urutkan</button>
                <button className="btn btn-surface text-primary ml-10">Filter</button>
            </div>
        </div>
    );
};

export default ComplaintAction;