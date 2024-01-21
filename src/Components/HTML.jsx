import { Container, Row, Alert } from "react-bootstrap";
import jimg1 from "../Components/image/img/html1.jpg";
import jimg2 from "../Components/image/img/html2.png";
import jimg3 from "../Components/image/img/html3.jpg";

export function HTML() {
    return (
        <Container className="text-left mb-5">
      <Row>
        <Alert>
          <h1>Welcome to HTML Tutorial</h1>
        </Alert>
      </Row>

      <Row className="mt-5">
        <h2>Explore the world of HTML !</h2>
        <br></br>

        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg1}
            alt="img1"
            className="img-fluid"
            style={{ width: "1500px", textAlign: "center" }}
          />
        </Row>
        <p>
          HTML stands for <b>Hyper Text Markup Language</b>, which is the most
          widely used language on Web to develop web pages. HTML was created by
          Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML
          specification which was published in 1995. HTML 4.01 was a major
          version of HTML and it was published in late 1999. Though HTML 4.01
          version is widely used but currently we are having HTML-5 version
          which is an extension to HTML 4.01, and this version was published in
          2012.
        </p>
        <br></br>
        <p>
          <b>Why to Learn HTML?</b>
          <br></br>
          Originally, HTML was developed with the intent of defining the
          structure of documents like headings, paragraphs, lists, and so forth
          to facilitate the sharing of scientific information between
          researchers. Now, HTML is being widely used to format web pages with
          the help of different tags available in HTML language. HTML is a MUST
          for students and working professionals to become a great Software
          Engineer specially when they are working in Web Development Domain. I
          will list down some of the key advantages of learning HTML:
        </p>

        <p>
          <li>
            Create Web site - You can create a website or customize an existing
            web template if you know HTML well.
          </li>

          <li>
            Become a web designer - If you want to start a carrer as a
            professional web designer, HTML and CSS designing is a must skill.
          </li>

          <li>
            Understand web - If you want to optimize your website, to boost its
            speed and performance, it is good to know HTML to yield best
            results.
          </li>

          <li>
            Learn other languages - Once you understands the basic of HTML then
            other related technologies like javascript, php, or angular are
            become easier to understand.
          </li>
          <br />
        </p>

        <p>
          <h5>Hello World using HTML</h5>
          Just to give you a little excitement about HTML, I'm going to give you
          a small conventional HTML Hello World program, You can try it using
          Demo link
        </p>

        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg2}
            alt="img2"
            className="img-fluid"
            style={{ width: "600px", textAlign: "center" }}
          />
        </Row>

        <p>
          <h5>Applications of HTML</h5>
          As mentioned before, HTML is one of the most widely used language over
          the web. I'm going to list few of them here: <br />
          <li>
            <b>Web pages development </b>- HTML is used to create pages which
            are rendered over the web. Almost every page of web is having html
            tags in it to render its details in browser.
          </li>
          <li>
            <b>Internet Navigation</b> - HTML provides tags which are used to
            navigate from one page to another and is heavily used in internet
            navigation.
          </li>
          <li>
            <b>Responsive UI</b> - HTML pages now-a-days works well on all
            platform, mobile, tabs, desktop or laptops owing to responsive
            design strategy.
          </li>
          <li>
            <b>Offline support</b> HTML pages once loaded can be made available
            offline on the machine without any need of internet.
          </li>
          <li>
            <b>Game development</b>- HTML5 has native support for rich
            experience and is now useful in gaming developent arena as well.
          </li>
        </p>
        <p>
          <b>Audience</b>
          <br></br>Audience This HTML tutorial is designed for the aspiring Web
          Designers and Developers with a need to understand the HTML in enough
          detail along with its simple overview, and practical examples. This
          tutorial will give you enough ingredients to start with HTML from
          where you can take yourself at higher level of expertise.
        </p>
        <p>
          <b>Prerequisites</b> <br />
          Before proceeding with this tutorial you should have a basic working
          knowledge with Windows or Linux operating system, additionally you
          must be familiar with 
          <li>Experience with any text editor like notepad,
          notepad++, or Edit plus etc.</li>
          <li>How to create directories and files on
          your computer.</li>
          <li>How to navigate through different directories.</li>
          <li>How to type content in a file and save them on a computer.</li>
          <li>Understanding about images in different formats like JPEG, PNG format.</li>
        </p>


        <Row className="align-items-center justify-content-center mt-3 mb-3">
          <img
            src={jimg3}
            alt="img3"
            className="img-fluid"
            style={{ width: "1000px", textAlign: "center" }}
          />
        </Row>
        <footer className="text-center">
          <p><b>Happy Coding!</b></p>
        </footer>
        

      </Row>
    </Container>
    );
}