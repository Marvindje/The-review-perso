import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';
import galaxyBackground from '../assets/thepage.jpeg';

const InputField = ({ register, name, type, placeholder, icon: Icon, errors }) => (
  <div className="mb-4 flex items-center input-field-container">
    <Icon className="text-blue-500 mr-2 icon-style" />
    <input
      {...register(name, { required: true })}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input-style ${errors[name] ? 'border-red-500' : ''}`}
      type={type}
      placeholder={placeholder}
    />
    {errors[name] && <p className="text-red-500">This field is required</p>}
  </div>
);

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-cover bg-center" style={{ backgroundImage: `url(${galaxyBackground})` }}>
      <motion.h1
        className="w-3/4 mx-auto text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md"
        style={{ fontFamily: 'Georgia, serif' }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 flex flex-col items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {submitted ? (
          <p className="text-green-500">Your message has been sent!</p>
        ) : (
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <InputField register={register} name="name" type="text" placeholder="Your name" icon={FaUser} errors={errors} />
            <InputField register={register} name="email" type="email" placeholder="Your email" icon={FaEnvelope} errors={errors} />
            <div className="mb-4 flex items-start">
              <FaPen className="text-blue-500 mr-2 mt-2" />
              <textarea
                {...register('message', { required: true })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message"
              />
              {errors.message && <p className="text-red-500">This field is required</p>}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
