import React from 'react';
import { Button } from '../Navigation/style';
import styled from 'styled-components';
import { navigate } from 'gatsby';

export const Form = styled.div`
  width: 540px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const FormLabel = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
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

const ContactForm = (props) => {
  const { withLabels = false } = props;
  const submit = () => {
    navigate('/congrats');
  };
  return (
    <Form>
      {withLabels && <FormLabel>Your name</FormLabel>}
      <FormInput>
        <input type="text" placeholder="Your name" />
      </FormInput>
      {withLabels && <FormLabel>Your email</FormLabel>}
      <FormInput>
        <input type="text" placeholder="Your email" />
      </FormInput>
      {withLabels && <FormLabel>Your message</FormLabel>}
      <FormInput>
        <textarea rows="6" placeholder="Write your message here" />
      </FormInput>
      <StartButton onClick={submit} style={{ width: '100%' }}>
        Send message
      </StartButton>
    </Form>
  );
};

export default ContactForm;
