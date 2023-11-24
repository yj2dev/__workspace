import { Link } from "react-router-dom";
import { HeaderCenterNav } from "../../styled";

const HeaderCenter = () => {
  return (
    <HeaderCenterNav>
      <ul>
        <li>
          <Link to="test">Link1</Link>
        </li>
        <li>
          <Link to="test2">Link2</Link>
        </li>
        <li>
          <Link to="test3">Link3</Link>
        </li>
        <li>
          <Link to="test4">Link4</Link>
        </li>
        <li>
          <Link to="test5">Link5</Link>
        </li>
      </ul>
    </HeaderCenterNav>
  );
};

export default HeaderCenter;
