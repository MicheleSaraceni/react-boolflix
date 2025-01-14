export default function SearchComp() {
    return (
        <form className="d-flex ms-3">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
                Search
            </button>
        </form>
    )
}