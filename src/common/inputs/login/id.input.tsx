import styled from "@emotion/styled";
import { TextField } from "@mui/material";

interface IPropsIDInput {
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
export default function IDInput(props: IPropsIDInput) {
  return (
    <>
      <Text label={"아이디"}></Text>
    </>
  );
}
