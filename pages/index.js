import Head from 'next/head';
import Home from "../components/home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Galton Board Visualiser</title>
      </Head>
      <Home />
    </div>
  )
}
