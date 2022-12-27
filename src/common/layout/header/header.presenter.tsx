import { IPropsHeaderPresenter } from "./header.types";
import * as Header from "./header.styles";
import ContainedBtn from "../../btns/ContainedBtn";
import OutlinedBtn from "../../btns/OutlinedBtn";

export default function HeaderPresenter(props: IPropsHeaderPresenter) {
  return (
    <Header.Wrapper>
      <div>ActiveQueenLogo</div>
      <Header.BtnWrapper spacing={2} direction="row">
        <ContainedBtn Text="로그인" router={`/logIn`} onClick={props.onClickMoveToPage} />
        <OutlinedBtn Text="회원가입" router={`/signIn`} onClick={props.onClickMoveToPage} />
      </Header.BtnWrapper>
    </Header.Wrapper>
  );
}
