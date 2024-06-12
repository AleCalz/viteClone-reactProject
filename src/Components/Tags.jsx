export default function Tags({ title, color }) {
    return(
            <a href="#"  className={`tag-${color}`} >{title}</a>
    )
}