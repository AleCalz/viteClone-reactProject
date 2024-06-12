export default function Card({imagen, titulo, texto}) {
    return(
        <article className="card">
            <span className="card-emogi">{imagen}</span>
            <span className="card-title">{titulo}</span>
            <span className="card-txt">{texto}</span>
        </article>
    )    
}