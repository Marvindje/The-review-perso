// Contact.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPen } from "react-icons/fa";
import galaxyBackground from "../assets/thepage.jpeg";
import Navbar from "../components/NavBar"; // Import du composant Navbar
import Footer from "../components/Footer"; // Import du composant Footer

function InputField({ register, name, type, placeholder, icon: Icon, errors }) {
  const registerProps = register(name, { required: true });
  return (
    <div className="mb-8 flex items-center">
      <Icon className="text-blue-500 mr-2" />
      <input
        name={registerProps.name}
        ref={registerProps.ref}
        onChange={registerProps.onChange}
        onBlur={registerProps.onBlur}
        type={type}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && <p className="text-red-500">This field is required</p>}
    </div>
  );
}


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const messageProps = register("message", { required: true });

  const onSubmit = (data) => {
    console.info(data);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Utilisation du composant Navbar */}
      <div className="flex-grow flex flex-col items-center justify-center min-h-screen py-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${galaxyBackground})` }}>
        <motion.h1
          className="w-3/4 mx-auto text-4xl font-semibold text-white mb-8 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 flex flex-col items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur w-3/4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <p className="text-green-500">Your message has been sent!</p>
          ) : (
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                register={register}
                name="name"
                type="text"
                placeholder="Your name"
                icon={FaUser}
                errors={errors}
              />
              <InputField
                register={register}
                name="email"
                type="email"
                placeholder="Your email"
                icon={FaEnvelope}
                errors={errors}
              />
              <div className="mb-8 flex items-start">
                <FaPen className="text-blue-500 mr-2 mt-2" />
                <textarea
                  name={messageProps.name}
                  ref={messageProps.ref}
                  onChange={messageProps.onChange}
                  onBlur={messageProps.onBlur}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500">This field is required</p>
                )}
              </div>
              <button
                type="submit"
                className="submit-button w-full"
              >
                <div className="button-top">send</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
              </button>
            </form>
          )}
        </motion.div>
      </div>
      <Footer /> {/* Utilisation du composant Footer */}
    </div>
  );
}

InputField.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  errors: PropTypes.shape({}).isRequired,
};
export default Contact;
