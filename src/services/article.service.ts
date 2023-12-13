import { gql, request } from "graphql-request"
import { ArticleType } from "src/interfaces/article.interface"
import { Language } from "src/interfaces/constants.interface"

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const Articles = {
  getArticles: async (lng: Language) => {
    const query = gql`
      query GetArticles($lng: Language) {
        articles(where: { language: $lng }) {
          id
          createdAt
          title
          slug
          excerpt
          image {
            url
          }
          author {
            avatar {
              url
            }
            name
          }
        }
      }
    `
    const result = await request<{ articles: ArticleType[] }>(
      graphqlApi,
      query,
      {
        lng,
      }
    )
    return result.articles
  },
}
