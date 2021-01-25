import { Navbar } from '../components/Navbar';
import Head from "next/head";
import Link from "next/link";


export default function IndexPage() {
  return (
    <div>
    <Head>
      <title>John's recipes</title>
      <meta
        name="John's recipes"
        content="Convenient recipes"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Navbar>
      </Navbar>


      <main className=" justify-left min-h-screen py-10 px-20  m -10 ">
      <br />
      <h1 className="px-5 leading-tight tracking-tight text-left sm:mt-4 sm:mb-10 sm:text-2xl">
      A collection of John's favourite recipes
      </h1><br />

      <Link href ="/recipes/basil-pork">
          <div
          className="border-solid border-gray-300 border-2 hover:border-blue-500 rounded-lg"
          >

          <br></br>
            <h1 className= "text-center font-bold"> Basil pork </h1>
              <a className="m-1">
                <img
                  className="max-h-40 min-w-min object-cover rounded-lg m-7"
                  src={`${process.env.baseUrl}/assets/images/minced-pork.jpg`}
                  alt="basil pork"
                />
              </a>
          </div>
      </Link>

      </main>
    </div>
  )
}
