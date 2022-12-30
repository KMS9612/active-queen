import styled from "@emotion/styled";
import { Button } from "@mui/material";

export default function LoginBtn() {
  const Login = styled(Button)`
    width: 50%;
    color: #6fc053;
    border: 1px solid #6fc053;
    &:hover {
      color: #83c053;
      border: 1px solid #83c053;
    }
  `;

  return <Login variant="outlined">로그인</Login>;
}
