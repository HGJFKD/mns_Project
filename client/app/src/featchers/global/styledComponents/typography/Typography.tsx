import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

type TypographyStyledProps = {};

const TypographyStyled = styled.p<TypographyStyledProps>``;

type TypographyProps = {
  childern: ReactNode;
  componnet?: string;
  sx: CSSProperties;
};

const Typography: FC<TypographyProps> = ({ childern, componnet, sx }) => {
  return (
    <TypographyStyled as={componnet} style={sx}>
      {childern}
    </TypographyStyled>
  );
};

export default Typography;
