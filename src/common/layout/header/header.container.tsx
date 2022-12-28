import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();

  const NavMenu = ["협회소개", "공지사항", "앨범"];

  const onClickMoveToPage = (event: any) => {
    router.push(`${event.currentTarget.id}`);
  };
  return <HeaderPresenter onClickMoveToPage={onClickMoveToPage} NavMenu={NavMenu} />;
}
