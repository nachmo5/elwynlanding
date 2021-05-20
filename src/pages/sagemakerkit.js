import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const SagemakerKit = () => {
  return (
    <Layout style={{ background: 'rgb(252, 253, 254)' }} footerColor="white">
      <Section
        title="Lorem ipsum dolor sit amet consectetur adipiscing"
        description={`So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.`}
        img={'meeting.svg'}
        animateText
        fullScreen
      />
      <Section
        title="Lorem ipsum dolor sit amet consectetur adipiscing"
        description={`So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.`}
        img={'meeting.svg'}
        isImageLeft={false}
      />
      <Section
        title="Lorem ipsum dolor sit amet consectetur adipiscing"
        description={`So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.`}
        img={'meeting.svg'}
      />
    </Layout>
  );
};

export default SagemakerKit;
