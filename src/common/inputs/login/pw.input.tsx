import styled from "@emotion/styled";
import { TextField } from "@mui/material";

interface IPropsPWInput {
  label: string;
}

const Text = styled(TextField)({
  // label color when focus
  width: "50%",
  "& label.Mui-focused": {
    color: "#6fc053",
  },
  // box color when focus
  "& .MuiInput-underline:after": {
    borderBottomColor: "#83c053",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "c4c4c4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export default function PWInput(props: IPropsPWInput) {
  return (
    <>
      <Text label={"비밀번호"}></Text>
    </>
  );
}
