import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
`;

export const InputWrapper = styled(Box)`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
