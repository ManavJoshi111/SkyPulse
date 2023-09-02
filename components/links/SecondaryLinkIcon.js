import Link from "next/link";

export default function SecondaryLinkIcon({ text, icon, href, target=undefined, rel=undefined }) {
    return (
        <Link className="inline-flex items-center gap-2 py-3 px-6 hover:bg-gray-100 rounded-full transition" href={href} target={target} rel={rel}>
            {text}{icon}
        </Link>
    )
}