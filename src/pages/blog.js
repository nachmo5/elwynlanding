import React from 'react';
import Layout from '../components/Layout';
import { Header } from '../styles/about';
import { HugeText, NormalText } from '../styles/sectionone';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Article,
  ArticleDate,
  ArticleDescription,
  ArticleImage,
  ArticleLink,
  ArticleTitle,
  Articles,
  Box,
} from '../styles/blog';

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
