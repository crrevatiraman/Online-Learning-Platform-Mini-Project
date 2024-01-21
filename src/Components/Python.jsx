import { Container, Row, Alert} from "react-bootstrap";
import jimg1 from "./image/img/py1.png";
import jimg2 from "./image/img/py2.webp";
import jimg3 from "./image/img/py3.jpg";

export function Python() {
    return (
        <Container className="text-left mb-5 mb-5">
      <Alert className="mb-5 mt-5">
        <h1>Welcome to PYTHON Tutorial</h1>
      </Alert>

      <Row>
        <h2>Explore the world of Python programming!</h2>
        <br></br>
      </Row>
      <Row className="align-items-center justify-content-center mt-3 mb-3"><img src={jimg1} alt="img1" className="img-fluid" /></Row>

      <Row >
        <h3>What is Python?</h3>
        <p>
          Python is a popular programming language. It was created by Guido van
          Rossum, and released in 1991.
        </p>

        <h3>It is used for:</h3>
        <p>
          <li>web development (server-side),</li>
          <li>software development,</li>
          <li>mathematics,,</li>
          <li>system scripting.</li>
        </p>

        <h3>What can Python do?</h3>
         <Row className="align-items-center justify-content-center mt-3 mb-3"><img src={jimg2} alt="img2" className="img-fluid" style={{ width: '800px'}} /></Row>
        

        <p>
          <li> Python can be used on a server to create web applications.</li>
          <li>Python can be used alongside software to create workflows.</li>
          <li>
            Python can connect to database systems. It can also read and modify
            files.
          </li>
          <li>
            Python can be used to handle big data and perform complex
            mathematics.
          </li>
          <li>
            Python can be used for rapid prototyping, or for production-ready
            software development.
          </li>
        </p>

        <h3>Why Python?</h3>
        <li>
          
          Python works on different platforms (Windows, Mac, Linux, Raspberry
          Pi, etc).
        </li>
        <li>Python has a simple syntax similar to the English language.</li>
        <li>
          Python has syntax that allows developers to write programs with fewer
          lines than some other programming languages.
        </li>
        <li>
          Python runs on an interpreter system, meaning that code can be
          executed as soon as it is written. This means that prototyping can be
          very quick.
        </li>
        <li>
          Python can be treated in a procedural way, an object-oriented way or a
          functional way.
        </li>
        <br></br>

        <Row>

        <h3>Good to know</h3>
            <Row className="align-items-center justify-content-center mt-3 mb-5"> <img src={jimg3} alt="img3" className="img-fluid" style={{ width: '800px' }}/></Row>
       
        <li>
          
          The most recent major version of Python is Python 3, which we shall be
          using in this tutorial. However, Python 2, although not being updated
          with anything other than security updates, is still quite popular.
        </li>
        <li>
          
          In this tutorial Python will be written in a text editor. It is
          possible to write Python in an Integrated Development Environment,
          such as Thonny, Pycharm, Netbeans or Eclipse which are particularly
          useful when managing larger collections of Python files.
        </li>

        <h3>Python Syntax compared to other programming languages</h3>
        <li>
          Python was designed for readability, and has some similarities to the
          English language with influence from mathematics.
        </li>
        <li>
         
          Python uses new lines to complete a command, as opposed to other
          programming languages which often use semicolons or parentheses.
        </li>
        <li>
         
          Python relies on indentation, using whitespace, to define scope; such
          as the scope of loops, functions and classes. Other programming
          languages often use curly-brackets for this purpose.
        </li>
        </Row>

        <footer className="text-center">
          <p>Happy Coding!</p>
        </footer>
      </Row>
    </Container>
    );
}