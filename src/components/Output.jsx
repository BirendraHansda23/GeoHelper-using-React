
export function Output({ data }) {
  const rows = [
    { title: "Name", value: data.Name },
    { title: "Capital", value: data.Capital },
    { title: "Region", value: data.Region },
    { title: "Area (sq km)", value: data.Area },
    { title: "Population", value: data.Population },
    { title: "Timezone", value: data.Timezone },
    { title: "Languages", value: data.Languages },
    { title: "Currencies", value: data.Currencies },
  ];

  return (
    <section
      className="sticky bg-[#f9f9f3] m-0 p-0 font-[Roboto] flex flex-col"
    >
      <article className="flex flex-wrap md:flex-nowrap p-0">
        {/* Flag Container */}
        <div className="w-full md:w-2/5 h-[50vh] md:h-[60vh] border-2 border-black m-0 flex flex-col justify-center items-center">
          <div className="p-3 border border-black">
            <img
              src={data.flag.src}
              alt={data.flag.alt}
              className="h-[120px] w-auto object-contain"
            />
          </div>
          <h2
            className="font-bold text-2xl text-center mt-2 text-gray-800"
          >
            {data.Name}
          </h2>
        </div>

        {/* Image Container */}
        <div
          className="w-full md:w-3/5 h-[50vh] md:h-[60vh] p-[30px] border-2 border-black md:border-l-0 border-t-0 md:border-t-2 flex justify-center items-center"
        >
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="min-w-[250px] w-[400px] md:w-[550px] h-auto rounded-lg object-cover"
          />
        </div>
      </article>


      <article
        className="flex flex-col gap-3 py-3 border-x-2 text-lg"
      >
        {rows.map((row, idx) => (
          <div key={idx} className="row flex gap-[18px] py-2">
            <div
              className="title w-1/2 md:w-2/5 text-black font-semibold text-right p-3 
                         bg-gradient-to-l from-orange-50 to-[#f9f9f3]"
            >
              {row.title}:
            </div>
            <div
              className="data w-1/2 md:w-3/5 text-black font-normal text-left p-3 
                         bg-gradient-to-r from-orange-50 to-[#f9f9f3]"
            >
              {row.value}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
