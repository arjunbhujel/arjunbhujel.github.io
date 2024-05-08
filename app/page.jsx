import Image from "next/image"
import "@/styles/homePage.css"

export default function HomePage() {
  return (
    <main className="home">
      <h1 className="intro_heading">hey, I&apos;m arjun bhujel 👋</h1>
      <p className="intro_description">
        Hey, I&apos;m a Student of Economics in Tribhuvan University. I like to
        spill my thought through writing in topics like Economics, History,
        Computer and Ideas that is in my mind.
      </p>
      <p className="intro_description">
        I am a Quasi-UI/UX Designer, Quasi-Developer and Econ Enthausiasts. I
        believe that Economics is the multi disciplinary subject that connects
        the dot between History, Politics, Math, Computer and Finance.
      </p>
      <div className="photo_grid">Image</div>
    </main>
  )
}
