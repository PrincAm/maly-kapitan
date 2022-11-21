import React from "react"
import {StaticImage} from 'gatsby-plugin-image';

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found"/>
        <h1>404 NENALEZENO</h1>
        <p>Hledáte stránku, která neexistuje :(</p>
        <StaticImage
            src="../images/captain_sleeping.jpg"
            alt="laying dog"
            placeholder="blurred"
            layout="fixed"
            height={400}
        />

    </Layout>
)

export default NotFoundPage
