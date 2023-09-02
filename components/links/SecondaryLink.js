import Link from "next/link";

export default function SecondaryLink({ text, href, target=undefined, rel=undefined }) {
    return (
        <Link className="inline-block py-3 px-6 hover:bg-gray-100 rounded-full transition" href={href} target={target} rel={rel}>
            {text}
        </Link>
    )
}