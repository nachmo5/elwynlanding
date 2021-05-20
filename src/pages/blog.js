import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Header } from './about';
import { HugeText, NormalText } from '../components/Home/SectionOne';
import { StaticImage } from 'gatsby-plugin-image';

export const Box = styled.div`
  padding: 10vh 20vw;
  @media (max-width: 1300px) {
    padding: 10vh 10vw;
  }
`;

export const Articles = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-column-gap: 50px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export const Article = styled.div`
  min-width: 300px;
  cursor: pointer;
  padding: 20px;
  border: 1px solid rgb(234, 233, 242);
  border-radius: 10px;
  margin-bottom: 30px;
  &:hover {
    box-shadow: rgb(65 62 101 / 18%) 0px 52px 54px;
    transition: box-shadow 0.3s;
  }
`;
export const ArticleImage = styled.div`
  margin-bottom: 30px;
`;
export const ArticleDate = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  box-sizing: border-box;
  margin-top: 0;
  font-weight: 300;
  letter-spacing: -0.66px;
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 1.75;
`;
export const ArticleTitle = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  font-family: CircularStd, sans-serif;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 14px;
  transition: all 0.3s ease 0s;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const ArticleDescription = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  text-align: left;
  color: ${({ theme }) => theme.color.grey};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  line-height: 30px;
  margin-bottom: 30px;
`;
export const ArticleLink = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;

const blog = () => {
  return (
    <Layout footerColor="white">
      <Header style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <HugeText style={{ textAlign: 'center', width: '100%' }}>Blog</HugeText>
        <NormalText style={{ textAlign: 'center', width: '100%' }}>
          Read our latest posts where we share our approach to solving various problems
        </NormalText>
      </Header>
      <Box>
        <Articles>
          <Article>
            <ArticleImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                alt=""
              />
            </ArticleImage>
            <ArticleDate>February 22nd, 2021</ArticleDate>
            <ArticleTitle>Lorem ipsum dolor sit amet</ArticleTitle>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dui vel tellus
              convallis rutrum. Aliquam nulla augue, sagittis in bibendum in, cursus sit amet felis.
              Ut id risus risus. Phasellus commodo aliquet tortor, nec mollis velit venenatis et.
              Pellentesque aliquet pretium consequat.
            </ArticleDescription>
            <ArticleLink>Continue Reading</ArticleLink>
          </Article>

          <Article>
            <ArticleImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                alt=""
              />
            </ArticleImage>
            <ArticleDate>February 22nd, 2021</ArticleDate>
            <ArticleTitle>Lorem ipsum dolor sit amet</ArticleTitle>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dui vel tellus
              convallis rutrum. Aliquam nulla augue, sagittis in bibendum in, cursus sit amet felis.
              Ut id risus risus. Phasellus commodo aliquet tortor, nec mollis velit venenatis et.
              Pellentesque aliquet pretium consequat.
            </ArticleDescription>
            <ArticleLink>Continue Reading</ArticleLink>
          </Article>
        </Articles>
      </Box>
    </Layout>
  );
};

export default blog;
