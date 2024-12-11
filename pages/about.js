import Link from "next/link";

export async function getStaticProps() {
  return {
    props: { description: "This is the About page." },
  };
}

export default function About({ description }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>{description}</p>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </div>
  );
}
