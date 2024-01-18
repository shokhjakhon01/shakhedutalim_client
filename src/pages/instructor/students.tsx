import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"

const Students: NextPage = () => {
  return <div>StudentPage</div>
}

export default withInstructorLayout(Students)
