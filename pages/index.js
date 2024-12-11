import { getPostData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const bigData = await getPostData();
  return {
    props: {
      bigData,
    },
  };
}

export default function Home({ bigData }) {
  const { data, content } = bigData;
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta
          property="og:description"
          content="This is a sample static site using Next.js."
        />
      </Head>
      <h1>{bigData.data.title}</h1>
      <p>{bigData.data.date}</p>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
