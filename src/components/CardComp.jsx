export default function CardComp({ content }) {
    return (
        <div className="card w-18rem m-4">
            <img className="card-img-top" src="content.backdrop_path" alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{content.title}</p>
            </div>
        </div>
    )
}