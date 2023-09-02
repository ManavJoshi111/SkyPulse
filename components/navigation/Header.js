import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();

    const toggleMobileMenu  = () => {
        setMobileMenu(!mobileMenu);
        disableTabIndex(!mobileMenu);
    }

    // Disable the tab index of page links when mobile menu is opened
    const disableTabIndex = (index) => {
        const links = document.querySelectorAll("a");
        const inputs = document.querySelectorAll("input");
        const buttons = document.querySelectorAll("button");
        const selects = document.querySelectorAll("select");

        links.forEach((link) => index ? link.setAttribute("tabindex", "-1") : link.removeAttribute("tabindex"));
        inputs.forEach((input) => index ? input.setAttribute("tabindex", "-1") : input.removeAttribute("tabindex"));
        buttons.forEach((button) => index ? button.setAttribute("tabindex", "-1") : button.removeAttribute("tabindex"));
        selects.forEach((select) => index ? select.setAttribute("tabindex", "-1") : select.removeAttribute("tabindex"));
    }

    // Close mobile menu on page change
    useEffect(() => {
        router.events.on("routeChangeComplete", () => setMobileMenu(false));

        return () => {
            router.events.off("routeChangeComplete", () => setMobileMenu(false));
        }
    }, [router.events])

    return (
        <header className="relative px-3 shadow">
            <div className="max-w-screen-xl mx-auto py-5 flex justify-between items-center">
                <Link className="text-2xl font-semibold text-gray-900" href="/">
                    SkyPulse
                </Link>
                <ul className="md:flex hidden items-center text-gray-900">
                    <li>
                        <Link className="py-3 px-6 rounded-full hover:bg-gray-100" href="/">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className="py-3 px-6 rounded-full hover:bg-gray-100" href="/">
                            Locations
                        </Link>
                    </li>
                    <li>
                        <Link className="py-3 px-6 flex items-center gap-2 rounded-full hover:bg-gray-100" href="/">
                            About
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </Link>
                    </li>
                </ul>
                <button className="md:hidden block my-3 text-gray-900" onClick={() => toggleMobileMenu()} aria-label="Open menu">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {mobileMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
            </div>
        </header>
    )
}