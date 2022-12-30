import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 50%;
  height: 40px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const SignIn = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  text-align: end;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #bdbdbd;
  }
`;
export const Heading = styled.h2`
  width: 80%;
  text-align: center;
  color: #6fc053;
`;

export const InputWrapper = styled(Box)`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
