import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
const Home = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [repoLink, setRepoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [randomPlaceholderExamples, setRandomPlaceholderExamples] = useState(
    []
  );
  const generator = async () => {
    setLoading(true);
    var data = await fetch(`https://api.github.com/repos/${repoLink}`);
    data = await data.json();
    const res = await fetch(`/api/link?repo=${data.full_name}`);
    setThumbnail(res.url);
    setProjectName(data.full_name);
    setLoading(false);
    setShowOutput(true);
  };
  const download = async () => {
    setDownloading(true);
    var link = document.createElement("a");
    link.download = `${projectName}.jpeg`;
    link.href = thumbnail;
    link.click();
    setDownloading(false);
  };

  const copyURL = () => {
    setLoading(true);
    var link = document.createElement("input");
    link.value = `https://oghub.vercel.app/api/link?repo=${projectName}`;
    document.body.appendChild(link);
    link.select();
    document.execCommand("copy");
    document.body.removeChild(link);
    alert("Copied to clipboard!");
    setLoading(false);
  };
  const placeholderExamples = [
    "facebook/react",
    "vercel/swr",
    "vercel/hyper",
    "xtermjs/xterm.js",
    "supabase/supabase",
    "nuxt/nuxt.js",
    "denoland/deno",
    "vercel/next.js",
    "sveltejs/svelte",
    "openai/whisper",
    "apple/swift",
    "v8/v8",
    "vuejs/vue",
  ];
  useEffect(() => {
    setPlaceHolder(
      placeholderExamples[
        Math.floor(Math.random() * placeholderExamples.length)
      ]
    );
    setRandomPlaceholderExamples(
      placeholderExamples.sort(() => Math.random() - 0.3).slice(0, 3)
    );
  }, []);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        setShowOutput(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section>
      <Head>
        <title>OGHub</title>
        <meta
          name="description"
          content="Generate Dynamic Cover Image for your GitHub Repositories"
        />
        <meta
          name="keywords"
          content="open graph, github, github open graph, github open graph image "
        />
        <meta name="author" content="Ishaan Bedi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="OGHub" />
        <meta
          property="og:description"
          content="Generate Dynamic Cover Image for your GitHub Repositories"
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://oghub.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ishnbedi" />
        <meta name="twitter:creator" content="@ishnbedi" />
        <meta name="twitter:title" content="OGHub" />
        <meta
          name="twitter:description"
          content="Generate Dynamic Cover Image for your GitHub Repositories"
        />
        <meta name="twitter:image" content="/og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-blue-accent-400 py-32">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Dynamic cover image
              <br className="hidden md:block" /> for your{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-white" />
                <span className="relative text-blue-accent-400">GitHub</span>
              </span>{" "}
              project.
            </h2>
            <p className="mb-6 text-base text-blue-50 md:text-lg">
              Just type the username/repository and see the magic.
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                value={repoLink}
                onChange={(e) => setRepoLink(e.target.value)}
                placeholder={`Eg. ${placeHolder}`}
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-blue-900 focus:border-blue-accent-700 focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="focus:shadow-outline focus:outline-none"
              >
                <a
                  onClick={() => {
                    repoLink === "" ? null : generator();
                  }}
                  className="inline-flex items-center cursor-pointer justify-center w-full h-12 px-6 font-semibold tracking-wide text-blue-accent-400 transition duration-200 rounded shadow-md md:w-auto hover:text-blue-900 bg-white hover:bg-blue-accent-100 focus:shadow-outline focus:outline-none"
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  ) : (
                    "Generate"
                  )}
                </a>
              </button>
            </form>
          </div>
          <div className="text-center pt-8">
            <h3 className="text-white">Or try one of these examples:</h3>
            <div className="flex space-x-2 justify-center items-center pt-4">
              {randomPlaceholderExamples.map((example) => (
                <button
                  key={example}
                  onClick={() => {
                    setRepoLink(example);
                    console.log(repoLink);
                  }}
                  className="focus:shadow-outline focus:outline-none"
                >
                  <a className="text-sm lg:md:px-2 px-1 py-2 backdrop-blur bg-white text-white bg-opacity-25 rounded-md hover:bg-opacity-20 shadow-2xl">
                    {example}
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {showOutput && (
          <>
            {showOutput ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-accent-400 outline-none focus:outline-none">
                      <div className="relative p-6 flex-auto">
                        <img
                          src={thumbnail}
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          className="shadow-2xl rounded"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center py-2">
                        <button
                          onClick={copyURL}
                          className="my-2 flex flex-row-reverse bg-white py-1 px-4 rounded text-blue-50 bg-opacity-10 backdrop-filter backdrop-blur-sm items-center "
                        >
                          <span className="ml-2 lg:md:sm:text-lg text-xs">{`oghub.vercel.app/api/link?repo=${projectName}`}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                          </svg>
                        </button>
                        <span className="space-x-2 flex">
                          <a
                            onClick={download}
                            className="inline-flex items-center justify-center cursor-pointer w-full h-8 px-6 font-semibold tracking-wide text-blue-accent-400 transition duration-200 rounded shadow-md md:w-auto hover:text-blue-900 bg-white hover:bg-blue-accent-100 focus:shadow-outline focus:outline-none lg:md:sm:text-md text-sm"
                          >
                            {downloading ? <>Downloading</> : <> Download</>}
                          </a>
                          <a
                            onClick={() => setShowOutput(false)}
                            className="inline-flex items-center justify-center cursor-pointer w-full h-8 px-6 font-semibold tracking-wide text-blue-accent-400 transition duration-200 rounded shadow-md md:w-auto hover:text-blue-900 bg-white hover:bg-blue-accent-100 focus:shadow-outline focus:outline-none lg:md:sm:text-md text-sm"
                          >
                            Close
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        )}
      </div>
      <footer className="lg:md:flex hidden absolute bottom-0 w-full justify-center items-center">
        <p className="lg:md:sm:text-sm text-xs py-2 text-center">
          The project is still in development. <br />
          Things might break. Check out the{" "}
          <span className="underline underline-offset-4 hover:text-gray-700">
            <Link href="/upcoming"> upcoming features.</Link>
          </span>
        </p>
      </footer>
    </section>
  );
};

export default Home;
