import styled from 'styled-components';

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .menu-mobile {
    display: none;
  }

  .menu-desktop ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export default HeaderComponent;
