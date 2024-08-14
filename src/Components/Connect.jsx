import React, { useState } from 'react';
import fb from '../assets/fb.png';
import ig from '../assets/instagram.png';
import tx from '../assets/twitter.png';
import gmail from '../assets/gmail.png';
import call from '../assets/call.png';
import home from '../assets/address.png';
import axios from 'axios';

function Connect() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("access_key", "9c411a96-70fb-4f8e-9720-1caa4cf812b9");
        formData.append("name", form.name);
        formData.append("address", form.address);
        formData.append("email", form.email);
        formData.append("feedback", form.feedback);

        try {
            const response = await axios.post("https://api.web3forms.com/submit", formData);
            const data = response.data;
            if (data.success) {
                console.log("Form Submitted Successfully");
                setForm({
                    name: "",
                    address: "",
                    email: "",
                    feedback: ""
                });
            } else {
                console.log("Error", data);
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    return (
        <div className="bg-white py-4">
            <div className="container mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="bg-white rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">Get in Touch</h2>

                    
                    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <img src={home} alt="Address" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <p className="text-gray-600 text-base sm:text-lg font-semibold">
                            Factory Office: Laxmanpatti Gyanpur, Bhadohi, UP India (221304)
                            <br />
                            Branch Office: 221, 2nd Floor, Powai Plaza, Hiranandani Powai, Mumbai-400076
                        </p>
                    </div>

                    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <img src={call} alt="Phone" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <p className="text-gray-600 text-base sm:text-lg font-semibold">
                            +91 9172737408 | +91 7977143488
                        </p>
                    </div>

                    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <img src={gmail} alt="Email" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <p className="text-gray-600 text-base sm:text-lg font-semibold">
                            inshacarpetsandrugs@gmail.com
                            <br />
                            parvej.ahmad51@yahoo.com
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                                <img src={tx} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                                <img src={ig} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                                <img src={fb} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-base sm:text-lg font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                id="name"
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-base sm:text-lg font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                id="address"
                                onChange={handleChange}
                                name="address"
                                value={form.address}
                                type="text"
                                placeholder="Your Address"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-base sm:text-lg font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                id="email"
                                onChange={handleChange}
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-base sm:text-lg font-bold mb-2" htmlFor="feedback">
                                Feedback
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                id="feedback"
                                onChange={handleChange}
                                name="feedback"
                                value={form.feedback}
                                placeholder="Your Feedback"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full mt-8'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.243017661561!2d77.02356449243764!3d28.6411037687183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05723dfb5d49%3A0x1557faf7a8a9bb98!2sVikas%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1723550876458!5m2!1sen!2sin"
                    className="w-full h-[300px] sm:h-[450px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Connect;