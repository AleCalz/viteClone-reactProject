import Card from "./Card"

export default function Content() {

    const cardContent = [
        { emogi: '💡', title:'Instant Server Start', text:'On demand file serving over native ESM, no bundling required!' },
        { emogi: '⚡', title:'Lightning Fast HMR', text:'Hot Module Replacement (HMR) that stays fast regardless of app size.' },
        { emogi: '🛠️', title:'Rich Features', text:'Out-of-the-box support for TypeScript, JSX, CSS and more.' },
        { emogi: '📦', title:'Optimized Build', text:'Pre-configured Rollup build with multi-page and library mode support.' },
        { emogi: '🔩', title:'Universal Plugins', text:'Rollup-superset plugin interface shared between dev and build.' },
        { emogi: '🔑', title:'Fully Typed APIs', text:'Flexible programmatic APIs with full TypeScript typing.' },
    ]
    return(
        <div id="container">
            <section id="list-cards">
                {
                    cardContent.map((item) => {
                        return(
                            <Card
                                key={`card-${item.title}`}
                                imagen={item.emogi}
                                titulo={item.title}
                                texto={item.text}
                            />
                        )
                    })
                }
            </section>
        </div>
        // <Card/>
    )
}