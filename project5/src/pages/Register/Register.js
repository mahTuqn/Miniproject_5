import { useNavigate } from "react-router-dom";
import { isLogin, registerRequest } from "../../services/registerServices";
import { generateToken } from "../../utils/generateToken";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const token = generateToken();

    const isLoginRegister = await isLogin(email);

    if (isLoginRegister.length) {
      alert("Da ton tai tai khoan!");
    } else {
      const data = {
        fullName: fullName,
        email: email,
        password: password,
        token: token,
      };

      const res = await registerRequest(data);

      if (res) {
        navigate("/login");
      } else {
        alert("Sai tai khoan hoac mat khau");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h5>Logout</h5>
        <div>
          <input type="text" placeholder="Nhap ho ten" />
        </div>
        <div>
          <input type="text" placeholder="Nhap email" />
        </div>
        <div>
          <input type="password" placeholder="Nhap password" />
        </div>
        <div>
          <button type="submit">Dang ki</button>
        </div>
      </form>
    </>
  );
}

export default Register;
