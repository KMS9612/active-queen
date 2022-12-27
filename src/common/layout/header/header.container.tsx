import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();

  const onClickMoveToPage = (event: any) => {
    router.push(`${event.currentTarget.id}`);
  };
  return <HeaderPresenter onClickMoveToPage={onClickMoveToPage} />;
}
