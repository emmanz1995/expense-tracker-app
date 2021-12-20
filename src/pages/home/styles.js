import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  grid-gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;
