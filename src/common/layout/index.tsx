import styled from "@emotion/styled";
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
  return (
    <Wrapper>
      <HeaderContainer />
      <Body>{props.children}</Body>
      <FooterContainer />
    </Wrapper>
  );
}
