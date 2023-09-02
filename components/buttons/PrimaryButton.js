export default function PrimaryButton({ text, type, onClick=undefined, ariaLabel=undefined}) {
    return (
        <button className="inline-block py-3 px-6 bg-blue-500 text-white hover:shadow-lg rounded-full transition" type={type} onClick={onClick} aria-label={ariaLabel}>
            {text}
        </button>
    )
}