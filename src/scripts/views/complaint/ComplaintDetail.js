import "../../../styles/views/complaint-detail.css";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Footer, Navbar } from "../../components";

const ComplaintDetail = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log('id', id);
    })
    return (
        <div className="container">
            <Navbar />
            <div className="complaint mt-60">
                <div className="complaint-detail">
                    <h1 className="text-white text-thin h2">Judul Laporan</h1>
                    <p className="text-light">Laporan ini dibuat pada 31 Agustus 2004</p>
                    <div className="complaint-support mt-20">
                        <button className="btn btn-outline-primary">Beri Dukungan</button>
                        <span className="text-primary btn cursor-default">340 Dukungan</span>
                    </div>
                    <p className="text-white d-block mt-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vivamus risus, euismod mauris nunc mauris. Fermentum, vel tempus et in viverra at orci morbi. Risus amet et euismod facilisi fermentum, et, varius bibendum volutpat. Facilisi aliquam blandit egestas vel, velit. Felis dignissim sed tempor dolor sit scelerisque lobortis sapien. Suspendisse risus pellentesque ullamcorper nisi interdum viverra tortor cursus aliquam. Tempor enim sed tristique praesent nulla etiam. Ipsum ullamcorper facilisis suspendisse tempus nunc imperdiet. Dolor mauris condimentum dictum metus. Lorem interdum nec nunc placerat pellentesque aliquam risus pellentesque. Pulvinar eget dictum tempus, vulputate tristique viverra. Vestibulum suscipit turpis integer sollicitudin massa enim id ultrices imperdiet.
                        <br />
                        <br />
                        Tellus diam viverra vivamus urna eget consectetur. Aliquet habitasse habitasse tortor a sodales lacus. Commodo nibh mattis blandit tristique est. Sit ultrices pellentesque id a dui scelerisque ornare. Tristique eget vestibulum arcu pellentesque vitae augue.
                        <br />
                        <br />
                        Eget convallis velit eget sed neque. Sit et enim vel neque, at cursus. Imperdiet cursus placerat rhoncus felis phasellus egestas nisl. Vitae arcu tortor ullamcorper eget viverra. Eget hendrerit facilisis in ultricies viverra venenatis arcu. Et at est lectus nec enim lacinia iaculis eu. Enim suspendisse nulla erat dolor et volutpat sit tristique quam. Et a nascetur facilisi sed. Donec pulvinar nec amet a, laoreet cursus sem donec quis. Lectus nulla sodales ultrices hendrerit tempus vitae a.
                    </p>
                    <div className="complaint-images mt-20">
                        <div className="image">
                            <img src="https://sustainabletravel.org/wp-content/uploads/Row-Background-Tall-Mountain-Silhouette-1-Low.jpg" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://sustainabletravel.org/wp-content/uploads/Row-Background-Tall-Mountain-Silhouette-1-Low.jpg" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://sustainabletravel.org/wp-content/uploads/Row-Background-Tall-Mountain-Silhouette-1-Low.jpg" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://sustainabletravel.org/wp-content/uploads/Row-Background-Tall-Mountain-Silhouette-1-Low.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="complaint-right">
                    <div className="complaint-info">
                        <div className="user-info btn btn-block btn-outline-light text-left d-flex align-items-center">
                            <div className="profile-image">
                                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" alt="Profile" />
                            </div>
                            <strong className="ml-10 text-white">Username</strong>
                        </div>
                        <div className="btn btn-block btn-outline-light cursor-default d-flex justify-space-between align-items-center mt-10">
                            <p>Tanggal Kejadian</p>
                            <strong>31 Agustus 2021</strong>
                        </div>
                        <div className="btn btn-block btn-outline-light cursor-default d-flex justify-space-between align-items-center mt-10">
                            <p>Waktu Kejadian</p>
                            <strong>10:00</strong>
                        </div>
                        <div className="btn btn-block btn-outline-light cursor-default d-flex justify-space-between align-items-center mt-10">
                            <p>Lokasi Kejadian</p>
                            <strong>Jakarta Timur, DKI Jakarta</strong>
                        </div>
                        <div className="btn btn-block btn-outline-light cursor-default d-flex justify-space-between align-items-center mt-10">
                            <p>Status Laporan</p>
                            <strong className="text-primary">Menunggu</strong>
                        </div>
                    </div>
                    <div className="complaint-responses mt-30">
                        <h4 className="h4 text-white text-thin">Tanggapan</h4>
                        <div className="response btn btn-block btn-surface text-left text-light mt-20 p-20">
                            <div className="user-info d-flex align-items-center">
                                <div className="profile-image">
                                    <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" alt="Profile" />
                                </div>
                                <strong className="ml-10 text-white">Username</strong>
                            </div>
                            <p className="mt-20"><strong>1 September 2021</strong></p>
                            <p className="mt-10 limit-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vivamus risus, euismod mauris nunc mauris. Fermentum, vel tempus et in viverra at orci morbi. Risus amet et euismod facilisi fermentum, et, varius bibendum volutpat. Facilisi aliquam blandit egestas vel, velit. Felis dignissim sed tempor dolor sit scelerisque lobortis sapien. Suspendisse risus pellentesque ullamcorper nisi interdum viverra tortor cursus aliquam. Tempor enim sed tristique praesent nulla etiam. Ipsum ullamcorper facilisis suspendisse tempus nunc imperdiet. Dolor mauris condimentum dictum metus. Lorem interdum nec nunc placerat pellentesque aliquam risus pellentesque. Pulvinar eget dictum tempus, vulputate tristique viverra. Vestibulum suscipit turpis integer sollicitudin massa enim id ultrices imperdiet.</p>
                            <p className="text-primary mt-10"><strong>Lihat Semua</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ComplaintDetail;