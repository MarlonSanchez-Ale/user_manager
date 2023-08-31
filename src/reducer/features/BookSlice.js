import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid"

const initialState = {
    items: [
        {
            id: v4(),
            title: "The Little Prince",
            image: "https://m.media-amazon.com/images/I/71QKrhhMJIL._AC_UF1000,1000_QL80_.jpg",
            author: "Antoine de Saint-Exupéry",
            imageAuthor: "https://proassetspdlcom.cdnstatics2.com/usuaris/autores/fotos/52/original/000051722_1_saint-exupery_201811071458.jpg",
            description: "The story follows a young prince who visits various planets, including Earth, and addresses themes of loneliness, friendship, love, and loss.",
            review: "The Little Prince is a fabulous philosophical tale that in 1943 made the French writer Antoine de Saint-Exupery famous throughout the world. At one time, the book became a bestseller and was sold in 200 million copies worldwide. To date, it has been translated into 301 languages." +

                "The story is based on a gripping story about a boy – the Little Prince, who decided to leave his home to see how other people live. The Little Prince lived on the asteroid B-612 and was engaged in everyday affairs there: he watched three volcanoes, weeded out weeds, looked after the beautiful Rose. He loved Rosa, but she seemed aloof, rude and cruel to him. Soon, the Little Prince began to feel very lonely and unhappy, so he decided to go on a trip to other planets." +

                "Traveling through neighboring asteroids, the Little Prince meets rather strange people who live alone: ​​the King, the Ambitious, the Drunkard, the Business Man, the Lamplighter and the Geographer. The boy did not like all these people, they were indifferent, callous and greedy, and their life seemed to him boring, monotonous and empty." +

                " Then the Little Prince flies to planet Earth. Unlike tiny asteroids, the Earth surprised him with its size and variety in everything. He hopes to learn a lot here. But, as it turned out later, people on Earth are not much different from those whom he met earlier. And only the Pilot, the Fox and the Snake liked the boy. The pilot, being a romantic, proved to the boy that not all adults have lost the ability to believe in miracles. Fox – taught friendship, responsibility, showed how important it is to value and protect loved ones. The Wise Snake explained that it is necessary to help each other in life, offering her help, suddenly the Little Prince wants to go back home. After a while, the boy really begins to miss his beloved Rose and his home planet, and, taking advantage of the Snake’s offer, returns home." +

                "This book is very poignant, and will not leave indifferent both a child and an adult. Many philosophical themes are hidden in it, but, nevertheless, the main idea of ​​this story is how important, as an adult, not to lose the ability to look at life like a child, you need to enjoy simple things and be pure, naive and trusting, like Little Prince.",
            Category: "Novella",
            date_publication: "April 1943"
        },
        {
            id: v4(),
            title: "Twenty Thousand Leagues Under the Sea",
            image: "https://m.media-amazon.com/images/I/51evwEA4ZrL.jpg",
            author: "Julio Verne",
            imageAuthor: "https://www.biografiasyvidas.com/biografia/v/fotos/verne_julio.jpg",
            description: "The novel was originally serialized from March 1869 through June 1870 in Pierre-Jules Hetzel's fortnightly periodical, the Magasin d'éducation et de récréation. A deluxe octavo edition, published by Hetzel in November 1871, included 111 illustrations by Alphonse de Neuville and Édouard Riou.",
            review: "When an unidentified “monster” threatens international shipping, French oceanographer Pierre Aronnax and his unflappable assistant Conseil join an expedition organized by the US Navy to hunt down and destroy the menace. After months of fruitless searching, they finally grapple with their quarry, but Aronnax, Conseil, and the brash Canadian harpooner Ned Land are thrown overboard in the attack, only to find that the “monster” is actually a futuristic submarine, the Nautilus, commanded by a shadowy, mystical, preternaturally imposing man who calls himself Captain Nemo. Thus begins a journey of 20,000 leagues—nearly 50,000 miles—that will take Captain Nemo, his crew, and these three adventurers on a journey of discovery through undersea forests, coral graveyards, miles-deep trenches, and even the sunken ruins of Atlantis. Jules Verne’s novel of undersea exploration has been captivating readers ever since its first publication in 1870, and Frederick Paul Walter’s reader-friendly, scientifically meticulous translation of this visionary science fiction classic is complete and unabridged down to the smallest substantive detail.",
            Category: "Science Fiction",
            date_publication: "March 20, 1869"
        },
        {
            id: v4(),
            title: "Around the World in Eighty Days",
            image: "https://cdn.kobo.com/book-images/186d3702-6347-48fb-8996-5d9e997a6a27/353/569/90/False/around-the-world-in-eighty-days-complete-text-with-free-audiobook-links-by-jules-verne.jpg",
            author: "Jules Verne",
            imageAuthor: "https://www.biografiasyvidas.com/biografia/v/fotos/verne_julio.jpg",
            description: "Set sail in Jules Verne’s iconic hot air balloon with Phileas Fogg, Passepartout, and Fix in a thrilling, modern adaptation of the classic adventure novel. ",
            review: "One night in the reform club, Phileas Fogg bets his companions that he can travel across the globe in just eighty days. Breaking the well-established routine of his daily life, he immediately sets off for Dover with his astonished valet Passepartout. Passing through exotic lands and dangerous locations, they seize whatever transportation is at hand—whether train or elephant—overcoming set-backs and always racing against the clock.",
            Category: "Science Fiction",
            date_publication: "November 6, 1872"
        },
        {
            id: v4(),
            title: "ANGELS & DEMONS",
            image: "https://m.media-amazon.com/images/I/81adkKbGZgL._AC_UF1000,1000_QL80_.jpg",
            author: "Dan Brown",
            imageAuthor: "https://danbrown.com/wp-content/themes/danbrown/images/db/slideshow/author/db.courter.02.jpg",
            description: " Angels & Demons is the book that thrust Dan Brown into the limelight as one of the most gripping authors of our generation. ",
            review: "Angels & Demons is all about Robert Langdon, a world-renowned symbologist being summoned to a Swiss research facility after a physicist has been murdered and had a mysterious symbol seared into his chest. The symbol suggests an ancient brotherhood by the name of the Illuminati, the most powerful underground organisation to ever walk the earth, have reappeared and intend on doing something big and dangerous." +
                "The plot has you gripped from every early on and then for the next few hundred pages continues to keep you on the edge of your hypothetical seat with the ending of each chapter. You can tell Bronw has knowledge of these symbols as there’s a lot of research done into the background of many of the mysterious goings-on in the book. The mystery, conspiracy and history is absolutely my forte and so I absolutely loved reading this book. Without a doubt, this plot will keep your interest piqued for a good amount of time you’re reading it.",
            Category: "Fiction",
            date_publication: "Jun 14, 2021"
        },
        {
            id: v4(),
            title: "Noticia de un secuestro",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385357867i/18942252.jpg",
            author: "Gabriel García Márquez",
            imageAuthor: "https://www.biografiasyvidas.com/reportaje/garcia_marquez/fotos/garcia_marquez_420a.jpg",
            description: "El último libro periodístico publicado por Gabriel García Márquez fue Noticia de un secuestro, en el que se narra la historia de los secuestros de varias figuras de la política y la cultura de Colombia por el cartel de Medellín en 1991, uno de los años de mayor enfrentamiento entre el gobierno y el capo Pablo Escobar.",
            review: "Con Noticia de un secuestro el premio Nobel de literatura colombiano, escritor famoso y periodista, Gabriel García Márquez ha escrito un relato impresionante y conmovedor después de varios años de pesquisas. Nos describe a la perfección todo lo que sucece alrededor de los secuestros de diez personas, perpetrados en 1990 por el narcotraficante Pablo Escobar, jefe del cártel de Medellín. Los secuestrados son todos miembros de familias de políticos y periodistas influyentes. Así los narcotraficantes intentan forzar al gobierno a declarar ilegal el tratado suscrito bajo el presidente Turbay, en el cual se acuerda por primera vez la extradición de nacionales para pagar sus delitos en otras naciones. Es que tienen temor de ser extraditados a los Estados Unidos dónde les esperaría una pena de al menos 150 años por narcotráfico en una cárcel de máxima seguridad. Aterrorizados por el largo brazo de los Estados Unidos en el mundo entero se han dado cuenta de que no tienen otro lugar más seguro que Colombia. Tratan de conseguir la protección del estado por la razón y por la fuerza con un terrorismo inclemente y al mismo tiempo con la propuesta de entregarse a la justicia e invertir sus capitales en Colombia con la sola condición de no ser extraditados. El eslogan Preferimos una tumba en Colombia a una celda en los Estados Unidos ya muestra las brutales intenciones de los llamados Extraditables. El lector se traslada con los dos principales personajes, Maruja Pachón de Villamizar y su cuñada Beatriz Villamizar de Guerrero. Vive con ellas sus experiencias, sus temores, sus sufrimientos y sus limitaciones durante su secuestro de seis meses hasta la feliz liberación. El autor recabó sus datos hablando con Maruja Pachón y su esposo que le propusieron en 1993 que escribiera un libro con las experiencias de ella y las arduas diligencias en que él se empeñó hasta que logró liberarla. Sus relatos personales son el hilo conductor de este libro. Además entrevistó a cuantos protagonistas le fue posible. Así Noticia de un secuestro es una crónica veraz y auténtica hasta el último detalle.",
            Category: "Novelístico",
            date_publication: "1996"
        },
        {
            id: v4(),
            title: "The Shining",
            image: "https://assets.blogs.bsu.edu/wp-content/uploads/sites/25/2020/03/09153737/shining-683x1024.jpg",
            author: "Stephen King",
            imageAuthor: "https://estaticos.elcolombiano.com/binrepository/851x566/71c0/780d565/none/11101/UFLI/ae2l52uz7jefxj3vhik7xqwq5m_40721032_20220921070856.jpg",
            description: "The Shining is the story of Jack Torrance, who is employed as the caretaker of the gargantuan Overlook Hotel in Colorado one winter. ",
            review: " Moving his wife, Wendy, and their son, Danny, into it for the season, he hopes to find peace: to finish his writing project, to escape his latent alcoholism, and to stich his fractured family unit together. But when they're alone, Jack appears to go insane, pushed into fantasy – or hallucination. Eventually, he attacks his family, attempting to kill them in a twisted mirroring of the awful events that, it transpires, occurred in the hotel's past. This is the story of both King's 1977 novel and Stanley Kubrick's film adaptation three years later, but they're vastly distinctive beasts. For the King fan, however, it's hard to think of one without the other. The Shining is two stories, both the same, but somehow very different.",
            Category: "Terror",
            date_publication: "January 26, 1977"
        }
    ],
    collection: [],
    filter: "",
}

export const BookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        addCollection: (state, action) => {
            const found = state.items.find(x => x.id === action.payload)
            state.collection.push(found)
        },
        removeCollection: (state, action) => {
            const found = state.collection.find(x => x.id === action.payload)
            if (found) {
                state.collection.splice(state.collection.indexOf(found), 1)
            }
        },
        removeAllCollection: (state, action) => {
            state.collection.splice(0, state.collection.length)
        }
    }
})

export const { setFilter, addCollection, removeCollection, removeAllCollection } = BookSlice.actions;
export default BookSlice.reducer