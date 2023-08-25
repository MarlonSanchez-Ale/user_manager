import Header from "../elements/Header"
import Footer from "../elements/Footer"

export default function Format({ children }) {
    return (
        <div className="w-full">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}