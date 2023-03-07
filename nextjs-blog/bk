// How to set up the Link (client-side navigation)
import Link from "next/link";
//How to add Nextjs's Head
import Head from "next/head";
// How to add Nextjs's Script
import Script from "next/script";
//How to add the Component
import Layout from "../../components/layout";



// pages routing between files
// check "http//localhost:3000/posts/first-post"
export default function FirstPost() {
    return (
        <>
        <Layout>
        {/* how to add the Head (tabName) here */}
            <Head>
                <title>First Post</title>
                {/* How to add the external (Third Party Javascript) */}
              <Script 
               src="https://connect.facebook.net/en_US/sdk.js"
               strategy="lazyOnload"
               onLoad={() =>
                 console.log(`script loaded correctly, window. FB has been populated`)
                }
               />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">← Back to Home</Link>
            </h2>
            </Layout>
        </>
    )
}