export function Header(){
    return (
        <>
            <nav
            className="h-[8vh] px-3 py-2 text-[#f8f8f8] bg-stone-900 max-w-full my-0 mx-auto leading-none flex gap-3 justify-between items-center sm:flex-row"
            >
            <a
                className="font-[Segoe_UI] text-2xl md:text-3xl font-bold"
                href="/"
                >GEOHELPER.
            </a>

            <a
                target="_blank"
                href="https://github.com/BirendraHansda23/GeoHelper-using-React"
                >About Project
            </a>
            </nav>
        </>
    )
}