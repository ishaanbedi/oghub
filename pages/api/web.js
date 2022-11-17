/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";
export const config = {
  runtime: "experimental-edge",
};
export default async function (req) {
  const { searchParams } = new URL(req.url);
  const projectName = searchParams.get("name");
  const description = searchParams.get("description");
  const stars = searchParams.get("stars");
  const forks = searchParams.get("forks");
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
          <div tw="max-w-xl text-left flex flex-col">
            <p>
              <h1 tw="font-extrabold text-5xl">{projectName.split("/")[1]}</h1>
            </p>
            <strong tw="mt-1 block text-3xl font-extrabold text-rose-700">
              @{projectName}
            </strong>
            <p tw="mt-4 max-w-lg text-xl leading-relaxed">
              {description ? description : null}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
