import styled from "styled-components";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../../utils/setup";

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border-radius: 4px;
  border: 2px solid #ffffff33;
`;
