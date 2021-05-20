import styled from 'styled-components';

export const SectionFour = styled.div`
  min-height: 600px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.color.black};
`;

export const SectionFourHeader = styled.div`
  width: 100%;
  max-width: 100%;
  transform: rotate(180deg);
  position: relative;
  top: -20px;
`;

export const SectionFourBody = styled.div`
  display: flex;
  margin: 5vh 10vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    max-width: 600px;
  }
`;

export const Form = styled.div`
  margin-top: 50px;
`;

export const FormInput = styled.div`
  margin-bottom: 16px;
  & input,
  textarea {
    font-family: CircularStd, sans-serif;
    min-height: 70px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
    line-height: 24px;
    overflow: visible;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    display: block;
    padding: 1.275rem 1.75rem;
    background-clip: padding-box;
    border: 1px solid rgba(65, 62, 101, 0.114);
    border-radius: 10px;
    color: ${({ theme }) => theme.color.grey};
    background-color: rgb(255, 255, 255);
    width: 100%;
  }
`;
