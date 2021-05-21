import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../Layout';
import { HugeText, NormalText } from '../../styles/sectionone';
import styled from 'styled-components';

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;
`;

const Body = styled.div`
  width: 100%;
  padding: 10vh 20vw;
  @media (max-width: 992px) {
    padding: 5vh 10vw;
  }
`;

const TextBody = styled(NormalText)`
  @media (max-width: 700px) {
    font-size: 19px;
  }
`;

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <Title>
        <HugeText style={{ textAlign: 'center' }}>{frontmatter.title}</HugeText>
        <NormalText>
          <span style={{ marginRight: 10 }}>{frontmatter.date}</span>
          <span>{frontmatter.author}</span>
        </NormalText>
      </Title>
      <Body>
        <TextBody>
          <MDXRenderer>{body}</MDXRenderer>
        </TextBody>
      </Body>
    </Layout>
  );
};

export default BlogPost;
