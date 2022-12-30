import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IPropsPrevBtn {
  onClickMoveToPrev: () => void;
}

const Prev = styled(ArrowBackIcon)`
  cursor: pointer;
`;

export default function PrevBtn(props: IPropsPrevBtn) {
  return <Prev onClick={props.onClickMoveToPrev}></Prev>;
}
