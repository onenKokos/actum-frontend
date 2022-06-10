import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";

import { FeaturedProduct } from "../components/FeaturedProduct";
import { ProductSection } from "../components/ProductSection";

import { products } from "../contants/mock";
import type { Product } from "../types";

export const getStaticProps: GetStaticProps = async () => {
    // This is where I'd fetch data from
    // https://protected-ocean-79858.herokuapp.com/graphql
    // Conection not ready yet, will be using mocked data
    return {
        props: {
            products,
        },
    };
};

type IndexPageProps = {
    products: Product[];
};

const IndexPage: NextPage<IndexPageProps> = ({ products }) => (
    <>
        <Head>
            <title>Actum Digital - Frontend Task</title>
        </Head>
        <FeaturedProduct />
        <ProductSection products={products} />
    </>
);

export default IndexPage;
