// Contact.tsx
// This component displays contact information for the maintainer of the app.

// Functional component for the Contact page
const Contact: React.FC = () => {
  return (
    <div className="contact">
      <p>Erik Pohl</p>
      <p>
        email: <a href="mailto:erikpohl.444@gmail.com">Send Email</a>
      </p>
      <p>
        phone: <a href="tel:+8643547721">864 354 7721</a>
      </p>
      <p>
        substack:{" "}
        <a href="https://erikpohl444.substack.com/">Erik's substack</a>
      </p>
      <p>
        github: <a href="https://github.com/ErikPohl444">Erik's github</a>
      </p>
      <p>
        linkedin:{" "}
        <a href="https://www.linkedin.com/in/erik-pohl-0792159/">
          Erik's linkedin
        </a>
      </p>
    </div>
  );
};

export default Contact;
