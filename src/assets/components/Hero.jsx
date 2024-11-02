import HeroImage from '../images/dokter-box.png'

const Hero = () => {
  return (
    <section className="hero--section container mx-auto px-6 py-16 lg:py-40 mb-5">
      <div className="hero text-center justify-center lg:pt-4 md:pt-12 pt-24">
        <div className="box text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Solution for Managing Respiratory Medication
          </h1>

          <div className="relative flex justify-center">
            <div className="w-full flex justify-center px-4">
              <img
                src={HeroImage}
                alt="gambar-dokter"
                className="md:w-[500px] w-[90%] max-w-full h-auto relative"
              />
            </div>
          </div>

          <p className="max-w-4xl mx-auto mt-10 text-xl lg:text-2xl text-gray-600">
            We are here to provide you with the best solution for managing your respiratory medication.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero
