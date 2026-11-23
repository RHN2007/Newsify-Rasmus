export default function LogoText ({divClass, level, text}) {
    const Heading = `h${level}`
    return (
        <>
            <div className={`header__logotext ${divClass ? (divClass) : ""}`}>
                <img src="/assets/newsify_logo.svg" alt="Newsify Logo" className="header__logo" />
                <Heading>{text}</Heading>
            </div>
        </>
    )
}