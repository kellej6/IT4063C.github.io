import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/league.css";
// import "./slides.css";

export default function Slides() {
  useEffect(() => {
    let deck = new Reveal({
      backgroundTransition: "slide",
      transition: "slide",
      plugins: [Markdown],
    });
    deck.initialize();
    console.log(`worked`);
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="reveal">
          <div className="slides" data-transition="slide">
            <section data-transition="slide">
              <h3>The HTML Presentation Framework</h3>
            </section>

            <section data-transition="slide">
              <h2>Hello There</h2>
              <p>
                reveal.js enables you to create beautiful interactive slide
                decks using HTML. This presentation will show you examples of
                what it can do.
              </p>
            </section>

            <section data-transition="slide">
              <h2>Marvelous List</h2>
              <ul>
                <li>No order here</li>
                <li>Or here</li>
                <li>Or here</li>
                <li>Or here</li>
              </ul>
            </section>

            <section data-transition="slide">
              <h2>Fantastic Ordered List</h2>
              <ol>
                <li>One is smaller than...</li>
                <li>Two is smaller than...</li>
                <li>Three!</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
