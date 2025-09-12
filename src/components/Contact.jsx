import { useState } from "react";

function Contact(){
    const [status, setStatus]=useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const form=e.target;
        const data=new FormData(form);

        try{
            const response=await fetch("https://formspree.io/f/mwpqloea", {
                method: "POST",
                body: data,
                headers: {Accept: "Application/json"},
            });
            if(response.ok){
                setStatus("Thanks! Your message has been sent.");
                form.reset();
            }
            else{
                setStatus("Oops! Something went wrong.");
            }
        }
        catch(error){
            setStatus("Oops! Something went wrong.");
        }
    };
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-10">Interested in working together? Fill out the form below and I'll get back to you soon!</p>

                <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white"/>
                    <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white"/>
                    <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white"></textarea>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>

                {status && (<p className="mt-4 text-green-500 dark:text-green-400 font-medium">{status}</p>)}
            </div>
        </section>
    )
}

export default Contact;