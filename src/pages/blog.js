import React from 'react';
import Layout from '../components/Layout';
import { Header } from '../styles/about';
import { HugeText, NormalText } from '../styles/sectionone';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import useBlogPosts from '../hooks/useBlogPosts';
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

const Blog = () => {
  const posts = useBlogPosts();

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
          {(posts || []).map((post) => (
            <Link to={post.slug} key={post.id}>
              <Article>
                <ArticleImage>
                  <StaticImage
                    src="../images/business_analytics.svg"
                    imgStyle={{ objectFit: 'contain' }}
                    alt=""
                  />
                </ArticleImage>
                <ArticleDate>{post.date}</ArticleDate>
                <ArticleTitle>{post.title}</ArticleTitle>
                <ArticleDescription>{post.description}</ArticleDescription>
                <ArticleLink>Continue Reading</ArticleLink>
              </Article>
            </Link>
          ))}
        </Articles>
      </Box>
    </Layout>
  );
};

export default Blog;
