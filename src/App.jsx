import Icon from ".";

export default function App() {

  return (
    <>
      <header>
      <nav className="navbar bg-[#2e1608] p-2 flex justify-between items-center">
        <div className="Logo mx-4">
          <a href="#home">
            <img src="Logo.png" alt="Logo" className="w-14" />
          </a>
        </div>
        <div
          className="nav-links text-2xl text-white hidden md:block"
          id="nav-links"
        >
          <a className="mx-8" href="#home">Home</a>
          <a className="mx-8" href="#shop">Shop</a>
          <a className="mx-8" href="#reviews">Reviews</a>
          <a className="mx-8" href="#info">About</a>
          <a className="mx-8" href="#contact">Contact Us</a>
        </div>
        <Icon />
      </nav>
    </header>

    {/* <!-- NAVBAR END -->

    <!-- HOME SECTION --> */}
    <section
      className="home w-screen h-screen bg-cover bg-[65%] relative md:bg-top"
      id="home"
    >
      <div
        className="home-content absolute top-[15%] left-8 text-center md:left-[10%] md:top-[20%]"
      >
        <h1 className="text-white text-[1.5rem] md:text-[4rem]">
          Breath in the difference.
        </h1>
        <p className="text-white text-[1rem] md:text-[1.6rem]">
          Breath easy, sleep easy...
        </p>
      </div>
      <button
        className="buy-butt text-[#c87171] text-[1rem] bg-[#110b09] p-3 rounded-full absolute top-[28%] left-[28%] md:top-[60%] md:left-[10%] md:text-[2rem] border-[#c87171] border-2"
      >
        <i className="fa fa-shopping-cart"></i> BUY NOW
      </button>
    </section>
    {/* <!-- HOME END -->

    <!-- SHOP --> */}
    <section
      className="shop w-screen md:h-screen p-4 bg-[#1c120f] text-center text-white"
      id="shop"
    >
      <div className="shop-head md:h-[20%] flex items-center justify-center">
        <h1 className="text-5xl font-thin md:text-7xl overflow-hidden">
          Shop Bestsellers
        </h1>
      </div>

      <div
        className="shop-items grid items-center md:flex md:justify-around h-[80%]"
      >
        <div
          className="shop-item my-4 flex flex-col md:items-center md:h-[90%] md:justify-around md:w-[30%]"
        >
          <img
            className="object-contain rounded-lg md:w-[70%]"
            src="sample3.jpg"
            alt=""
          />
          <h2 className="text-[2rem]">Essence humidifier</h2>
          <p className="text-xl">Starting at $39</p>
        </div>
        <div
          className="shop-item my-4 flex flex-col md:items-center md:h-[90%] md:justify-around md:w-[30%]"
        >
          <img
            className="object-contain rounded-lg md:w-[70%]"
            src="sample2.jpg"
            alt=""
          />
          <h2 className="text-[2rem]">Steam Diffuser</h2>
          <p className="text-xl">Starting at $39</p>
        </div>
        <div
          className="shop-item my-4 flex flex-col md:items-center md:h-[90%] md:justify-around md:w-[30%]"
        >
          <img
            className="object-contain rounded-lg md:w-[70%]"
            src="sample1.jpg"
            alt=""
          />
          <h2 className="text-[2rem]">Essence humidifier</h2>
          <p className="text-xl">Starting at $39</p>
        </div>
      </div>
    </section>
    {/* <!-- SHOP END -->

    <!-- REVIEWS --> */}

    <section
      className="reviews w-screen md:h-fit bg-[#1c120f] p-4 md:flex md:flex-col md:items-center"
      id="reviews"
    >
      <div
        className="review-head text-white flex justify-center items-center md:h-[40%]"
      >
        <h1 className="text-3xl md:text-5xl">Our Customers love our Products</h1>
      </div>
      <div
        className="reviews flex flex-col items-center justify-around md:flex-row md:w-[60%]"
      >
        <div className="review bg-[#371f11] rounded-md w-[50%] p-4 my-4 md:mx-4">
          <div className="name flex items-center justify-around my-4">
            <img className="rounded-full w-20" src="r1.jpg" alt="" />
            <h2 className="text-white text-xl font-bold">Jonas</h2>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-white">Lorem ipsum, hdb bdjs jann</p>
        </div>
        <div className="review bg-[#b49583] rounded-md w-[50%] p-4 my-4 md:mx-8">
          <div className="name flex items-center justify-around my-4">
            <img className="rounded-full w-20" src="r2.jpg" alt="" />
            <h2 className="text-[#371f11] text-xl font-bold">Jonas</h2>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-[#371f11] font-bold">Lorem ipsum, hdb bdjs jann</p>
        </div>
        <div className="review bg-[#371f11] rounded-md w-[50%] p-4 my-4 md:mx-4">
          <div className="name flex items-center justify-around my-4">
            <img className="rounded-full w-20" src="r3.jpg" alt="" />
            <h2 className="text-white text-xl font-bold">Jonas</h2>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-white">Lorem ipsum, hdb bdjs jann</p>
        </div>
      </div>
    </section>

    {/* <!-- REVIEWS END -->

    <!-- INFORMATION --> */}
    <section
      className="info h-fit w-screen max-w-full md:h-screen bg-[#1c120f] p-4 text-white md:flex md:flex-col md:items-center md:justify-evenly"
      id="info"
    >
      <div className="info-head m-2">
        <h1 className="text-3xl text-center md:text-5xl">
          Embrace Wellness in Your Own Space
        </h1>
      </div>
      <div
        className="info-cards flex flex-col justify-between my-2 items-center text-center p-4 md:flex-row md:w-[90%]"
      >
        <div className="info-card md:w-[25%] flex flex-col items-center">
          <img className="md:w-[70%]" src="info1.png" alt="" />
          <h1 className="text-xl font-bold mb-4 md:text-2xl">
            Effortless benefits
          </h1>
          <p className="w-[80%]">
            Embrace your spiritual self with a calm and relaxed mind.
          </p>
        </div>
        <div
          className="info-card md:w-[25%] flex flex-col items-center mt-12 md:mt-4"
        >
          <img className="md:w-[70%]" src="info2.png" alt="" />
          <h1 className="text-xl font-bold mb-4">Dermatologist recommended</h1>
          <p className="w-[80%]">The science behind the experts choice.</p>
        </div>
        <div className="info-card md:w-[25%] flex flex-col items-center">
          <img className="md:w-[70%]" src="info3.png" alt="" />
          <h1 className="text-xl font-bold mb-4 md:text-2xl">
            Natural and intuitive
          </h1>
          <p className="w-[80%]">Easy to use and user friendly.</p>
        </div>
      </div>
    </section>

    {/* <!-- INFO END --> */}

    <footer
      className="footer w-screen h-[70vh] bg-[#110b09] text-white p-4 flex flex-col items-center justify-around md:flex-row md:h-[35vh]"
      id="contact"
    >
      <div className="content flex flex-col items-center">
        <h1 className="text-4xl text-center md:text-5xl">A dose of wellness for your day</h1>
        <div className="mail flex flex-row items-center justify-around">
            <i className="fa fa-envelope-o fa-2x m-2" aria-hidden="true"></i>
          <input
            className="mail rounded-md p-2 my-4 bg-[#371f11] text-white"
            type="email"
            name="mail"
            id="mail-box"
            placeholder="YOUR EMAIL"
          />
          <button type="submit" className="submit bg-[#371f11] p-2 rounded-md mx-2">
            Submit
          </button>
        </div>
        <div className="socials flex items-center justify-evenly w-[70%]">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-pinterest fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="contact text-center flex flex-col items-center justify-evenly">
        <div className="cont">
            <h1 className="text-3xl md:text-4xl">Contact Us</h1>
            <p>T- 4638375098</p>
            <p>E- humidifiers@gmail.com</p>
        </div>
        <div className="address my-4 ">
            <h1 className="text-3xl md:text-4xl">Address</h1>
            <p>73 street, Park Avenue, 22nd floor New York</p>
        </div>
      </div>
    </footer>
    </>
  )
}