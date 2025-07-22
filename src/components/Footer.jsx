import LinkCard from "./LinkCard";
import ContactCard from "./ContactCard";

export function Footer() {
    return (
        <footer className="px-[40px] md:px-[80px] pt-[50px] pb-[30px] font-[Segoe_UI] text-[#f8f8f8] bold bg-stone-900 max-w-full my-0 mx-auto leading-none">
            <article className="flex flex-col gap-5 justify-between sm:flex-row">
                <nav aria-label="Quick Links">
                    <LinkCard
                        heading="Quick Links"
                        links={[
                            { name: "Explore", url: "/" },
                            { name: "About Project", url: "https://github.com/BirendraHansda23/GeoHelper" }
                        ]}
                    />
                </nav>

                <nav aria-label="Resources">
                    <LinkCard
                        heading="Resources"
                        links={[
                            { name: "Rest Countries API", url: "https://restcountries.com" },
                            { name: "Pexels API", url: "https://www.pexels.com/api" },
                            { name: "Google Fonts", url: "https://fonts.google.com" }
                        ]}
                    />
                </nav>

                <ContactCard />
                
            </article>

            <hr className="my-6 opacity-70" />

            <p className="text-center text-sm opacity-70">
                This website is developed with ❤️‍🔥 by Birendra Kumar Hansda © 2025
            </p>
        </footer>
    );
}
