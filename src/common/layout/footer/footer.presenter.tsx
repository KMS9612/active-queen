import { IPropsFooterPresenter } from "./footer.types";
import * as Footer from "./footer.styles";

export default function FooterPresenter(props: IPropsFooterPresenter) {
  return (
    <Footer.Wrapper>
      <div>©CopyRight By KMS</div>
    </Footer.Wrapper>
  );
}
