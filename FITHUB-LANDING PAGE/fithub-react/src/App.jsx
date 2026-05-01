import { useState, useEffect } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      if (
        isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-gray-100 font-[sans-serif]">
      {/* Header Section Starts with Navbar and Hero Sections */}
      <header
        style={{
          backgroundImage: 'url(/assets/bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Navbar Start */}
        <nav className="flex justify-between items-center py-4 bg-stone-900 mb-2 px-4 sm:px-6 lg:px-8">
          <div className="ml-4 lg:ml-6">
            <img
              className="h-8 lg:h-10"
              src="/assets/gym.jpg"
              alt="ZoneFlex Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center font-semibold text-lg text-white">
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              Home
            </a>
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              Services
            </a>
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              About
            </a>
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              Schedule
            </a>
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              Programs
            </a>
            <a
              className="px-4 hover:border-b-2 border-blue-400 transition-all"
              href="#"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <div className="search-icon text-white mr-4">
              <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            <button
              className="mobile-menu-btn text-white mr-4 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex justify-center items-center mr-5">
            <input
              className="max-w-md p-1 pl-2 mr-0 border-2 border-blue-600 rounded-s-lg"
              type="text"
              placeholder="Search"
            />
            <button className="border-2 p-1 rounded-e-lg border-blue-600 bg-orange-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu bg-stone-800 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2">
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              Home
            </a>
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              Services
            </a>
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              About
            </a>
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              Schedule
            </a>
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              Programs
            </a>
            <a
              className="block text-white py-2 hover:bg-stone-700 px-4 rounded transition-all"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="px-4 py-2 border-t border-stone-700">
            <div className="flex">
              <input
                className="flex-grow p-1 pl-2 mr-0 border-2 border-blue-600 rounded-s-lg"
                type="text"
                placeholder="Search"
              />
              <button className="border-2 p-1 rounded-e-lg border-blue-600 bg-orange-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Nav Done */}

        {/* Hero Section */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-9">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center px-4 sm:px-8 py-6 sm:py-10">
            <div>
              <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                We Are
                <span className="text-blue-600">
                  {' '}
                  The Best Alphas to Lift Out{' '}
                </span>
                <span className="text-stone-500">Powerful Weight</span>
              </h1>

              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center text-sm font-medium rounded-lg border border-transparent bg-green-500 text-black hover:bg-gray-500 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transition-all"
                  href="#"
                >
                  Contact Us
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}

              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-all"
                >
                  <i className="fa-brands fa-2x fa-square-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-red-500 transition-all"
                >
                  <i className="fa-brands fa-2x fa-square-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-pink-500 transition-all"
                >
                  <i className="fa-brands fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
            {/* End Col */}
          </div>
        </div>
        {/* Hero Section Ends */}
      </header>
      {/* Header Section Ends  */}

      {/* Features 1 Start */}
      <div className="max-w-[95rem] rounded-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-8 xl:gap-16 bg-gray-300 p-6 rounded-lg">
          <div className="mb-6 md:mb-0">
            <img
              className="w-full rounded-xl"
              src="https://i.pinimg.com/564x/00/cd/8e/00cd8eabf948d596af53e10361a99928.jpg"
              alt="Features Image"
            />
          </div>
          {/* End Col */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  Transforming the way you feel and the energy you emit.
                </h2>
                <p className="text-slate-600">
                  ZoneFlex Gym in India is a well-equipped gym offering a
                  variety of workout options to cater to different fitness needs
                  and focuses on showcasing the different membership and class
                  options available, accepting online bookings through the site.
                </p>
              </div>
              {/* End Title */}

              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-green-600">
                      <span className="font-bold">Get Personalized</span>{' '}
                      Training
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-sky-600">
                      Find out the Best
                      <span className="font-bold"> Workout routine</span>
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-red-500">
                      Build the body aspire to have
                    </span>
                  </div>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* Features Done */}

      <img className="py-1" src="/assets/bg-2.jpg" alt="" />
      {/* Features 2 */}
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        <div className="min-h-[35vh] md:min-h-[95vh] bg-[url('https://i.pinimg.com/736x/ca/7e/69/ca7e698a1cc7ae49086694030c19ac41.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl">
          <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            {/* Card */}
            <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7">
              <div className="hidden md:block">
                <h3 className="text-lg font-bold text-gray-800 sm:text-2xl">
                  How does ZoneFlex work?
                </h3>
                <p className="mt-2 text-gray-800">Read more about Flex.</p>
              </div>

              <div className="md:mt-16">
                <a
                  className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition-all"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch our Video
                </a>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
      {/* End Features */}

      {/* Masonry Cards */}
      <div className="max-w-9xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            {/* Card */}
            <a
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.pinimg.com/564x/76/85/2b/76852b0417c70859dbf82135f0ac1fdb.jpg"
                  alt="Masonry Cards Image"
                />
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            {/* Card */}
            <a
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.pinimg.com/originals/38/80/8a/38808a240b11117eface344980cc230a.jpg"
                  alt="Masonry Cards Image"
                />
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 md:col-span-4">
            {/* Card */}
            <a
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.pinimg.com/564x/cf/23/79/cf23795395c75335668b912d3187a3f6.jpg"
                  alt="Masonry Cards Image"
                />
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.pinimg.com/736x/83/0f/3e/830f3e0ba30f47a47d04d5d3a577a82d.jpg"
                  alt="Masonry Cards Image"
                />
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://i.pinimg.com/564x/0f/8a/78/0f8a7847f053d3b12aa7a5f4e63a285f.jpg"
                  alt="Masonry Cards Image"
                />
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Masonry Cards */}
    </div>
  );
}

export default App;
