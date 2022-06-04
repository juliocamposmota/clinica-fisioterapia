import styled from 'styled-components';

const Services = styled.section`
  padding: 2.75rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
  }

  .services {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 1rem 0.75rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
`;

const BoxService = styled.div`
    flex: 0 0 auto;
    width: 25%;
    max-width: 100%;

    img {
      width: 75px;
      margin-bottom: 15px;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 0;
    }
`;

export {
  Services,
  BoxService,
};
