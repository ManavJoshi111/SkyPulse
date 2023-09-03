import SecondaryLink from "../links/SecondaryLink";
import SecondaryLinkIcon from "../links/SecondaryLinkIcon";

export default function MobileMenu({ toggleMobileMenu }) {
    return (
        <>
            <div className="md:hidden fixed top-0 left-0 h-20 w-full bg-gray-900/30 z-20" onClick={() => toggleMobileMenu()}></div>
            <div className="md:hidden fixed top-20 left-0 h-screen w-full bg-gray-900/30 z-20" onClick={() => toggleMobileMenu()}></div>
            <div className="md:hidden fixed top-0 right-0 w-52 h-20 bg-white border-l border-gray-300 z-20">
                <button className="fixed top-8 right-3 w-6 h-6 text-gray-900" onClick={() => toggleMobileMenu()} aria-label="Close menu">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="md:hidden fixed top-20 right-0 w-52 h-screen bg-white border-l border-gray-300 z-20">
                <ul>
                    <li>
                        <div className="ml-6">
                            <SecondaryLink text="Search" href="/" />
                        </div>
                    </li>
                    <li>
                        <div className="ml-6">
                            <SecondaryLink text="Locations" href="/locations" />
                        </div>
                    </li>
                    <li>
                        <div className="ml-6">
                            <SecondaryLinkIcon
                                text="About"
                                icon={
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                }
                                href="/coming-soon"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}