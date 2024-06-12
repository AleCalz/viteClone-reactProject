import Titulo from "./Titulo"
import Logo from "./Logo"
import Tags from "./Tags"

export default function Banner() {
    const titulos = [
        {title: 'Get Started', color: 'purple' },
        {title: 'Why Vite?', color: 'grey' },
        {title: 'View on GitHub', color: 'grey' },
        {title: '🎉 ViteConf 23!', color: 'purple' },
    ]
    return(
        <section id="banner">
            <Titulo/>
            <Logo/>
            
            <div id="section-tags">
                {
                    titulos.map((titulo) => {
                        return (
                            <Tags
                                key={`tag-${titulo.title}`}
                                title={titulo.title}
                                color={titulo.color}
                            />
                        )
                    })
                }
            </div>
        </section>

    )
}