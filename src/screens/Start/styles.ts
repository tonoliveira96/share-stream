import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.main};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
`;
