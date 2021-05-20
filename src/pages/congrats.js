import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Header } from './about';
import { HugeText } from '../components/Home/SectionOne';

export const Box = styled.div`
  padding: 0 20vw;
  @media (max-width: 1300px) {
    padding: 10vh 10vw;
  }
`;

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
