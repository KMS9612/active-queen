import LoginBtn from "../../common/btns/LoginBtn";
import PrevBtn from "../../common/btns/PrevBtn";
import IDInput from "../../common/inputs/login/id.input";
import PWInput from "../../common/inputs/login/pw.input";
import * as Login from "./login.styles";
import { IPropsLogin } from "./login.types";

export default function LoginPresenter(props: IPropsLogin) {
  return (
    <Login.Wrapper>
      <Login.HeaderWrapper>
        <PrevBtn onClickMoveToPrev={props.onClickMoveToPrev} />
        <Login.Heading>로그인</Login.Heading>
        <Login.SignIn>회원가입</Login.SignIn>
      </Login.HeaderWrapper>
      <Login.InputWrapper component="form">
        <IDInput label={"id"} />
        <PWInput label="password" />
        <LoginBtn></LoginBtn>
      </Login.InputWrapper>
    </Login.Wrapper>
  );
}
