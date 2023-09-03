import Head from "next/head";
import Link from "next/link";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import locationsData from "../data/popular-locations.json";

export default function Home() {
    return (
        <>
            <Head>
                <title>Locations | SkyPulse</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PrimaryLayout content={
                <section className="w-full px-3 bg-gray-100">
                    <div className="max-w-screen-xl mx-auto py-20">
                        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                            Popular Locations
                        </h1>
                        <ul className="grid md:grid-cols-3 gap-6">
                            {locationsData.map((location) => {
                                return (
                                    <li key={location.locaiton}>
                                        <Link className="block p-12 border border-gray-300 rounded" href="/coming-soon">
                                            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                                                {location.location}
                                            </h2>
                                            <p className="text-gray-700">
                                                {location.coordinates}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            }/>
        </>
    )
}
