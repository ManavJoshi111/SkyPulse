import Header from "../navigation/Header";

export default function PrimaryLayout({ content }) {
    return (
        <>
            <Header />
            <main>
                {content}
            </main>
        </>
    )
}