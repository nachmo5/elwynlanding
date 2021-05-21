import styled from 'styled-components';

export const SectionThree = styled.div`
  min-height: 720px;
  display: flex;
  justify-content: center;
  padding: 18vh 10vw;
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`;

export const TextBoxThree = styled.div`
  max-width: 650px;
`;
