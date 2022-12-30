import { TextField } from "@mui/material";

interface IPropsIDInput {
  label: string;
}

export default function IDInput(props: IPropsIDInput) {
  return (
    <>
      <TextField label={"아이디"}></TextField>
    </>
  );
}
