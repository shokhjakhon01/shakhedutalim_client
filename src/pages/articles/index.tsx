import { GetServerSideProps } from "next"
import { ArticleType } from "src/interfaces/article.interface"
import { Language } from "src/interfaces/constants.interface"
import { withLayout } from "src/layouts/layout"
import { ArticlePageComponent } from "src/page-component"
import { Articles } from "src/services/article.service"

const ArticlesPage = ({ articles }: ArticlePageProps) => {
  return <ArticlePageComponent articles={articles} />
}

export default withLayout(ArticlesPage)

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async ({
  req,
}) => {
  const lng: Language = req.cookies.i18next as Language
  const articles = await Articles.getArticles(lng)
  return {
    props: {
      articles,
    },
  }
}

interface ArticlePageProps extends Record<string, unknown> {
  articles: ArticleType[]
}
