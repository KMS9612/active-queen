import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";

export default function LoginContainer() {
  const router = useRouter();
  const onClickMoveToPrev = () => {
    router.back();
  };
  return <LoginPresenter onClickMoveToPrev={onClickMoveToPrev} />;
}
