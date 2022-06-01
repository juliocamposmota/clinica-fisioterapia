import styled from 'styled-components';

const HeaderComponent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 3% 2%;

  li {
    padding: 0 10px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    font-size: 19px;
  }

  .menu-mobile {
    display: none;
  }

  .menu-desktop ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export default HeaderComponent;
