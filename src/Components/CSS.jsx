import { Container, Row, Alert } from "react-bootstrap";
import React from "react";
import jimg1 from "../Components/image/img/css1.jpg";
import jimg2 from "../Components/image/img/css2.jpg";
import jimg3last from "../Components/image/img/css3.png";
import jimg4 from "../Components/image/img/I1.png";
import jimg5 from "../Components/image/img/I2.png";
import jimg6 from "../Components/image/img/I3.png";
import jimg7 from "../Components/image/img/I4.png";
import jimg8 from "../Components/image/img/I5.png";
export function CSS() {
    return (
        <Container fluid className="text-left mb-5">
      <Row>
        <Alert style={{backgroundColor:'rgb(224,224,224)'}}>
          <h1>Welcome to CSS Tutorial</h1>
        </Alert>
      </Row>

      <Row className="mt-5">
        <h2>Explore the world of CSS programming!</h2>
        <br></br>

        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg1}
            alt="img1"
            className="img-fluid"
            style={{ width: "1000px", textAlign: "center" }}
          />
        </Row>
      </Row>

      <Row className="mt-2">
        <h1>CSS first steps overview</h1>

        <p>
          CSS (Cascading Style Sheets) is used to style and lay out web pages —
          for example, to alter the font, color, size, and spacing of your
          content, split it into multiple columns, or add animations and other
          decorative features. This module provides a gentle beginning to your
          path towards CSS mastery with the basics of how it works, what the
          syntax looks like, and how you can start using it to add styling to
          HTML.
        </p>

        <h1>Prerequisites</h1>

        <h3>Before starting this module, you should have:</h3>

        <p>
          <li>
            Basic familiarity with using computers and using the Web passively
            (i.e. looking at it, consuming the content.)
          </li>
          <li>
            A basic work environment set up, as detailed in Installing basic
            software, and an understanding of how to create and manage files, as
            detailed in Dealing with files.
          </li>
          <li>
            Basic familiarity with HTML, as discussed in the Introduction to
            HTML module.
          </li>
          <li>
            Note: If you are working on a computer/tablet/other device where you
            don't have the ability to create your own files, you could try out
            (most of) the code examples in an online coding program such as
            JSBin or Glitch.
          </li>
        </p>

        <h4>Guides</h4>
        <p>
          This module contains the following articles, which will take you
          through all the basic theory of CSS, and provide opportunities for you
          to test out some skills.
        </p>

        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg2}
            alt="img2"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>

        <h3>What is CSS?</h3>
        <p>
          CSS (Cascading Style Sheets) allows you to create great-looking web
          pages, but how does it work under the hood? This article explains what
          CSS is with a simple syntax example and also covers some key terms
          about the language.
        </p>

        <h5>Getting started with CSS</h5>
        <p>
         In this article, we will take a simple HTML document
          and apply CSS to it, learning some practical things about the language
          along the way.
        </p>

        <h5>How CSS is structured</h5>
        
        <p>
          Now that you have an idea about what
          CSS is and the basics of using it, it is time to look a little deeper
          into the structure of the language itself. We have already met many of
          the concepts discussed here; you can return to this one to recap if
          you find any later concepts confusing.
        </p>
        <h5>Applying CSS to HTML</h5>
        <p>
          First, let's examine three methods of applying CSS to a document: with
          an external stylesheet, with an internal stylesheet, and with inline
          styles.
        </p>

        <h5>External stylesheet</h5>
        <p>
          An external stylesheet contains CSS in a separate file with a .css
          extension. This is the most common and useful method of bringing CSS
          to a document. You can link a single CSS file to multiple web pages,
          styling all of them with the same CSS stylesheet. In the Getting
          started with CSS, we linked an external stylesheet to our web page.
        </p>

        <h5>You reference an external CSS stylesheet from an HTML element:</h5>
        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg4}
            alt="img4"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>
        <p>The CSS stylesheet file might look like this:</p>
        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg5}
            alt="img5"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>
        <p>
          The href attribute of the link element needs to reference a file on
          your file system. In the example above, the CSS file is in the same
          folder as the HTML document, but you could place it somewhere else and
          adjust the path. Here are three examples:
        </p>
        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg6}
            alt="img6"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>
        <h3>Internal stylesheet</h3>
        <p>
          An internal stylesheet resides within an HTML document. To create an
          internal stylesheet, you place CSS inside a style element contained
          inside the HTML head.
        </p>

        <h4>The HTML for an internal stylesheet might look like this:</h4>
        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg7}
            alt="img7"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>
        <p>
          In some circumstances, internal stylesheets can be useful. For
          example, perhaps you're working with a content management system where
          you are blocked from modifying external CSS files. But for sites with
          more than one page, an internal stylesheet becomes a less efficient
          way of working. To apply uniform CSS styling to multiple pages using
          internal stylesheets, you must have an internal stylesheet in every
          web page that will use the styling. The efficiency penalty carries
          over to site maintenance too. With CSS in internal stylesheets, there
          is the risk that even one simple styling change may require edits to
          multiple web pages.
        </p>
        <h3>Inline styles</h3>
        <p>
          Inline styles are CSS declarations that affect a single HTML element,
          contained within a style attribute. The implementation of an inline
          style in an HTML document might look like this:
        </p>
        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg8}
            alt="img8"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>

        <p>
          Avoid using CSS in this way, when possible. It is the opposite of a
          best practice. First, it is the least efficient implementation of CSS
          for maintenance. One styling change might require multiple edits
          within a single web page. Second, inline CSS also mixes (CSS)
          presentational code with HTML and content, making everything more
          difficult to read and understand. Separating code and content makes
          maintenance easier for all who work on the website. There are a few
          circumstances where inline styles are more common. You might have to
          resort to using inline styles if your working environment is very
          restrictive. For example, perhaps your CMS only allows you to edit the
          HTML body. You may also see a lot of inline styles in HTML email to
          achieve compatibility with as many email clients as possible.
        </p>


        <h3>How CSS works</h3>
        <p>
          We have learned the basics of CSS, what it is for, and how to write
          simple stylesheets. In this article, we will take a look at how a
          browser takes CSS and HTML and turns that into a webpage.
        </p>

        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg3last}
            alt="img3"
            className="img-fluid"
            style={{ width: "800px", textAlign: "center" }}
          />
        </Row>

        <h3>Assessments</h3>
        <p>
          The following assessment will test your understanding of the CSS
          basics covered in the guides above.
        </p>

        <h3>Styling a biography page</h3>
        <p>
          With the things you have learned in the last few articles, you should
          find that you can format simple text documents using CSS to add your
          own style to them. This assessment gives you a chance to do that.
        </p>
      </Row>
    </Container>
    );
}