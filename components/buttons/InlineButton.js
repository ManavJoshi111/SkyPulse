export default function InlineButton({ text, type, onClick=undefined, ariaLabel=undefined}) {
    return (
        <button className="inline-block text-gray-900 underline" type={type} onClick={onClick} aria-label={ariaLabel}>
            {text}
        </button>
    )
}