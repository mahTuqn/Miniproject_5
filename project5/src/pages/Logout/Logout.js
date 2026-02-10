import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../cookieUtils/cookieUtils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/Action";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  deleteAllCookies();

  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/");
  }, []);
  return <></>;
}

export default Logout;
