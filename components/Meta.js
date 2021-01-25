import Head from "next/head";
import Link from 'next/link';

const Meta: (title,meta) => (
  <>
<Head>
  <title>John's recipes</title>
  <meta
    name="John's recipes"
    content="Convenient recipes"
  />
  <link rel="icon" href="/favicon.ico" />
</Head>
);

export { Meta };
