import { useEffect } from "react"
import { withLayout } from "src/layouts/layout"
import { HomepageComponent } from "src/page-component"
import { Articles } from "src/services/article.service"

const Home = () => {
  // useEffect(() => {
  //   Articles.getArticles("uz").then((data) => console.log(data))
  // }, [])
  return <HomepageComponent />
}

export default withLayout(Home)
