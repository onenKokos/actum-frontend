import type { NextPage } from "next";
import Head from "next/head";

import { FeaturedProduct } from "../components/FeaturedProduct";

const IndexPage: NextPage = () => (
    <>
        <Head>
            <title>Actum Digital - Frontend Task</title>
        </Head>
        <FeaturedProduct />
    </>
);

export default IndexPage;
