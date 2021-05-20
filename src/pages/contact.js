import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import { Header } from './about';
import { HugeText } from '../components/Home/SectionOne';

export const Box = styled.div`
  padding: 0 20vw;
  @media (max-width: 1300px) {
    padding: 10vh 10vw;
  }
`;
export const CompanyInformations = styled.div`
  background: rgb(247, 247, 251);
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 50px;
  padding: 50px;
  width: 100%;
`;

export const InformationBox = styled.div`
  margin-bottom: 30px;
`;
export const InformationTitle = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: CircularStd, sans-serif;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  margin-bottom: 10px;
`;
export const InformationValue = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const FormTitle = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  margin-bottom: 3rem !important;
  margin-top: 4rem;
  text-align: center !important;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
`;

const contact = () => {
  return (
    <Layout footerColor="white">
      <Header>
        <HugeText style={{ textAlign: 'center', width: '100%' }}>Contact us</HugeText>
      </Header>
      <Box>
        <CompanyInformations>
          <InformationBox>
            <InformationTitle>Call us</InformationTitle>
            <InformationValue>+61 1900 654 321</InformationValue>
            <InformationValue>+61 1900 123 321</InformationValue>
          </InformationBox>
          <InformationBox>
            <InformationTitle>Email us</InformationTitle>
            <InformationValue>contact@elwyn.com</InformationValue>
          </InformationBox>
          <InformationBox>
            <InformationTitle>Contact us</InformationTitle>
            <InformationValue>4 Anthony St, Innisfail, QLD 4860</InformationValue>
          </InformationBox>
        </CompanyInformations>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormTitle>or, Send us a message</FormTitle>
        <ContactForm style={{ marginBottom: 40 }} />
      </Box>
    </Layout>
  );
};

export default contact;
