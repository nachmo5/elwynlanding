import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { HugeText, NormalText } from '../components/Home/SectionOne';
import { BigText } from '../components/Home/SectionTwo';
import { StaticImage } from 'gatsby-plugin-image';

export const BgImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 470px;
  width: 100%;
  z-index: -1;
  background-image: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
  @media (max-width: 768px) {
    height: 270px;
  }
  @media (max-width: 576px) {
    height: 230px;
  }
`;
export const Header = styled.div`
  height: calc(470px - 10vh);
  display: flex;
  align-items: center;
  padding: 0 20vw;
  @media (max-width: 768px) {
    height: calc(270px - 8vh);
  }
  @media (max-width: 576px) {
    height: calc(230px - 8vh);
  }
`;

export const Box = styled.div`
  padding: 10vh 20vw;
`;

export const Members = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const MemberImage = styled.div`
  height: 160px;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MemberName = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MemberTitle = styled.div`
  color: ${({ theme }) => theme.color.grey};
  font-size: 16px;
  font-weight: 300;
`;

const about = () => {
  return (
    <Layout footerColor="white">
      <Header>
        <HugeText>About us</HugeText>
      </Header>
      <Box>
        <HugeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HugeText>
        <NormalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dui vel tellus
          convallis rutrum. Aliquam nulla augue, sagittis in bibendum in, cursus sit amet felis. Ut
          id risus risus. Phasellus commodo aliquet tortor, nec mollis velit venenatis et.
          Pellentesque aliquet pretium consequat. Suspendisse erat eros, condimentum vitae sem eget,
          faucibus sollicitudin ligula. Proin maximus lorem ac ultricies malesuada. Suspendisse
          varius dui diam, euismod vulputate mauris commodo sit amet. In sit amet augue lectus.
          Vivamus dolor arcu, laoreet id ullamcorper eu, lacinia nec augue. Vestibulum non purus sed
          ex rutrum scelerisque nec at diam. Nulla semper commodo malesuada.
        </NormalText>
      </Box>
      <Box>
        <BigText black style={{ textAlign: 'center', marginBottom: 50 }}>
          Meet the team
        </BigText>
        <Members>
          <Member>
            <MemberImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                alt=""
                height={160}
                width={160}
              />
            </MemberImage>
            <MemberName>John Doe</MemberName>
            <MemberTitle>Chief technical officer </MemberTitle>
          </Member>
          <Member>
            <MemberImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                height={160}
                alt=""
                width={160}
              />
            </MemberImage>
            <MemberName>John Doe</MemberName>
            <MemberTitle>Chief technical officer </MemberTitle>
          </Member>
          <Member>
            <MemberImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                height={160}
                alt=""
                width={160}
              />
            </MemberImage>
            <MemberName>John Doe</MemberName>
            <MemberTitle>Chief technical officer </MemberTitle>
          </Member>
          <Member>
            <MemberImage>
              <StaticImage
                src="../images/business_analytics.svg"
                imgStyle={{ objectFit: 'contain' }}
                alt=""
                height={160}
                width={160}
              />
            </MemberImage>
            <MemberName>John Doe</MemberName>
            <MemberTitle>Chief technical officer </MemberTitle>
          </Member>
        </Members>
      </Box>
      <BgImg></BgImg>
    </Layout>
  );
};

export default about;
