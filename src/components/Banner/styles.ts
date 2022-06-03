import styled from 'styled-components';

const BannerComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    height: 600px;
    object-fit: cover;
    object-position: 0px -130px;
    width: 100vw;
  }
`;

export default BannerComponent;
