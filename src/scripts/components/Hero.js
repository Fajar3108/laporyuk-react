const Hero = (props) => {
    return (
        <div className={props.className}>
            <h1 className="text-white h1">Lapor<span className="text-primary">Yuk!</span></h1>
            <p className="text-light mt-10">Sampaikan laporan Anda langsung kepada instansi <br/>pemerintah berwenang</p>
        </div>
    )
}

export default Hero;