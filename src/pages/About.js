import React from "react";
import "../index.css";
import recitalpic from "../recital.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div id="about-title">
        <h1>About This Project</h1>
        <h2>
          Questions, composer suggestions or out-of-date information can be
          reported to{" "}
          <a href="mailto:kaleighsutula@gmail.com">kaleighsutula@gmail.com</a>.
        </h2>
      </div>
      <div className="about-container">
        <p>
          This project was built by{" "}
          <a href="https://www.kaleighsutula.com" target="_blank">
            Kaleigh Sutula
          </a>{" "}
          as a resource for music students (I was one once as well!). <br />
          <br />
          As a music student, your time is extremely scarce, and when you're
          studying for an exam, the last thing you want to do is scour through a
          search engine or open a heavy textbook to help you remember what year
          Mozart was born in (1756), or what two eras Schubert straddled
          (Classical/Romantic). <br />
          <br /> This resource was born of a desire to bring essential
          information about composers easily to your fingertips. Populated with
          the most searched composers of Wikipedia, this unstructured data was
          compiled and transformed to offer names, birth and death years,
          nationality and musical eras for the most popular composers.
          <br />
          <br />I plan to extend the database with additional information. If
          you have ideas, please contact me at my website or email above! <br />{" "}
          And now, my credentials:
          <br />
        </p>
        <figure>
          <img src={recitalpic}></img>
          <figcaption>
            Performing in my Master's recital at the Eastman School of Music
          </figcaption>
        </figure>
      </div>
    </>
  );
}
