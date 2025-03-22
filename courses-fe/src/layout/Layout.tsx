import { Outlet } from "react-router-dom";
import MenuAppBar from "./MenuAppBar/MenuAppBar";
import { StyledBox } from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <MenuAppBar />
      <StyledBox>
        <Outlet />
      </StyledBox>
    </>
  );
};

export default Layout;
