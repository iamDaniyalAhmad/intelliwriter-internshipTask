import React from 'react'
import Hero from './Hero'
import Heading from './Heading'
import Steps from './Steps'
import Tools from './Tools'
import FAQs from './FAQs'
import Start from './Start'

const AIVoice = () => {
    const heroContent = {
        title : 'IntelliWriter Free Platform For AI Voice Generator',
        desc : "Explore your creativity through digital art exploration. Immerse yourself in a realm of creation and dynamic prompts that nurture artistic expression. Whether you're a Voice over artist, social media marketer, or seeking to infuse creativity into your projects, our AI-powered tool empowers you to craft captivating voice within seconds.", 
        btntext : "Try Intelliwriter AI Voice Generator For Free !"
    }
    const headingContent = {
        title : "HOW CONTENT",
        title2 : "GENERATES",
        desc : "Embark on an unstoppable journey of creativity with our AI Voice Generator – where your text come to life with captivating AI Voice in just a few clicks!",
    }
    const headingContent2 = {
        title : "DISCOVER MORE",
        title2 : "AI TOOLS",
        desc : "Unlock the power of AI with our suite of innovative tools, designed to simplify your tasks and elevate your productivity to new heights!"
    }
    const headingContent3 = {
        title : "FREQUENTLY ASKED",
        title2 : "QUESTIONS",
        desc : "We're dedicated to assisting individuals interested in generating AI-driven content and images."
    }
    const obj = [
        {
            img : 'images/voiceStep1.webp',
            title : 'Step#1',
            desc : 'Access Intelliwriter AI Voice Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.'
        },
        {
            img : 'images/voiceStep2.webp',
            title : 'Step#2',
            desc : "Enter Prompt to Search: Within the AI Voice Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art."
        },
        {
            img : 'images/voiceStep3.webp',
            title : 'Step#3',
            desc : 'Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.'
        },
        {
            img : 'images/voiceStep4.webp',
            title : 'Step#4',
            desc : 'Get ready to be amazed – your Voice is ready.'
        },
    ]
    const Aitools =[
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path></svg>,
            title : "Blog Content",
            bgColor : "#dcfce7",
            color:"#16a34a"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>,
            title : "Social Media",
            bgColor : "#fef9c3",
            color:"#facc15"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>,
            title : "Marketing",
            bgColor : "#dbeafe",
            color:"#2563eb"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"></path></svg>,
            title : "Website",
            bgColor : "#fee2e2",
            color:"#dc2626"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>,
            title : "Course Builder",
            bgColor : "#f3e8ff",
            color:"#9333ea"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg> ,
            title : "Image Generator",
            bgColor : "rgb(128, 252, 240)",
            color:"rgb(78, 116, 113)"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>,
            title : "Chat",
            bgColor : "#e58409",
            color:"#e2bf93"
        },
        
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path><path d="M11.25 5h1.5v10h-1.5zM8.5 7H10v6H8.5zM6 9h1.5v2H6zM14 7h1.5v6H14zM16.5 9H18v2h-1.5z"></path></svg>,
            title : "Speech to Text",
            bgColor : "#ff8a65",
            color:"#ff5722"
        },
        {
            source : <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 15h16"></path><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 20h12"></path></svg>,
            title : "Image Caption Generator",
            bgColor : "#3b9409",
            color:"#a5dc86"
        },
        {
            source : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>,
            title : "Youtube Content Generator",
            bgColor : "#ff0000",
            color:"#ffffff"
        },
    ]

    const question = [
        {
          index: 1,
          q:"How Can AI Voice Generator Enhance Content Creation?",
          a: "AI Voice Generator revolutionizes content creation by providing natural and expressive voiceovers. It saves time and resources, enabling creators to generate high-quality audio content for videos, podcasts, and more. Elevate your content creation process with AI-generated voices."
        },
        {
          index: 2,
          q: "Is AI Voice Generator Suitable for Professional Narration?",
          a: "Absolutely! Our AI Voice Generator is designed for professional narration purposes. It offers a range of voices suitable for various industries and content types. Achieve polished and professional narration without the need for manual recording or hiring voice actors.",
        },
        {
          index: 3,
          q : "Can I Customize the Tone and Style of AI-Generated Voices?",
          a : "Yes, customization is key! Our AI Voice Generator allows you to tailor the tone, style, and even accent of the generated voices. Personalize your audio content to align with your brand or project requirements, ensuring a unique and engaging listening experience."
        },
        {
            index:4,
            q: "How Does AI Voice Generator Ensure Voice Quality and Realism?",
            a: "Ensuring realistic and high-quality voices is our priority. The AI Voice Generator utilizes advanced algorithms to produce natural-sounding voices with clarity and authenticity. Experience lifelike voiceovers that captivate your audience and enhance the overall audio experience.",
        },
        {
            index : 5,
            q: "Can AI Voice Generator Handle Different Languages and Accents?",
            a: "Certainly! AI Voice Generator supports a variety of languages and accents, providing versatility for global content creation. Whether you need voices for English, Spanish, Mandarin, or regional accents, our tool delivers accurate and expressive voice generation across languages."
        }
        
      ];
  return (
    <>
    <div className='my-16'>
    <Hero heroContent={heroContent}/>
    <Heading headingContent={headingContent}/>
    <Steps obj={obj}/>
    <Heading headingContent={headingContent2}/>
    <Tools Aitools={Aitools}/>
    <Heading headingContent={headingContent3}/>
    <FAQs question={question}/>
    <Start title="Start generating your AI Voice now for free"/>
    </div>
    </>
  )
}

export default AIVoice
