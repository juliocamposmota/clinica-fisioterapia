import styled from 'styled-components';

const Header = styled.header`
  /* min-height: 156px; */
`;

const Navigator = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  li {
    padding: 0 10px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    font-size: 19px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    padding: 0.75rem 0.75rem;
    width: 100%;
    max-width: 1200px;
  }

  .menu-desktop {
    display: flex;
    flex-basis: auto;
    justify-content: flex-end;
    flex-grow: 1;
    align-items: center;
  }

  .logo {
    width: 290px;
  }

  .menu-desktop ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export {
  Header,
  Navigator,
};
