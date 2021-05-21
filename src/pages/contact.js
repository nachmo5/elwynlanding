import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Header } from '../styles/about';
import {
  Box,
  CompanyInformations,
  InformationBox,
  InformationTitle,
  InformationValue,
  FormTitle,
} from '../styles/contact';
import { HugeText } from '../styles/sectionone';

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
