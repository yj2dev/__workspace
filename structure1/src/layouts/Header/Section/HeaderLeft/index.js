import { Link } from "react-router-dom";
import { HeaderLeftNav } from "../../styled";
import logoImg from "./img/logo.png";
const HeaderLeft = () => {
  const onClickLogo = () => {
    window.scrollTo(0, 0);
  };
  return (
    <HeaderLeftNav>
      <ul>
        <li>
          <Link to="/" onClick={onClickLogo}>
            <img src={logoImg} alt="logo" />
            <Link to="/">AngryDuck</Link>
          </Link>
        </li>
      </ul>
    </HeaderLeftNav>
  );
};

export default HeaderLeft;
