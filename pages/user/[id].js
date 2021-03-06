import Head from "next/head";
import Image from "next/image";

export default function User({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Detail User</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Detail User</h1>

        <p>Nama: {data.name}</p>
        <p>Phone: {data.phone}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + ctx.params.id
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
