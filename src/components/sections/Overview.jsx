import Section from "@/components/Section"

export default function Overview() {
  const stats = [
    {
      value: "36",
      suffix: "+",
      label: "Project Completed",
    },
    {
      value: "80",
      suffix: "+",
      label: "Happy Clients",
    },
    {
      value: "203",
      suffix: "+",
      label: "Connect with Students",
    },
    {
      value: "16",
      suffix: "+",
      label: "Award Teachers",
    },
  ]

  return (
    <Section id="overview" className="bg-slate-100 py-20 px-4 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 group">
            <div className="flex items-baseline">
              <span className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tighter transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </span>
              <span className="text-2xl md:text-3xl font-bold text-slate-400 ml-1">
                {stat.suffix}
              </span>
            </div>
            <p className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wide text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
