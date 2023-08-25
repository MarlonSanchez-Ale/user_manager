import Format from "./layout/format"
import FirstSection from "./elements/welcome"
import LastestPosts from "./elements/LastestPosts"

export default function BookList() {
    return (
       <Format>
        <FirstSection />
        <LastestPosts />
       </Format>
    )
}