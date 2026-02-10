import { useDispatch } from "react-redux";
import { setCookie } from "../../cookieUtils/cookieUtils";
import { loginRequest } from "../../services/loginServices";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../action/Action";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const res = await loginRequest(email, password);

    if (res.length > 0) {

      setCookie("id", res[0].id, 1);
      setCookie("fullName", res[0].fullName, 1);
      setCookie("token", res[0].token, 1);

      dispatch(checkLogin(true));
      console.log(res[0].fullName);
      navigate("/");
      
    } else {
      alert("Khong thanh cong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div>
          <input type="text" placeholder="Nhap email" />
        </div>
        <div>
          <input type="password" placeholder="Nhap mat khau" />
        </div>
        <div>
          <button type="submit">Dang nhap</button>
        </div>
      </form>
    </>
  );
}

export default Login;
