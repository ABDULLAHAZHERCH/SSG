import { getPostData } from "../lib/posts";

export async function getStaticProps() {
  const bigData = await getPostData();
  return {
    props: {
      bigData,
    },
  };
}

export default function Home({bigData}) {
  const { data, content } = bigData;
  return (
    <div>
      <h1>{bigData.data.title}</h1>
      <p>{bigData.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
