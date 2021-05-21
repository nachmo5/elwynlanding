import { useStaticQuery, graphql } from 'gatsby';
const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query BlogQuery {
        allMdx {
          nodes {
            id
            frontmatter {
              title
              date
              description
              author
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );
  return data.allMdx.nodes.map((node) => ({
    id: node.id,
    ...node.frontmatter,
    ...node.fields,
  }));
};

export default useBlogPosts;
