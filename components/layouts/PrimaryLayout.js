import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

export default function PrimaryLayout({ content }) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="grow flex flex-col justify-center items-center">
                {content}
            </main>
            <Footer />
        </div>
    )
}