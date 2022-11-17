/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";
export const config = {
  runtime: "experimental-edge",
};
export default async function (req) {
  const { searchParams } = new URL(req.url);
  const repo = searchParams.get("repo");
  var data = await fetch(`https://api.github.com/repos/${repo}`);
  var json = await data.json();
  var stars = json.stargazers_count;
  var forks = json.forks_count;
  if (stars > 1000) {
    stars = (stars / 1000).toFixed(1) + "K";
  }
  if (forks > 1000) {
    forks = (forks / 1000).toFixed(1) + "K";
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to left, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        }}
      >
        <div tw="flex  w-screen items-center px-8 text-white">
          <div tw="max-w-xl text-left flex flex-col ">
            <img
              src={json.owner.avatar_url}
              tw="rounded-full w-44 h-44 shadow-lg shadow-teal-500"
            />

            <p>
              <h1 tw="font-extrabold text-7xl ">{json.name}</h1>
            </p>
            <strong tw="mt-1 block text-4xl font-extrabold text-slate-300">
              @{json.owner.login}/{json.name}
            </strong>
            <p tw="mt-4 text-slate-100 text-2xl leading-relaxed">
              {json.description}
            </p>
            <span className="flex flex-row space-x-2 items-center">
              {stars !== 0 && (
                <span tw="mt-4 text-slate-100 text-2xl leading-relaxed">
                  {stars} ⭐️
                </span>
              )}
              {forks !== 0 && (
                <span tw="mt-4 text-slate-100 text-2xl leading-relaxed px-3">|</span>
              )}
              {forks !== 0 && (
                <span tw="mt-4 text-slate-100 text-2xl leading-relaxed">
                  {forks} 🍴
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    )
  );
}
