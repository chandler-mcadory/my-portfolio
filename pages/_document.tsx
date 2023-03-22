import { Html, Head, Main, NextScript } from "next/document";

export default function document() {
    return (
        <Html>
            <Head>
                <link id={'bootswatch-theme-stylesheet'} rel="stylesheet" type="text/css"
                    href={'https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/darkly/bootstrap.min.css'} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}