import InlineLink from "../links/InlineLink";

export default function Footer() {
    return (
        <section className="w-full px-3 bg-white">
            <div className="max-w-screen-xl mx-auto py-14">
                <ul className="space-y-6">
                    <li>
                        <p className="semibold text-gray-900">
                            SkyPulse
                        </p>
                    </li>
                    <li>
                        <div className="bg-gray-300 h-1 w-full"></div>
                    </li>
                    <li>
                        <ul className="flex md:flex-row flex-col justify-between md:gap-12 gap-6">
                            <li>
                                <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
                                    <li>
                                        <InlineLink text="Search" href="/" />
                                    </li>
                                    <li>
                                        <InlineLink text="Locations" href="/locations" />
                                    </li>
                                    <li>
                                        <InlineLink text="About" href="/coming-soon" />
                                    </li>
                                    <li>
                                        <InlineLink text="Terms" href="/coming-soon" />
                                    </li>
                                    <li>
                                        <InlineLink text="Privacy" href="/coming-soon" />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="text-xs text-gray-500">
                                    The information presented on this site is derived from third-party sources. While every effort is made to provide accurate data, we do not make any warranties or representations regarding its completeness or accuracy.
                                </p>
                            </li>
                        </ul>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}