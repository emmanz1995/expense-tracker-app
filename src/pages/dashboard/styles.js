import styled from 'styled-components';

export const DashboardContainer = styled.main`
  margin: 100px 0;
  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
  }
  .stats-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;
  }
  .stats-wrapper2 {
    width: 100%;
    margin: 20px 0;
    display: flex;
    grid-gap: 20px;
  }
  .profile-info {
    width: 50%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    -webkit-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    -moz-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  }
  .stat-chart {
    width: 50%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    -webkit-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    -moz-box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .stats-wrapper, .stats-wrapper2 {
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
    .profile-info, .stat-chart {
      width: 100%;
    }
  }
`
