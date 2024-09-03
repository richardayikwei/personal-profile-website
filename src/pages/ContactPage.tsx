import { contacts } from "../constant/data";

const ContactPage = () => {
  return (
    <main className="container mx-auto py-10 mt-10 w-[90%] flex items-center justify-center h-[60vh]">
      <figure>
        <img  className="md:w-36 w-24" src={contacts.image} alt="" />
      </figure>
      <article>
        <p className="md:text-4xl text-lg text-white ">{contacts.summary}</p>
      </article>
    </main>
  );
};

export default ContactPage;
