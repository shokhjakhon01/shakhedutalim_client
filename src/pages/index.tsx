import { withLayout } from "src/layouts/layout"
import { HomepageComponent } from "src/page-component"

const Home = () => {
  return <HomepageComponent />
}

export default withLayout(Home)
