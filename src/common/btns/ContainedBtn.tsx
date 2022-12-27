import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

interface IPropsContainedBtn {
  Text: string;
  onClick: any;
  router: string;
}
const Contained = styled(Button)`
  color: #fff;
  border: 1px solid #6fc053;
  background-color: #6fc053;
  &:hover {
    color: #fff;
    border: 1px solid #83c053;
    background-color: #83c053;
  }
`;
/** Text:버튼 안에 들어가는 문자, onClick: onClick함수 router: id프로퍼티 (라우터경로 지정하고 onClick함수에 event.currentTarget.id 로 라우팅 처리)*/
export default function ContainedBtn(props: IPropsContainedBtn) {
  return (
    <Stack spacing={1} direction="row">
      <Contained id={props.router} variant="contained" onClick={props.onClick}>
        {props.Text}
      </Contained>
    </Stack>
  );
}
