import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function LevelTest() {
  return (
    <Section id="level-test" className="bg-[#3D3535] py-24 md:py-32">
      <div className="flex flex-col items-start space-y-8">
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            레벨테스트는 제휴 어학원 사이트에서 진행되며,
            <br />
            유학이나 캠프 신청 여부와는 무관하게 참고용으로 활용됩니다.
          </p>
        </div>
        
        <Button 
          variant="secondary"
          size="lg" 
          className="rounded-full px-10 py-7 text-lg bg-white text-[#3D3535] hover:bg-white/90 transition-all flex items-center gap-2 group border-none shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          무료 레벨테스트 신청하기 
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  )
}
