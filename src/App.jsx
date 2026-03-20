import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MainInfo from '@/components/sections/MainInfo'
import Overview from '@/components/sections/Overview'
import Process from '@/components/sections/Process'
import News from '@/components/sections/News'
import LevelTest from '@/components/sections/LevelTest'
import ScrollToTop from '@/components/ui/ScrollToTop'
import './styles/main.scss'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <MainInfo />
        <Overview />
        <Process />
        <News />
        <LevelTest />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
