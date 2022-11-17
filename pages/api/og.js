/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";
export const config = {
  runtime: "experimental-edge",
};
export default async function (req) {
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
            <p>
              <h1 tw="font-extrabold text-7xl ">OGHub</h1>
            </p>
            <strong tw="mt-1 block text-4xl font-extrabold text-slate-300">
              @ishaanbedi/OGHub
            </strong>
            <p tw="mt-4 text-slate-100 text-2xl leading-relaxed">
              Generate Dynamic Cover Images for your GitHub Repositories
            </p>
          </div>
        </div>
      </div>
    )
  );
}
