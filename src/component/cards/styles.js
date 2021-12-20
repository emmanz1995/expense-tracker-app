import styled from 'styled-components';

export const Card = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  .home-img {
    width: 100%;
    height: auto;
    border-radius: 4px 4px 0 0;
  }
  .card-content {
    margin: 15px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    //margin: 10px;
  }
`;
