import React, { useState } from 'react';
import { Button } from '../Navigation/style';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import emailjs from 'emailjs-com';
import Popover from './Popover';
import useSiteMetadata from '../../hooks/useSiteMetadata';

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

const isValidEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

const ContactForm = (props) => {
  const { withLabels = false } = props;
  const {
    emailjs: { userId, serviceId, templateId },
  } = useSiteMetadata();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState(null);

  const isValid = () => {
    if (!formData.name) {
      setError('name');
      return false;
    }

    if (!formData.email || !isValidEmail(formData.email)) {
      setError('email');
      return false;
    }
    if (!formData.message) {
      setError('message');
      return false;
    }
    return true;
  };
  const submit = () => {
    const valid = isValid();
    if (!valid) {
      return setTimeout(() => {
        setError(null);
      }, 3000);
    }
    const emailData = {
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
    };

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    emailjs
      .send(serviceId, templateId, emailData, userId) //
      .finally(() => navigate('/congrats'));
  };

  const onChange = (name) => (e) => setFormData((f) => ({ ...f, [name]: e.target.value }));
  return (
    <Form>
      {/* =================================================== */}
      {/* ======================= NAME ===================== */}
      {/* =================================================== */}
      {withLabels && <FormLabel>Your name</FormLabel>}
      <FormInput>
        <input
          onChange={onChange('name')}
          value={formData['name']}
          type="text"
          placeholder="Your name"
        />
      </FormInput>
      {error === 'name' && <Popover field="name" />}
      {/* =================================================== */}
      {/* ======================= EMAIL ===================== */}
      {/* =================================================== */}
      {withLabels && <FormLabel>Your email</FormLabel>}
      <FormInput>
        <input
          onChange={onChange('email')}
          value={formData['email']}
          type="text"
          placeholder="Your email"
        />
      </FormInput>
      {error === 'email' && <Popover field="email" />}
      {/* =================================================== */}
      {/* ======================= MESSAGE ===================== */}
      {/* =================================================== */}
      {withLabels && <FormLabel>Your message</FormLabel>}
      {error === 'message' && <Popover place="top" field="message" />}
      <FormInput>
        <textarea
          onChange={onChange('message')}
          value={formData['message']}
          rows="6"
          placeholder="Write your message here"
        />
      </FormInput>
      <StartButton onClick={submit} style={{ width: '100%' }}>
        Send message
      </StartButton>
    </Form>
  );
};

export default ContactForm;
