import { Container,Row,Alert } from "react-bootstrap";
import React from "react";
import jimg1 from "../Components/image/img/java1.png";
import jimg2 from "../Components/image/img/javaimg2.png";
import jimg3 from "../Components/image/img/jre1.png";
import jimg4 from "../Components/image/img/jdk2.png";
export function Java() {
    return (
        <Container className="text-left mb-5">
      <Alert><h1>Welcome to C++ Tutorial</h1></Alert>

      <Row className="mt-5" >
        <h2>Explore the world of JAVA programming!</h2>
        <br></br>

       <Row className="align-items-center justify-content-center mt-3 mb-3"> <img src={jimg1} alt="img1" className="img-fluid" /></Row>
      </Row>

      <Row className="mt-2">
        <p>
          <h3>Java Tutorial</h3>
          Java Training Our core Java programming tutorial is designed for
          students and working professionals. Java is an object-oriented,
          class-based, concurrent, secured and general-purpose
          computer-programming language. It is a widely used robust technology.
        </p>
        <h3>What is Java?</h3>
        <p>
          Java is a programming language and a platform. Java is a high level,
          robust, object-oriented and secure programming language. Java was
          developed by Sun Microsystems (which is now the subsidiary of Oracle)
          in the year 1995. James Gosling is known as the father of Java. Before
          Java, its name was Oak. Since Oak was already a registered company, so
          James Gosling and his team changed the name from Oak to Java.
          Platform: Any hardware or software environment in which a program
          runs, is known as a platform. Since Java has a runtime environment
          (JRE) and API, it is called a platform.
        </p>
        <h3>Application</h3>
        <p>
          According to Sun, 3 billion devices run Java. There are many devices
          where Java is currently used. Some of them are as follows: Desktop
          Applications such as acrobat reader, media player, antivirus, etc. Web
          Applications such as irctc.co.in, javatpoint.com, etc. Enterprise
          Applications such as banking applications. Mobile Embedded System
          Smart Card Robotics Games, etc.
        </p>
        <h3> Types of Java Applications</h3>
        <p>
          There are mainly 4 types of applications that can be created using
          Java programming:
        </p>
        <h4> 1. Standalone Application</h4>
        <p>
          Standalone applications are also known as desktop applications or
          window-based applications. These are traditional software that we need
          to install on every machine. Examples of standalone application are
          Media player, antivirus, etc. AWT and Swing are used in Java for
          creating standalone applications
        </p>
        <h4>2. Web Application</h4>
        <p>
          An application that runs on the server side and creates a dynamic page
          is called a web application. Currently, Servlet, JSP, Struts, Spring,
          Hibernate, JSF, etc. technologies are used for creating web
          applications in Java
        </p>

        <h4>3. Enterprise Application</h4>
        <p>
          An application that is distributed in nature, such as banking
          applications, etc. is called an enterprise application. It has
          advantages like high-level security, load balancing, and clustering.
          In Java, EJB is used for creating enterprise applications.
        </p>
        <h4>4. Mobile Application</h4>
        <p>
          An application which is created for mobile devices is called a mobile
          application. Currently, Android and Java ME are used for creating
          mobile applications
        </p>
      </Row>
      

      <Row className="container flex">
        <Row className="box">
          <Row className="d-flex align-items-center">
            <Row className="align-items-center justify-content-center mt-3 mb-3">
              <img src={jimg2} alt="img2" className="img-fluid" style={{ width: '800px'}} />
            </Row>
            {/* <Row className="Text">
              <h1>I am A DAC</h1>
            </Row> */}
          </Row>
        </Row>
      </Row>

      <Row className="mt-2">
        <h2>Java Platforms / Editions</h2>
        <p>There are 4 platforms or editions of Java:</p>
        <br></br>

        <li>1. Java SE (Java Standard Edition)</li>
        <p>
          It is a Java programming platform. It includes Java programming APIs
          such as java.lang, java.io, java.net, java.util, java.sql, java.math
          etc. It includes core topics like OOPs, String, Regex, Exception,
          Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing,
          Reflection, Collection, etc.
        </p>

      <li>2. Java EE (Java Enterprise Edition)</li>
        <p>
          It is an enterprise platform that is mainly used to develop web and
          enterprise applications. It is built on top of the Java SE platform.
          It includes topics like Servlet, JSP, Web Services, EJB, JPA, etc.
        </p>

        <li>3. Java ME (Java Micro Edition)</li>
        <p>It is a micro platform that is dedicated to mobile applications.</p>

        <li>4. JavaFX</li>
        <p>
          It is used to develop rich internet applications. It uses a
          lightweight user interface API.
        </p>
      </Row>

      <Row>
        <h2>Difference between JDK, JRE, and JVM</h2>
        <p>
          We must understand the differences between JDK, JRE, and JVM before
          proceeding further to Java. See the brief overview of JVM here. If you
          want to get the detailed knowledge of Java Virtual Machine, move to
          the next page. Firstly, let's see the differences between the JDK,
          JRE, and JVM.
        </p>

        <h3>JVM</h3>
        <p>
          JVM (Java Virtual Machine) is an abstract machine. It is called a
          virtual machine because it doesn't physically exist. It is a
          specification that provides a runtime environment in which Java
          bytecode can be executed. It can also run those programs which are
          written in other languages and compiled to Java bytecode. JVMs are
          available for many hardware and software platforms. JVM, JRE, and JDK
          are platform dependent because the configuration of each OS is
          different from each other. However, Java is platform independent.
          There are three notions of the JVM: specification, implementation, and
          instance.
        </p>
        <h5>
          The JVM performs the following main tasks: Loads code Verifies code
          Executes code Provides runtime environment
        </h5>
        <h3>JRE</h3>
        <p>
          JRE is an acronym for Java Runtime Environment. It is also written as
          Java RTE. The Java Runtime Environment is a set of software tools
          which are used for developing Java applications. It is used to provide
          the runtime environment. It is the implementation of JVM. It
          physically exists. It contains a set of libraries + other files that
          JVM uses at runtime. The implementation of JVM is also actively
          released by other companies besides Sun Micro Systems.
        </p>

        {/* <Row className="align-items-center justify-content-center mt-3 mb-3"></Row><img src={jimg3} alt="img3" className="img-fluid" style={{ width: '800px'}} /> */}
        <Row className="align-items-center justify-content-center mt-3 mb-3">
      <img src={jimg3} alt="img3" className="img-fluid" style={{ width: '800px', textAlign: 'center' }} />
    </Row>
        <h3>JDK</h3>
        <p>
          JDK is an acronym for Java Development Kit. The Java Development Kit
          (JDK) is a software development environment which is used to develop
          Java applications and applets. It physically exists. It contains JRE +
          development tools. JDK is an implementation of any one of the below
          given Java Platforms released by Oracle Corporation: Standard Edition
          Java Platform Enterprise Edition Java Platform Micro Edition Java
          Platform The JDK contains a private Java Virtual Machine (JVM) and a
          few other resources such as an interpreter/loader (java), a compiler
          (javac), an archiver (jar), a documentation generator (Javadoc), etc.
          to complete the development of a Java Application.
        </p>

        {/* <Row className="align-items-center justify-content-center mt-3 mb-3"></Row><img src={jimg4} alt="img4" className="img-fluid"  style={{ width: '800px'}}/> */}
        <Row className="align-items-center justify-content-center mt-3 mb-3">
      <img src={jimg4} alt="img3" className="img-fluid" style={{ width: '800px', textAlign: 'center' }} />
    </Row>
        <footer className="text-center">
          <p>Happy Coding!</p>
        </footer>
      </Row>
    </Container>
    );
}