import { Navbar } from '../components/Navbar';
import Head from "next/head";


export default function IndexPage() {
  return (
    <div>
    <Head>
      <title>About</title>
      <meta
        name="John's recipes"
        content="Convenient recipes"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Navbar>
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          John's recipes
        </h1>
      </div>
      </Navbar>


      <main>
      <br />
      <h1 className="text-center text-3xl"> A recipe book based on <em>convenience</em> </h1><br />
    <p className="text-left px-20 text-lg">
      The layout of each recipe will start with the ingredients in two sections
      in order to maximise convenience.
    </p><br />

    <div className="inline block">
    <p className="px-36">
      <li>
      The first section includes the pantry ingredients - check your pantry for these
      ingredients before you leave for the shops.
      </li>
    </p><br />

    <p className="px-36">
      <div></div>
      <li className="text-green-600">
      The second section are fresh produce that you will likely need to pick up
      </li>
    </p>
    </div>

      <p className="border-t-2 border-gray-400 max-w-5xl m-10 mx-24"></p>
      <p className= "text-center text-lg px-10">
      The recipes collected here are not my own and I do not claim credit for them.
      However, they have been selected to satisfy five characteristics
      </p> <br />
      <div className="inline block">
        <p className="px-36">
        <div></div>
        <em>
          <li>Safe - no recipes will advocate for undercooking of or use of questionable ingredients</li><br></br>
          <li>Delicious - each recipe is yummy </li><br></br>
          <li>Afforable - no need for expensive ingredients or fancy cookware </li><br></br>
          <li>Timely - most recipes are quick so that you have more time for your day</li><br></br>
          <li>Nutritious - this is not always true for the recipes here, especially the treats,
          but it does factor into consideration</li>
        </em> <br />
        </p>
      </div>
      </main>
    </div>
  )
}
