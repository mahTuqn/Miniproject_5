import { NavLink, Outlet } from "react-router-dom";
import "./Layout-default.scss";
import { getCookie } from "../cookieUtils/cookieUtils";
import {useSelector} from "react-redux";

function LayoutDefault() {
  const token = getCookie("token");

  const isLogin=useSelector(state=>state.loginReducer);
  console.log(isLogin);
  
  const navLinkActive = (e) => {
    if (e.isActive) {
      return "menu__link menu__link--active";
    } else {
      return "menu__link";
    }
  };

  return (
    <>
      <div className="layoutDefault">
        <header className="layoutDefault__header">
          <div className="layoutDefault__header--logo">        
              Logo
          </div>
          <div className="layoutDefault__menu">
            <ul>
              <li>
                <NavLink to="home" className={navLinkActive}>
                  Home
                </NavLink>
              </li>

              {token && (
                <>
                  <li>
                    <NavLink to="topic" className={navLinkActive}>
                      Topic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="answers" className={navLinkActive}>
                      Answers
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="layoutDefault__account">
            <ul>
              {token ? (
                <li>
                  <NavLink to="logout" className={navLinkActive}>
                    Dang xuat
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="login" className={navLinkActive}>
                      Dang nhap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="register" className={navLinkActive}>
                      Dang ki
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </header>
        <main className="layoutDefault__main">
          <Outlet />
        </main>
        <footer className="layoutDefault__footer">
          Copyright @ 2025 by Element
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
