import styled from 'styled-components';

export const SectionTwo = styled.div`
  min-height: 978px;
  display: flex;
  flex-direction: column;
`;

export const SectionTwoMain = styled.div`
  flex-grow: 1;
  background: ${({ theme }) => theme.color.darker_primary};
  display: flex;
  justify-content: center;
  padding: 18vh 10vw;
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`;
export const SectionTwoFooter = styled.div`
  height: 100px;
  background: ${({ theme }) => theme.color.darker_primary};
`;

export const TextBoxTwo = styled.div`
  max-width: 550px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const BigText = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  color: ${({ black, theme }) => (black ? theme.color.black : '#fff')};
  box-sizing: border-box;
  margin-top: 0;
  font-family: CircularStd, sans-serif;
  font-weight: 700;
  letter-spacing: -2.5px;
  margin-bottom: 16px;
  font-size: 60px;
  line-height: 62px;
  @media (max-width: 576px) {
    font-size: 50px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  @media (min-width: 1300px) {
    margin-right: 5vw;
  }
  @media (max-width: 1300px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: ${({ theme }) => theme.color.grey};
  background-color: rgb(255, 255, 255);
  padding: 25px 30px;
  margin-bottom: 32px;
  border-radius: 10px;
  min-width: 255px;
  @media (min-width: 1300px) {
    max-width: 255px;
  }
`;

export const CardIcon = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-sizing: border-box;
  min-width: 0px;
  color: rgb(52, 169, 161);
  width: 69px;
  height: 69px;
  font-size: 28px;
  border-radius: 50%;
  background-color: rgba(52, 169, 161, 0.1);
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
`;
export const CardTitle = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  line-height: 38px;
  color: ${({ theme }) => theme.color.black};
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.75px;
`;
export const CardDescription = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0px;
  font-weight: 300;
  letter-spacing: -0.66px;
  color: ${({ theme }) => theme.color.grey};
  font-size: 16px;
  line-height: 1.75;
`;
