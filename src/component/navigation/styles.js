import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background: #FFF;
  padding: 5px;
  border-bottom: 1px solid #ecf0f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .nav-heading {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .fa-bars {
    display: none;
  }
  h1 {
    color: #2043b6;
  }
  .menu {
    list-style: none;
    display: flex;
    align-items: center;
    grid-gap: 10px;
    max-width: 1200px;
    margin: 0 auto;
    a {
      text-decoration: none;
      padding: 10px;
      border: 1px solid #2043b6;
      border-radius: 5px;
      color: #2043b6;
    }
  }
  @media screen and (max-width: 500px) {
    .nav-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .fa-bars {
      display: block;
    }
    .menu {
      display: none;
    }
    .open-menu {
      width: 100%;
      background-color: #2043b6;
      height: 100px;
      position: absolute;
      top: 55px;
      left: 0;
      margin: 0;
      padding: 5px;
      border-radius: 4px;
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: #fafbff;
      }
    }
  }
`;
