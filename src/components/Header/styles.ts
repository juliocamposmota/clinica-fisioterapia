import styled from 'styled-components';

const HeaderComponent = styled.div`
  padding: 4% 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    padding: 0 10px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
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
