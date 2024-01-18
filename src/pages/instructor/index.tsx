import { NextPage } from "next"
import React from "react"
import { withInstructorLayout } from "src/layouts/instructor"

const InstructorPage: NextPage = () => {
  return <div>InstructorPage</div>
}

export default withInstructorLayout(InstructorPage)
