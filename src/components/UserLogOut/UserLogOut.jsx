import "./UserLogOut.css";
import { logOut } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function UserLogOut({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogOut() {
        logOut();
        setUser(null);
        navigate("/");
    }

    return (
        <div className="UserLogOut">
            <div>{user.name}</div>
            <div className="email">{user.email}</div>
            <button className="btn-sm" onClick={handleLogOut}>
                LOG OUT
            </button>
        </div>
    );
}
