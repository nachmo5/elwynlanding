import styled from 'styled-components';

export const BgImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 470px;
  width: 100%;
  z-index: -1;
  background-image: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
  @media (max-width: 768px) {
    height: 270px;
  }
  @media (max-width: 576px) {
    height: 230px;
  }
`;
export const Header = styled.div`
  height: calc(470px - 10vh);
  display: flex;
  align-items: center;
  padding: 0 20vw;
  @media (max-width: 768px) {
    height: calc(270px - 8vh);
  }
  @media (max-width: 576px) {
    height: calc(230px - 8vh);
  }
`;

export const Box = styled.div`
  padding: 10vh 20vw;
`;

export const Members = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const MemberImage = styled.div`
  height: 160px;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MemberName = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MemberTitle = styled.div`
  color: ${({ theme }) => theme.color.grey};
  font-size: 16px;
  font-weight: 300;
`;
