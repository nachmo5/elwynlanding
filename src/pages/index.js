import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import SlideAnimation from 'react-reveal/Slide';
import { Link } from 'gatsby';

import {
  SectionOne,
  TextBoxOne,
  HugeText,
  NormalText,
  StartButton,
  Img,
  BgImg,
} from '../components/Home/SectionOne';
import {
  SectionTwo,
  SectionTwoMain,
  SectionTwoFooter,
  TextBoxTwo,
  Cards,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  Icon,
  BigText,
} from '../components/Home/SectionTwo';
import { SectionThree, TextBoxThree } from '../components/Home/SectionThree';
import {
  SectionFour,
  SectionFourBody,
  Form,
  FormInput,
  SectionFourHeader,
} from '../components/Home/SectionFour';

// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <SectionOne>
        <TextBoxOne className="animate__backInLeft">
          <HugeText>Turn data into decisions</HugeText>
          <NormalText>
            Elwyn enables startups and enterprises to solve business problems leveraging data,
            analytics and machine learning.
          </NormalText>
          <Link to="/contact">
            <StartButton>Start a project</StartButton>
          </Link>
        </TextBoxOne>

        <SlideAnimation effect="backInTop">
          <Img>
            <StaticImage src="../images/business_analytics.svg" alt="alt" placeholder="blurred" />
          </Img>
        </SlideAnimation>
        <BgImg>
          <StaticImage src="../images/gradiant-circle.svg" alt="alt" placeholder="blurred" />
        </BgImg>
      </SectionOne>

      <SectionTwo>
        <SectionTwoMain>
          <Cards>
            <Card>
              <CardIcon>
                <Icon>
                  <StaticImage src="../images/dbicon.png" alt="alt" placeholder="blurred" />
                </Icon>
              </CardIcon>
              <CardTitle>Data strategy</CardTitle>
              <CardDescription>
                Assess and develop roadmap to leverage your data to provide business value.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                {' '}
                <Icon>
                  <StaticImage src="../images/pipeicon.png" alt="alt" placeholder="blurred" />
                </Icon>
              </CardIcon>
              <CardTitle>Data Ops</CardTitle>
              <CardDescription>
                Build end to end analytics pipeline to enable data analysis and machine learning.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                {' '}
                <Icon>
                  <StaticImage src="../images/roboticon.png" alt="alt" placeholder="blurred" />
                </Icon>
              </CardIcon>
              <CardTitle>Data Science</CardTitle>
              <CardDescription>
                Design experiments and build custom machine learning model to optimize for your
                business goals.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                {' '}
                <Icon>
                  <StaticImage src="../images/cloudicon.png" alt="alt" placeholder="blurred" />
                </Icon>
              </CardIcon>
              <CardTitle>ML Ops</CardTitle>
              <CardDescription>
                Deploy and monitor your machine learning services in AWS/Azure/GCP.
              </CardDescription>
            </Card>
          </Cards>
          <SlideAnimation right duration={500}>
            <TextBoxTwo>
              <BigText white>We maximise the value of your data and make it work for you!</BigText>
              <NormalText white>
                We are Data and Analytics Consultants who use our expertise and technology to help
                our clients gain their competitive advantage.
              </NormalText>
            </TextBoxTwo>
          </SlideAnimation>
        </SectionTwoMain>
        <SectionTwoFooter>
          <StaticImage
            src="../images/curve.svg"
            alt="alt"
            placeholder="none"
            style={{ height: 'calc(100% + 2px)', width: '100%' }}
            imgStyle={{ objectFit: 'fill' }}
          />
        </SectionTwoFooter>
      </SectionTwo>
      <SectionThree>
        <SlideAnimation left>
          <TextBoxThree>
            <BigText black>How can we help you?</BigText>
            <NormalText>
              <li>Understand your business objectives.</li>
              <li>Identify and prioritise data opportunities.</li>
              <li>Analyse your existing data tools and technologies.</li>
              <li>Plan to build prototype to validate the ideas.</li>
              <li>Roadmap to build and integrate data driven solutions in your workflow.</li>
            </NormalText>
            <Link to="/contact">
              <StartButton>Request a call</StartButton>
            </Link>
          </TextBoxThree>
        </SlideAnimation>
        <SlideAnimation right>
          <Img>
            <StaticImage src="../images/meeting.svg" alt="alt" placeholder="blurred" />
          </Img>
        </SlideAnimation>{' '}
      </SectionThree>
      <SectionFour>
        <SectionFourHeader>
          <StaticImage
            src="../images/curve.svg"
            alt="alt"
            placeholder="none"
            style={{ height: '100%', width: '100%', maxWidth: '100%' }}
            imgStyle={{ objectFit: 'fill', maxWidth: '100%' }}
          />
        </SectionFourHeader>
        <SectionFourBody>
          <BigText style={{ textAlign: 'center' }}>Get started</BigText>
          <NormalText white style={{ textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat pulvinar elit,
            eget luctus sapien commodo sed. In commodo dapibus porta.
          </NormalText>
          <ContactForm />
        </SectionFourBody>
      </SectionFour>
    </Layout>
  );
};

export default IndexPage;
