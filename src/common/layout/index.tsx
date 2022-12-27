import styled from "@emotion/styled";
import HeaderContainer from "./header/header.container";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

export default function Layout() {
  return (
    <Wrapper>
      <HeaderContainer />
    </Wrapper>
  );
}
