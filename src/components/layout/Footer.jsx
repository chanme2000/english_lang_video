export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-6">
          <div className="flex gap-4 text-sm font-medium text-white/90">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors font-bold">개인정보처리방침</a>
          </div>
          
          <div className="space-y-1 text-sm leading-relaxed">
            <p>본 사이트는 유학 및 어학 서비스 안내를 위한 정보 제공 페이지입니다.</p>
            <p>영어 레벨테스트 및 수업 관련 서비스는 제휴된 어학원 사이트를 통해 제공되며,</p>
            <p>개인정보 수집 및 서비스 운영에 대한 책임은 각 제공 기관에 있습니다.</p>
          </div>
          
          <div className="pt-4 text-sm">
            © 2026 DKorea. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
