import Link from "next/link";

export default function PrimaryLink({ text, href, target=undefined, rel=undefined }) {
    return (
        <Link className="inline-block py-3 px-6 bg-blue-500 text-white hover:shadow-lg rounded-full transition" href={href} target={target} rel={rel}>
            {text}
        </Link>
    )
}