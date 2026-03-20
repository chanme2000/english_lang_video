import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="font-bold text-2xl tracking-tight text-slate-800">DKVIDEO</div>
        
        <nav className="hidden md:flex gap-10 text-[15px] font-medium text-slate-600">
          <a href="#level-test" className="hover:text-primary transition-colors">레벨테스트</a>
          <a href="#process" className="hover:text-primary transition-colors">수업안내</a>
          <a href="#news" className="hover:text-primary transition-colors">이용안내</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors">
            로그인
          </Button>
          <Button size="sm" className="text-[15px] font-medium shadow-sm">
            회원가입
          </Button>
        </div>
      </div>
    </header>
  )
}
