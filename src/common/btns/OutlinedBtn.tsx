import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

interface IPropsOutlinedBtn {
  Text: string;
  onClick: any;
  router: string;
}

const Outlined = styled(Button)`
  color: #6fc053;
  border: 1px solid #6fc053;
  &:hover {
    color: #83c053;
    border: 1px solid #83c053;
  }
`;

/** Text:버튼 안에 들어가는 문자, onClick: onClick함수 router: id프로퍼티 (라우터경로 지정하고 onClick함수에 event.currentTarget.id 로 라우팅 처리)*/
export default function OutlinedBtn(props: IPropsOutlinedBtn) {
  return (
    <Stack spacing={1} direction="row">
      <Outlined id={props.router} variant="outlined" onClick={props.onClick}>
        {props.Text}
      </Outlined>
    </Stack>
  );
}
