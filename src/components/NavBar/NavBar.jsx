import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            {user ? (
                <>
                    <span>Welcome, {user.name}</span>
                    <Link to="" onClick={handleLogOut}>
                        Log Out
                    </Link>
                </>
            ) : (
                <Link to="/auth">Log In / Sign Up</Link>
            )}
            &nbsp; | &nbsp;
            <Link to="/">Home Page</Link>
            {user && (
                <>
                    &nbsp; | &nbsp;
                    <Link to="/search">Search</Link>
                    &nbsp; | &nbsp;
                    <Link to="/journal">Journals</Link>
                </>
            )}
        </nav>
    );
}
