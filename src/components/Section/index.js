import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import SlideAnimation from 'react-reveal/Slide';

export const Main = styled.div`
  display: flex;
  min-height: 600px;
  justify-content: center;
  ${({ fullScreen }) => (fullScreen ? `padding: 18vh 10vw;` : `padding: 15vh 10vw;`)}
  ${({ isImageLeft }) => isImageLeft && `flex-direction: row-reverse;`}

  ${({ isImageLeft }) =>
    !isImageLeft &&
    `@media (max-width: 992px) {
      flex-direction: column-reverse;
  }`}
`;

export const TextBox = styled.div`
  max-width: 650px;
`;

export const Title = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  letter-spacing: -2.5px;
  margin-bottom: 16px;
  font-size: 60px;
  line-height: 62px;
  @media (max-width: 576px) {
    font-size: 50px;
  }
`;

export const Description = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  pointer-events: auto;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 38px;
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 32px;
`;

export const Img = styled.div`
  ${({ isImageLeft }) => (isImageLeft ? `margin-right: 5vw;` : `margin-left: 5vw;`)}
  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`;

const Section = (props) => {
  const { img, title, description } = props;
  const { fullScreen = false, isImageLeft = true, animateText = false } = props;
  return (
    <Main isImageLeft={isImageLeft} fullScreen={fullScreen}>
      <SlideAnimation left={!isImageLeft} right={isImageLeft} duration={animateText ? 1000 : 0}>
        <TextBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextBox>
      </SlideAnimation>
      <SlideAnimation left={isImageLeft} right={!isImageLeft}>
        <Img isImageLeft={isImageLeft}>
          <Image src={img} alt="section image" />
        </Img>
      </SlideAnimation>
    </Main>
  );
};

export default Section;
