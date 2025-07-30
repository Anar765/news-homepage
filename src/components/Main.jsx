import ImageWebMobile from '../assets/images/image-web-3-mobile.jpg';
import ImageWebDesktop from '../assets/images/image-web-3-desktop.jpg';

import Gaming from '../assets/images/image-gaming-growth.jpg';
import Retro from '../assets/images/image-retro-pcs.jpg';
import Laptops from '../assets/images/image-top-laptops.jpg';

const Main = () => {
  return (
    <main className='grid gap-16 md:grid-cols-3 md:grid-row-3 md:gap-6'>
      <div className='flex flex-col space-y-6 md:row-span-2 md:col-span-2'>
        <picture className='self-center'>
          <source media="(min-width: 768px)" srcset={ImageWebDesktop} />
          <img src={ImageWebMobile} alt="Image web" />
        </picture>

        <div className='space-y-4 flex flex-col lg:flex-row md:space-y-8'>
          <h1 className='text-Very-Dark-Blue font-bold'>The Bright Future of Web 3.0?</h1>
          <div>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

            <button type="button" className='bg-Soft-Red text-Very-Dark-Blue tracking-[0.25rem] font-bold px-6 py-3 mt-8 hover:bg-Very-Dark-Blue hover:text-Off-white'>READ MORE</button>
          </div>
        </div>
      </div>

      <div className='new bg-Very-Dark-Blue p-4 md:row-span-2'>
        <h2 className='text-Soft-Orange font-bold text-4xl mb-8'>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />

        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
        <hr />

        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>

      <div className="cards grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-10 md:col-span-3 md:row-start-3 md:row-end-4 md:flex-row md:mt-8 md:gap-6">
        <div className="card">
          <img src={Retro} alt="Retro PCs" />
          <div className="text">
            <h1>01</h1>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="card">
          <img src={Laptops} alt="Top Laptops" />
          <div className="text">
            <h1>02</h1>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="card">
          <img src={Gaming} alt="the Growth of Gaming" />
          <div className="text">
            <h1>03</h1>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main