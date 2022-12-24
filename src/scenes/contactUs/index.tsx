import { useState, useRef, ChangeEvent } from 'react';
import {SelectedPage} from '@/utils/types';
import { motion } from 'framer-motion';
import Heading_2 from '@/components/Heading_2';
import {FormEvent} from 'react';
import formGraphic from '../../assets/ContactUsPageGraphic.png'; 

type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

type FormTypes = {
  name: string; 
  email: string; 
  message: string; 
}

const ContactUs = ({setSelectedPage}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  
  
  const inputStyles = 'px-8 py-2 rounded-lg placeholder:text-sm placeholder:uppercase bg-primary-300 placeholder:text-white outline-none text-white'
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log({
      name: nameRef.current!.value, 
      email: emailRef.current!.value, 
      message: messageRef.current!.value
    })
    
    nameRef.current!.value = ''
    emailRef.current!.value = ''
    messageRef.current!.value = '' 
  }
  
 

  return (
    <section
      id={SelectedPage.ContactUs}
      className='bg-white py-32'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className='section-container flex flex-col md:flex-row gap-8 justify-between'
      >
        <div className="basis-1/2 mr-auto">
          {/* Header */}
          <motion.div
            className='basis-1/2'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50}, 
              visible: {opacity: 1, x: 0}
            }}
          >
            <Heading_2>
              <span className='text-primary-500'>join now</span>
              {' '}to get in shape
            </Heading_2>
            <p className="my-5">
              Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
              sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
              adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </motion.div>
          
          {/* Form */}
          <div className='flex flex-col gap-8 md:flex-row'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity: 0, y: 50}, 
                visible: {opacity: 1, y: 0}
              }}
            >
              <form
                onSubmit={(e) => handleSubmit(e)}
                className='flex-col flex gap-4'
              >
                <input
                  type="text"
                  name='name'
                  id='name'
                  placeholder='name'
                  className={`${inputStyles}`}
                  ref={nameRef}
                />
                
                <input
                  type="email"
                  name='email'
                  id='email'
                  placeholder='email'
                  className={`${inputStyles}`}
                  ref={emailRef}
                />
                
                <textarea
                  name="message"
                  id="message"
                  cols={40}
                  rows={10}
                  placeholder='Your message'
                  className={`${inputStyles}`}
                  ref={messageRef}
                />
                <button
                  type='submit'
                  className='
                    self-start rounded-md bg-secondary-500 text-white px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition-all duration-500'
                >
                  submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        <figure className='basis-1/2 md:flex items-center justify-end'>
          <img src={formGraphic} alt='' className='object-cover w-full'/>
        </figure>
        
      </motion.div>
    </section>
  )
}

export default ContactUs
