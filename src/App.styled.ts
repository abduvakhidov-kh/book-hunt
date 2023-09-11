import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export const SectionContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const EmptySearchMessage = styled.p`
  color: #999;
  margin-top: 10px;
`;