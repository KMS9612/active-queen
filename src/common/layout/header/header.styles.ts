import styled from "@emotion/styled";
import { Stack } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bdbdbd;
  padding: 0px 20px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 80px;
`;

export const BtnWrapper = styled(Stack)`
  width: 200px;
  color: #6fc053;
`;
