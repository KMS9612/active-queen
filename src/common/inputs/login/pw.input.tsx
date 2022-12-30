import { TextField } from "@mui/material";

interface IPropsPWInput {
  label: string;
}

export default function PWInput(props: IPropsPWInput) {
  return (
    <>
      <TextField label={"비밀번호"}></TextField>
    </>
  );
}
