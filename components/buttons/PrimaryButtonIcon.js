export default function PrimaryButtonIcon({ text, icon, type, onClick=undefined, ariaLabel=undefined}) {
    return (
        <button className="inline-flex items-center gap-2 py-3 px-6 bg-blue-500 text-white hover:shadow-lg rounded-full transition" type={type} onClick={onClick} aria-label={ariaLabel}>
            {text}{icon}
        </button>
    )
}