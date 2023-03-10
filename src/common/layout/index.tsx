import styled from "@emotion/styled";
import { useRouter } from "next/router";
import FooterContainer from "./footer/footer.container";
import HeaderContainer from "./header/header.container";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;

export default function Layout(props: any) {
  // 레이아웃 숨김 설정
  const HIDDEN_PAGE = ["/login", "/signin"];
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  console.log(isHidden);

  return (
    <Wrapper>
      {!isHidden ? (
        <>
          <HeaderContainer />
          <Body>{props.children}</Body>
          <FooterContainer />
        </>
      ) : (
        <Body>{props.children}</Body>
      )}
    </Wrapper>
  );
}
