import Header from "./Header"
import Hero from "./Hero"

function Head() {
  return (
    <div className='bg-[url("/bg-img.webp")] min-h-[48rem] max-h-[48rem] bg-cover bg-center bg-no-repeat'>
      <div className="w-full px-32 py-8 pt-7 pb-0">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Head