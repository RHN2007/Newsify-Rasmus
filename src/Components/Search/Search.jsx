export default function Search({handleSearch}) {
    return (
        <>
            <form onSubmit={handleSearch} className="header__search">
                <input type="text" name="search" placeholder="Search news" />
            </form>
        </>
    )
}