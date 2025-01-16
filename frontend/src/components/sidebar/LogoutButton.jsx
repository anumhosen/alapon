import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    <div className="flex mt-auto p-1">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <span className="text-gray-300 sm:ml-4 ml-1">{authUser.username}</span>
    </div>
  );
};

export default LogoutButton;
