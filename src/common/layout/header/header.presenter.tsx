import { IPropsHeaderPresenter } from "./header.types";
import * as Header from "./header.styles";
import ContainedBtn from "../../btns/ContainedBtn";
import OutlinedBtn from "../../btns/OutlinedBtn";

export default function HeaderPresenter(props: IPropsHeaderPresenter) {
  return (
    <Header.Wrapper>
      <Header.Logo src="/header/Logo.png" alt="화면 상단 로고 이미지" />
      <Header.NavWrapper>
        {props.NavMenu.map((el, index) => (
          <Header.NavMenu key={index}>{el}</Header.NavMenu>
        ))}
      </Header.NavWrapper>
      <Header.BtnWrapper spacing={2} direction="row">
        <ContainedBtn Text="로그인" router={`/logIn`} onClick={props.onClickMoveToPage} />
        <OutlinedBtn Text="회원가입" router={`/signIn`} onClick={props.onClickMoveToPage} />
      </Header.BtnWrapper>
    </Header.Wrapper>
  );
}
