import React from 'react'
import { toast } from 'react-toastify';
import '../styles/form.module.css'

function Form2({ onClose }) {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "11dd444d-f77f-4cd7-a0a2-e16b38a99d53");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
        onClose()
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    };

    return (
        <section className="p-6 dark:text-gray-800">
            <form onSubmit={onSubmit} noValidate="" className=" w-[50vw] lg:w-[80vw] max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-light">
                <div>
                    <h2 className="w-full text-3xl font-bold leading-tight">Let&apos;s Talk!</h2>
                </div>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" type="text"  name="name"  placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-primary dark:bg-gray-200" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                    <input id="email" type="email" name="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-primary dark:bg-gray-200" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                    <textarea id="message" name="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-primary dark:bg-gray-200"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-primary focus:dark:ring-primary hover:dark:ring-primary dark:text-gray-50">Send</button>
                </div>
            </form>
        </section>
    )
}

export default Form2