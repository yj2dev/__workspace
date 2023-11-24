import { Link } from "react-router-dom";
import { HeaderRightNav } from "../../styled";
import { useRef, useState } from "react";

const HeaderRight = () => {
  const [user, setUser] = useState(null);

  return (
    <HeaderRightNav>
      <ul>
        <li>
          {user ? (
            <Link to="login">로그인</Link>
          ) : (
            <img
              src="https://api.dicebear.com/7.x/lorelei-neutral/svg?seed=aa"
              alt="user profile"
            />
          )}
        </li>
      </ul>
    </HeaderRightNav>
  );
};

export default HeaderRight;
