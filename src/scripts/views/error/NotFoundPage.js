import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h1>404</h1>
        <p>Page Not Found <Link to="/">back to Home</Link></p>
    </div>
);

export default NotFoundPage;