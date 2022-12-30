import IDInput from "../../common/inputs/login/id.input";
import PWInput from "../../common/inputs/login/pw.input";
import * as Login from "./login.styles";
import { IPropsLogin } from "./login.types";

export default function LoginPresenter(props: IPropsLogin) {
  return (
    <Login.Wrapper>
      <Login.Text>로그인</Login.Text>
      <Login.InputWrapper component="form">
        <IDInput label={"id"} />
        <PWInput label="password" />
      </Login.InputWrapper>
    </Login.Wrapper>
  );
}
