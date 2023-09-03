export default function SecondaryButton({ text, type, onClick=undefined, ariaLabel=undefined}) {
    return (
        <button className="inline-block py-3 px-6 hover:bg-gray-100 rounded-full transition" type={type} onClick={onClick} aria-label={ariaLabel}>
            {text}
        </button>
    )
}