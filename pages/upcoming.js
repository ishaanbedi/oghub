import Head from "next/head";
import Link from "next/link";

const Upcoming = () => {
  const upcoming = [
    "Custom themes and pre-built templates",
    "Customizable data (stars, forks, user avatar etc.) and text in the image",
    "Customizable image format (PNG, JPEG, SVG, etc.) with custom dimensions",
    "Automatic URL shortening with custom domain",
    "API support to translate the text in the image as per choice or user location",
    "API support for custom image format and dimensions",
  ];
  return (
    <section>
      <Head>
        <title>Upcoming Features</title>
      </Head>
      <div className="mx-2 flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          The upcoming features are:
        </h1>
        <div className="flex my-4 justify-center">
          <ul className="px-2">
            {upcoming.map((feature, id) => (
              <li key={id}>
                {id + 1}: {feature}.
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-2 justify-center">
          <Link href="/">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              Home
            </button>
          </Link>
          <Link
            target={"_blank"}
            href="https://www.github.com/ishaanbedi/oghub"
          >
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              Github
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
