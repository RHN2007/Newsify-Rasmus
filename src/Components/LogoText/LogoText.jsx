export default function LogoText ({divClass}) {
    return (
        <>
            <div className={`header__logotext ${divClass ? (divClass) : ""}`}>
                <img src="/assets/newsify_logo.svg" alt="Newsify Logo" className="header__logo" />
                <h1>Newsify</h1>
            </div>
        </>
    )
}