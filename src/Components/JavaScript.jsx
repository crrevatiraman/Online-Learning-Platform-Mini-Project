import { Container,Row,Alert } from "react-bootstrap";
import React from "react";
import jimg1 from "../Components/image/img/js0.png";
import jimg2 from "../Components/image/img/js1.png";
import jimg3 from "../Components/image/img/js2.png";

export function JavaScript() {
    return (

        <Container className="text-left mb-5">
            <Row>
                <Alert>
                    <h1>Welcome to JAVA SCRIPT Tutorial</h1>
                </Alert>
            </Row>

            <Row className="mt-5">
                <h2>Explore the world of JS programming!</h2>
                <br></br>

                <Row className="align-items-center justify-content-center mt-3 mb-3">
                    <img
                        src={jimg1}
                        alt="img1"
                        className="img-fluid"
                        style={{ width: "1500px", textAlign: "center" }}
                    />
                </Row>
            </Row>

            <Row className="mt-2">
                <h3>An Introduction to JavaScript</h3>
                <p>
                    Let’s see what’s so special about JavaScript, what we can achieve with
                    it, and what other technologies play well with it
                </p>

                <h4>What is JavaScript?</h4>
                <p>
                    JavaScript was initially created to “make web pages alive”. The
                    programs in this language are called scripts. They can be written
                    right in a web page’s HTML and run automatically as the page loads.
                    Scripts are provided and executed as plain text. They don’t need
                    special preparation or compilation to run. In this aspect, JavaScript
                    is very different from another language called Java.
                </p>
                <p>
                    <b>Why is it called JavaScript?</b>
                    <br />
                    When JavaScript was created, it initially had another name:
                    “LiveScript”. But Java was very popular at that time, so it was
                    decided that positioning a new language as a “younger brother” of Java
                    would help. But as it evolved, JavaScript became a fully independent
                    language with its own specification called ECMAScript, and now it has
                    no relation to Java at all.
                </p>

                <p>
                    Today, JavaScript can execute not only in the browser, but also on the
                    server, or actually on any device that has a special program called
                    the JavaScript engine. <br />
                    The browser has an embedded engine sometimes called a “JavaScript
                    virtual machine”
                    <br />
                    Different engines have different “codenames”. For example:
                    <li> V8 – in Chrome, Opera and Edge.</li>
                    <li>SpiderMonkey – in Firefox. </li>
                    <li>
                        {" "}
                        …There are other codenames like “Chakra” for IE, “JavaScriptCore”,
                        “Nitro” and “SquirrelFish” for Safari, etc.
                    </li>
                    The terms above are good to remember because they are used in
                    developer articles on the internet. We’ll use them too. For instance,
                    if “a feature X is supported by V8”, then it probably works in Chrome,
                    Opera and Edge.
                </p>

                <p>
                    <b>How do engines work?</b>
                    <br />
                    Engines are complicated. But the basics are easy.
                    <li>
                        {" "}
                        The engine (embedded if it’s a browser) reads (“parses”) the script.
                    </li>
                    <li> Then it converts (“compiles”) the script to machine code.</li>
                    <li> And then the machine code runs, pretty fast.</li>
                    The engine applies optimizations at each step of the process. It even
                    watches the compiled script as it runs, analyzes the data that flows
                    through it, and further optimizes the machine code based on that
                    knowledge.
                </p>

                <p>
                    <b>What can in-browser JavaScript do?</b>
                    Modern JavaScript is a “safe” programming language. It does not
                    provide low-level access to memory or the CPU, because it was
                    initially created for browsers which do not require it. JavaScript’s
                    capabilities greatly depend on the environment it’s running in. For
                    instance, Node.js supports functions that allow JavaScript to
                    read/write arbitrary files, perform network requests, etc. In-browser
                    JavaScript can do everything related to webpage manipulation,
                    interaction with the user, and the webserver. For instance, in-browser
                    JavaScript is able to:
                    <li>
                        Add new HTML to the page, change the existing content, modify
                        styles.
                    </li>
                    <li>
                        React to user actions, run on mouse clicks, pointer movements, key
                        presses.
                    </li>
                    <li>
                        Send requests over the network to remote servers, download and
                        upload files (so-called AJAX and COMET technologies).
                    </li>
                    <li>
                        Get and set cookies, ask questions to the visitor, show messages.
                    </li>
                    <li>Remember the data on the client-side (“local storage”).</li>{" "}
                </p>

                <Row className="align-items-center justify-content-center mt-3 mb-3">
                    <img
                        src={jimg2}
                        alt="img2"
                        className="img-fluid"
                        style={{ width: "1000px", textAlign: "center" }}
                    />
                </Row>

                <p>
                    <b> Overview of JavaScript</b> <br />
                    JavaScript is a programming language initially designed to interact
                    with elements of web pages. In web browsers, JavaScript consists of
                    three main parts:
                    <li>ECMAScript provides the core functionality.</li>
                    <li>
                        The Document Object Model (DOM) provides interfaces for interacting
                        with elements on web pages
                    </li>
                    <li>
                        The Browser Object Model (BOM) provides the browser API for
                        interacting with the web browser.
                    </li>{" "}
                    <br />
                    JavaScript allows you to add interactivity to a web page. Typically,
                    you use JavaScript with HTML and CSS to enhance a web page’s
                    functionality, such as validating forms, creating interactive maps,
                    and displaying animated charts.
                    <br />
                    When a web page is loaded, i.e., after HTML and CSS have been
                    downloaded, the JavaScript engine in the web browser executes the
                    JavaScript code. The JavaScript code then modifies the HTML and CSS to
                    update the user interface dynamically.
                    <br />
                    The JavaScript engine is a program that executes JavaScript code. In
                    the beginning, JavaScript engines were implemented as interpreters.
                    <br />
                    However, modern JavaScript engines are typically implemented as
                    just-in-time compilers that compile JavaScript code to bytecode for
                    improved performance.
                    <br />


                    <Row className="align-items-center justify-content-center mt-3 mb-3">
                        <img
                            src={jimg3}
                            alt="img3"
                            className="img-fluid"
                            style={{ width: "900px", textAlign: "center" }}
                        />
                    </Row>



                    <b>Client-side vs. Server-side JavaScript</b> <br />
                    When JavaScript is used on a web page, it is executed in web browsers.
                    In this case, JavaScript works as a client-side language.
                    <br />
                    JavaScript can run on both web browsers and servers. A popular
                    JavaScript server-side environment is Node.js. Unlike client-side
                    JavaScript, server-side JavaScript executes on the server and allows
                    you to access databases, file systems, etc.
                    <br />
                    <b>JavaScript History</b>
                    In 1995, JavaScript was created by a Netscape developer named Brendan
                    Eich. First, its name was Mocha. And then, its name was changed to
                    LiveScript.
                    <br />
                    Netscape decided to change LiveScript to JavaScript to leverage Java’s
                    fame, which was popular. The decision was made just before Netscape
                    released its web browser product Netscape Navigator 2. As a result,
                    JavaScript entered version 1.0.
                    <br />
                    Netscape released JavaScript 1.1 in Netscape Navigator 3. In the
                    meantime, Microsoft introduced a web browser product called Internet
                    Explorer 3 (IE 3), which competed with Netscape. However, IE came with
                    its own JavaScript implementation called JScript. Microsoft used the
                    name JScript to avoid possible license issues with Netscape.
                    <br />
                    Hence, two different JavaScript versions were in the market:
                    <br />
                    <li>JavaScript in Netscape Navigator</li>
                    <li>JScript in Internet Explorer.</li>
                    JavaScript had no standards that governed its syntax and features. And
                    the community decided that it was time to standardize the language.
                    <br />
                    In 1997, JavaScript 1.1 was submitted to the European Computer
                    Manufacturers Association (ECMA) as a proposal. Technical Committee
                    #39 (TC39) was assigned to standardize the language to make it a
                    general-purpose, cross-platform, and vendor-neutral scripting
                    language.
                    <br />
                    TC39 came up with ECMA-262, a standard for defining a new scripting
                    language named ECMAScript (often pronounced Ek-ma-script).
                    <br />
                    After that, the International Organization for Standardization and
                    International Electrotechnical Commissions (ISO/IEC) adopted
                    ECMAScript (ISO/IEC-16262).
                </p>

                <footer className="text-center">
                    <p>Happy Coding!</p>
                </footer>
            </Row>

        </Container>
    );
}