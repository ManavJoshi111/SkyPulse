export default function SecondaryButtonIcon({ text, icon, type, onClick=undefined, ariaLabel=undefined}) {
    return (
        <button className="inline-flex items-center gap-2 py-3 px-6 hover:bg-gray-100 rounded-full transition" type={type} onClick={onClick} aria-label={ariaLabel}>
            {text}{icon}
        </button>
    )
}