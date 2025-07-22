function LinkCard({ heading, links }) {
    return (
        <div>
            <h3 className="mb-[24px] text-2xl text-[#ede0d4] font-semibold">
                {heading}
            </h3>
            <ul>
              {links.map((link, index) => (
                  <li
                    key={index}
                    className="text-white text-sm my-[16px] hover:text-lime-300 transition-colors"
                  >
                    <a 
                      href={link.url} 
                      target={link.url.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
              ))}
            </ul>
        </div>
    );
}

export default LinkCard;
