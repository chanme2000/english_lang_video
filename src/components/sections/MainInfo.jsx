import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import heroImg from "@/assets/images/hero_learning_context.png"

export default function MainInfo() {
  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Headline Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            <span className="text-[#F59E0B]">레벨테스트에서 수업까지,</span><br />
            영어 학습의 기준을 만듭니다.
          </h1>
        </div>
      </section>

      {/* 2. Hero Image Section - Full Width */}
      <section className="w-full">
        <div className="relative w-full aspect-[21/7] md:aspect-[21/6] overflow-hidden">
          <img
            src={heroImg}
            alt="Learning Group"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Description & CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Summary & Button */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.4]">
                본 레벨테스트는<br />
                평가를 위한 시험이 아니라,<br />
                <span className="text-[#F59E0B]">가장 효율적인 학습 경로를<br />
                  찾기 위한 첫 단계</span>입니다.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm px-10 py-7 text-lg text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-all flex items-center gap-2 group"
              >
                무료 레벨테스트 신청하기 <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right: Detailed Info */}
            <div className="text-slate-500 text-[17px] leading-[1.8] space-y-6 pt-2">
              <p>테스트 결과를 바탕으로 나에게 맞는 수업 안내를 받아볼 수 있습니다.</p>
              <p>테스트 진행을 위해 간단한 회원가입 또는 로그인이 필요합니다.</p>
              <p>회원가입은 레벨테스트 결과와 수업 안내 제공을 위한 절차이며, 가입만으로 비용이나 수강 의무는 발생하지 않습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid md:grid-cols-2 border-t border-b border-slate-200 ml-auto max-w-[600px]">
            {/* STRENGTH Cell */}
            <div className="p-12 md:p-16 border-b md:border-r border-slate-200 flex flex-col justify-start">
              <div className="w-10 h-[2px] bg-slate-200 mb-8" />
              <span className="text-sm font-bold text-slate-400 tracking-[0.2em] mb-4">STRENGTH</span>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">강점 소개</h2>
            </div>

            {/* Cell 1 */}
            <div className="p-12 md:p-16 border-b border-slate-200">
              <div className="w-10 h-[2px] bg-slate-200 mb-8" />
              <p className="text-2xl font-medium text-slate-700 leading-snug">
                레벨테스트<br />
                결과 기반 1:1<br />
                맞춤 수업
              </p>
            </div>

            {/* Cell 2 */}
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="w-10 h-[2px] bg-slate-200 mb-8" />
              <p className="text-2xl font-medium text-slate-700 leading-snug">
                시간·장소<br />
                제약 없는<br />
                화상 수업
              </p>
            </div>

            {/* Cell 3 */}
            <div className="p-12 md:p-16">
              <div className="w-10 h-[2px] bg-slate-200 mb-8" />
              <p className="text-2xl font-medium text-slate-700 leading-snug">
                테스트 후<br />
                바로 수강<br />
                연결 가능
              </p>
            </div>
          </div>

          {/* Bottom Footer Text */}
          <div className="mt-16 ml-auto max-w-[600px] text-left text-slate-500 text-sm md:text-[15px] space-y-2">
            <p className="font-medium">현재는 레벨테스트 중심으로 운영 중이며,</p>
            <p>검증된 커리큘럼·수강 후기·학습 데이터는 순차적으로 공개됩니다.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
