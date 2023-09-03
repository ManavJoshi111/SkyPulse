import Link from "next/link";

export default function InlineLink({ text, href, target=undefined, rel=undefined }) {
    return (
        <Link className="inline-block text-gray-900 underline" href={href} target={target} rel={rel}>
            {text}
        </Link>
    )
}