// import emailjs from "@emailjs/browser";
// import { contact } from "../../data";
// import { useState } from "react";

// const Contact = () => {
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const form = document.getElementById("contact-form");
//     emailjs
//       .sendForm(
//         "service_w8poeor",
//         "template_2p5qnp9",
//         e.target,
//         "h24P0qTU2K_gGpymq"
//       )
//       .then(
//         (result) => {
//           setSuccess(
//             "Thank you for reaching out! I will respond as soon as possible"
//           );
//           setTimeout(() => {
//             form.reset();
//             setError("");
//             setSuccess("");
//           }, 5000);
//         },
//         (error) => {
//           setError(error.text);
//         }
//       );
//   };

//   return (
//     <section className='h-screen section bg-primary' id='contact'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col items-center text-center'>
//           <h2 className='relative font-light section-title text-accent-hover before:content-contact before:absolute before:opacity-80 before:-top-7 before:-left-40 before:hidden before:lg:block'>
//             <span className='opacity-70'>Contact me</span>
//           </h2>
//           <p className='subtitle'>
//             I am a available for part time or full time positions, as well as
//             any freelance work that needs to be done.
//           </p>
//         </div>
//         <div className='sm:flex lg:flex-row flex-col justify-center h-[30em] '>
//           <div className='flex-[.5] flex md:flex-row sm:pb-6 md:justify-center lg:flex-col items-center lg:justify-evenly max-w-[750px]'>
//             {contact.map((item, index) => {
//               const { icon, title, subtitle, description } = item;
//               return (
//                 <div
//                   className='flex-col items-center hidden w-full sm:flex md:h-full lg:h-1/2'
//                   key={index}
//                 >
//                   <div className='flex items-center justify-center mt-2 mb-4 text-2xl rounded-sm text-accent w-14 h-14 lg:mb-0'>
//                     {icon}
//                   </div>
//                   <div className='sm:items-center sm:flex-col sm:flex sm:justify-evenly'>
//                     <h4 className='mb-1 text-xl font-body text-accent'>
//                       {title}
//                     </h4>
//                     <p className='mb-1 text-paragraph'>{subtitle}</p>
//                     <p className='font-normal text-accent-brownHover'>
//                       {description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <form
//             className='flex flex-col justify-center flex-1 space-y-8 w-full max-w-[750px]'
//             id='contact-form'
//             onSubmit={sendEmail}
//           >
//             <div className='flex gap-8'>
//               <input
//                 className='input'
//                 id='name'
//                 type='text'
//                 name='from_name'
//                 placeholder='Name'
//                 required
//               />
//               <input
//                 className='input'
//                 id='email'
//                 type='email'
//                 name='user_email'
//                 placeholder='Email'
//                 required
//               />
//             </div>
//             <input
//               className='input'
//               id='subject'
//               type='text'
//               name='user_subject'
//               placeholder='Subject'
//               required
//             />
//             <textarea
//               className='textarea'
//               id='message'
//               name='message'
//               placeholder='Write you message here'
//               required
//             ></textarea>
//             <div className='flex flex-row items-center justify-center w-full gap-4 h-1/3'>
//               <button
//                 type='submit'
//                 className='transition-all duration-300 border-2 btn btn-lg border-accent-brown hover:bg-accent-brownHover hover:text-primary'
//               >
//                 Send message
//               </button>
//               <div className='flex items-center w-2/3 h-full'>
//                 <p className=' text-center text-2xl text-[#558B72] font-medium'>
//                   {success}
//                 </p>
//                 <p className='text-center text-[#D85531]'>{error}</p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
