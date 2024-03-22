import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container' class='flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent'>
        <img src="/nx_wave_hero.png" alt="card_asset" class="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6 float-right"></img>
        <div class = "z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 class ="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
                <span>
                    <strong>NX Wave.</strong>
                    The next-gen credit card for those who love rewards.
                </span>
            </h1>
        <div class="mt-4 md:mt-0">
            <strong><p class="font-medium text-sm md:text-base md:mb-9">1% Cashback + 5x Rewards + Zero Forex Markup</p></strong>
        
        </div>
        <div class="hidden md:block">
            <div class="flex justify-between items-center block max-w-[94vw]"></div>
            <div class="flex flex-col">
                <form className='form-phone'>
                    <div class="flex bg-black p-1 pl-2 rounded-xl justify-between">
                        <div class="flex items-center">
                            <input class="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44" placeholder="Enter Phone Number" value=""/>
                                <span class="w-6 flex items-center justify-end h-full"></span>
                        </div>
                    <button type="submit" class="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed">
                        <span>Apply Now</span>
                    </button>
                    </div>
                </form>
            <div class="consent flex items-center py-4 px-2 max-w-xs">
                <input type="checkbox" checked="" id="consent-msg"/>
                    <label for="consent-msg" class="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
            </div>
            </div>
        </div>

        </div>
        

      
    </div>
  );
}

export default HeroSection;
