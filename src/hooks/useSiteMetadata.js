import { useStaticQuery, graphql } from 'gatsby';
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            emailjs {
              userId
              serviceId
              templateId
            }
            theme {
              color {
                primary
                darker_primary
                grey
                black
              }
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
