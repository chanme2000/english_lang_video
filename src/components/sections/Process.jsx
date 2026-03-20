import Section from "@/components/Section"
import { Card, CardContent } from "@/components/ui/card"
import teachersImg from "@/assets/images/teachers.png"

export default function Process() {
  const processes = [
    {
      title: "Discover",
      description: "학생들이 어떤 방법으로 학습하는지 관찰하여, 본인이 가지고 있는 장점을 발견해 수업에 응용하는 방법을 선생님과 훈련하여 발전해 나가도록 공부 합니다.",
    },
    {
      title: "Define",
      description: "알듯 말듯한 느낌으로 물 흐르듯 넘어가는 것이 아닌 다양한 플랫폼을 통해 학생이 뚜렷이 이해하고 확신을 가질 수 있도록 옆에서 지도 합니다.",
    },
    {
      title: "Design",
      description: "한장의 설계도에 하나 하나 그려나가면서 완성하듯이 아이들의 생각을 완성된 표현으로 나갈수 있도록 선생님이 옆에서 지도합니다.",
    },
    {
      title: "Develop",
      description: "표준화된 레벨시스템을 통해 학생의 학습능력을 측정하고 세계적인 프로그램으로 단계적으로 발전 시키도록 합니다.",
    },
    {
      title: "Deploy",
      description: "대화에서 가장 잘 어울리는 표현을 말할수 있도록 선생님과 상황에 딱 맞는 표현을 넣는 연습을 합니다.",
    },
    {
      title: "Deliver",
      description: "커뮤니케이팅에서 듣는 상대에게 본인의 표현을 얼마큼 정확히 전달하는 것이 포인트입니다. 효과적인 의사 전달법을 훈련합니다.",
    },
  ]

  const teachers = [
    {
      name: "Cody Fisher",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Bessie Cooper",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Arlene McCoy",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Jacob Jones",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Jenny Wilson",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Robert Fox",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Esther Howard",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
    {
      name: "Guy Hawkins",
      role: "The unseen of spending three years at Pixelgrade",
      image: teachersImg,
    },
  ]

  return (
    <Section id="process" className="bg-white">
      <div className="space-y-24">
        {/* 6-D Process */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our 6-D Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {processes.map((p, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Teachers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-100 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover bg-slate-100"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-800">{teacher.name}</h4>
                  <p className="text-sm text-slate-500 max-w-[200px] mx-auto">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
