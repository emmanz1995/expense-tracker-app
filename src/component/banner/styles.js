import styled from 'styled-components';

export const StyledBanner = styled.main`
  height: 450px;
  width: 100%;
  background-color: #2043b6;
  padding-top: 70px;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BannerContentIntro = styled.div`
  width: 70%;
  margin: 10px;
  .input-style {
    width: 50%;
    padding: 7px;
    border-radius: 4px;
    border: 1px solid #ddd;
    &:focus {
      outline: none;
    }
  }
  .get-started-btn {
    padding: 7px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background-color: #fafbff;
  }
  .intro {
    color: #fafbff;
    span {
      font-weight: 600;
    }
  }
  .info {}
`;
export const BannerContentInfo = styled.div`
  width: 50%;
  margin: 10px;
  .img-container {
    width: 100%;
    height: 300px;
  }
  .home-img {
    width: 100%;
    height: auto;
  }
`;
