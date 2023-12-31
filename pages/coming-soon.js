import Head from "next/head";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import PrimaryLink from "../components/links/PrimaryLink";

export default function Home() {
    return (
        <>
            <Head>
                <title>Coming Soon | SkyPulse</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PrimaryLayout content={
                <section className="w-full px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto py-20">
                        <h1 className="text-3xl font-semibold text-gray-900">
                            Coming Soon
                        </h1>
                        <p className="py-4 text-gray-500">
                            This page is under construction.  Please come back soon, or check any open issues to contribute.
                        </p>
                        <PrimaryLink text="Back To Home" href="/" />
                    </div>
                </section>
            }/>
        </>
    )
}
