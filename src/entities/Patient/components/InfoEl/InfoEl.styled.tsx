import styled from "@emotion/styled";

export const BasicInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${props => props.theme.spacing(6)};
`;

export const InfoBox = styled.div``;

export const InfoHeader = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};

  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const InfoBody = styled.span`
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};
`;