import styled from 'styled-components';
import { Button } from '../components/Navigation/style';

export const SectionOne = styled.div`
  display: flex;
  min-height: 800px;
  justify-content: center;
  padding: 18vh 10vw;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const StartButton = styled(Button)`
  height: 60px;
  font-size: 21px;
  ${({ outlined, theme }) =>
    outlined &&
    `
   border: 1px solid #fff;
   background: ${theme.color.darker_primary}
  `}
`;

export const TextBoxOne = styled.div`
  max-width: 650px;
  @media (min-width: 993px) {
    position: relative;
    animation: backInLeft 1s ease;
  }
`;

export const HugeText = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  pointer-events: auto;
  font-weight: 700;
  color: ${({ theme, white }) => (white ? '#fff' : theme.color.black)};
  letter-spacing: -2.81px;
  font-size: 80px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 76px;
  }
  @media (max-width: 992px) {
    font-size: 66px;
  }
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

export const NormalText = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  pointer-events: auto;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 38px;
  color: ${({ theme, white }) => (white ? '#fff' : theme.color.grey)};
  opacity: ${({ theme, white }) => (white ? 0.8 : 1)};
  margin-bottom: 32px;
`;

export const BgImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
export const Img = styled.div`
  max-width: 500px;
  margin-left: 5vw;
  @media (min-width: 993px) {
    position: relative;
    animation: backInDown 1s ease;
  }
  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`;
