import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import InlineButton from "../buttons/InlineButton";

export default function SearchForm() {
    const [searchQuery, setSearchQuery] = useState(null);

    const getCurrentLocation = () => {
        alert("Coming soon.")
    }

    const searchLocation = (e) => {
        e.preventDefault();
        console.log(searchQuery)

        alert("Coming soon.")
    }

    return (
        <form onSubmit={(e) => searchLocation(e)}>
            <InlineButton text="Or use current location" type="button" onClick={() => getCurrentLocation()} ariaLabel="Search by current location" />
            <div className="group flex gap-2 mt-4 p-2 bg-white hover:bg-gray-50 rounded-full transition">
                <input className="w-full p-3 rounded-full group-hover:bg-gray-50 transition" type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter a city or place..." required />
                <PrimaryButton text="Search" type="submit" ariaLabel="Search" />
            </div>
        </form>
    )
}