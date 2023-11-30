import { createClient } from "@/prismicio"
import Carousel from "./Carousel"
import Header from "./Header"
import Hero from "./Hero"


async function Head() {

  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <div className='relative min-h-[48rem] max-h-[48rem] bg-cover bg-center bg-no-repeat'>
      <Carousel settings={settings} />
      <div className="w-full px-32 py-8 pt-7 pb-0">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Head