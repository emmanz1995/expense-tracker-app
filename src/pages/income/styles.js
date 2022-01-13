import styled from 'styled-components';
import { StyledDashboardCard } from '../../component/cards/styles';

export const IncomeContainer = styled.main`
  max-width: 1200px;
  margin: 90px auto;
  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-flex {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    flex-wrap: wrap;
  }
  .dropdown-menu {
    width: 10%;
    background-color: #ddd;
    padding: 10px;
    height: 100px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .dashboard-header {
      display: flex;
      flex-direction: column;
    }
    .card-flex {
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
  }
`;

export const Card = styled(StyledDashboardCard)`
  width: 32%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
  .fa-ellipsis-v {
    cursor: pointer;
  }
  .fa-trash {
    cursor: pointer;
  }
  .fa-edit {
    cursor: pointer;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }
`;

// --------------------------------------------------
// Update Income Page
// --------------------------------------------------

// export const
