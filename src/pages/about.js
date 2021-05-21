import React from 'react';
import Layout from '../components/Layout';
import { HugeText, NormalText } from '../styles/sectionone';
import { BigText } from '../styles/sectiontwo';
import { StaticImage } from 'gatsby-plugin-image';
import {
  BgImg,
  Box,
  Header,
  Member,
  MemberImage,
  MemberName,
  MemberTitle,
  Members,
} from '../styles/about';

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
