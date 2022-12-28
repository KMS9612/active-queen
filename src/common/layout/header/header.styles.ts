import styled from "@emotion/styled";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Stack } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const Logo = styled.img`
  width: 15%;
  height: 80px;
  cursor: pointer;
`;

export const NavWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavMenu = styled.div`
  width: 10%;
  border-radius: 5px;
  margin-right: 35px;
  color: #83c053;
  cursor: pointer;
`;

export const BtnWrapper = styled(Stack)`
  width: 20%;
  color: #6fc053;
`;
