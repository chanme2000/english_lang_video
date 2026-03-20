import Section from "@/components/Section"
import { Separator } from "@/components/ui/separator"

export default function News() {
  const newsItems = [
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
  ]

  const qnaItems = [
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
    "이 사이트에서 수업이나 교육을 직접 진행하나요?",
  ]

  return (
    <Section id="news" className="bg-slate-100">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* 공지사항 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">공지사항</h2>
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <div key={index} className="group">
                <div className="py-4 flex justify-between items-center cursor-pointer transition-colors hover:text-primary">
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item}
                  </p>
                </div>
                <Separator className="bg-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Q&A */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Q&A</h2>
          <div className="space-y-0">
            {qnaItems.map((item, index) => (
              <div key={index} className="group">
                <div className="py-4 flex justify-between items-center cursor-pointer transition-colors hover:text-primary">
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item}
                  </p>
                </div>
                <Separator className="bg-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
