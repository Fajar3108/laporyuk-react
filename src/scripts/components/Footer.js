import "../../styles/components/footer.css";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="mt-30">
            <p className="text-white">Copyright &copy; {date.getFullYear()} - MaFI - All right reserved</p>
        </footer>
    )
}

export default Footer;