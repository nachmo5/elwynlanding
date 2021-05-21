import React from 'react';
import Layout from '../components/Layout';
import { Header } from '../styles/about';
import { HugeText } from '../styles/sectionone';

const congrats = () => {
  return (
    <Layout footerColor="white" fixedFooter>
      <Header>
        <HugeText style={{ textAlign: 'center', width: '100%' }}>
          Congratulations! your message has been sucessfuly sent
        </HugeText>
      </Header>
      <div style={{ flexGrow: 1 }}></div>
    </Layout>
  );
};

export default congrats;
