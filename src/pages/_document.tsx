/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://www.youtube.com/player_api"></script>
      </Head>
      <body className="font-yourfont">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
