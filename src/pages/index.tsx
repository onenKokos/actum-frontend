import Head from "next/head";
import type { NextPage } from "next";

import { FeaturedProduct } from "../components/FeaturedProduct";
import { ProductSection } from "../components/ProductSection";

const IndexPage: NextPage = () => (
    <>
        <Head>
            <title>Actum Digital - Frontend Task</title>
        </Head>
        <FeaturedProduct />
        <ProductSection />
    </>
);

export default IndexPage;
