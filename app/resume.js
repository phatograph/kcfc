import React from 'react';
import styles from './../css/style.css';
import { NameHeading, Contact } from './shared.js';

export default class Resume extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <table className={styles.data}>
          <tbody>
            <tr>
              <td>
                <h2>
                  <img className={styles.me} src="http://www.gravatar.com/avatar/669eba01a4293df2f86fb10857efa0af?s=640" alt="me" />
                </h2>
              </td>
              <td>
                <NameHeading />
                <Contact />
              </td>
            </tr>
            <tr className={styles.exp}>
              <td>
                <h2>Experience</h2>
              </td>
              <td>
                <ul>
                  <li>
                    <div className={styles.role}>
                      <h3>Front-end / Rails / Node.js Developer</h3>
                      <h4><a href="http://oozou.com/">Oozou Limited</a></h4>
                    </div>
                    <h5>2012 – 2014</h5>
                    <p>
                      As a fullstack developer, designed and developed rich web applications using Ruby on Rails and Node.js.
                      Created single page application using AngularJS and other cutting-edge technologies.
                    </p>
                  </li>
                  <li>
                    <div className={styles.role}>
                      <h3>Software Engineer</h3>
                      <h4>Thomson Reuters Software Thailand</h4>
                    </div>
                    <h5>2010 – 2012</h5>
                    <p>
                      Developed web application using ASP.net C# WebForm consuming provided web services.
                      Working in a huge team based on software development with agile methodology.
                    </p>
                  </li>
                  <li>
                    <div className={styles.role}>
                      <h3>Front-end Developer</h3>
                      <h4><a href="http://www.ecartstudio.com/">Ecartstudio</a></h4>
                    </div>
                    <h5>2009 – 2010</h5>
                    <p>Responsible in front-end development, working on HTML/CSS/JS from complex designs. Also worked on backend using ASP.net C# MVC and PHP.</p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Education</h2>
              </td>
              <td>
                <ul>
                  <li>
                    <div>
                      <h3>University of St Andrews &middot; Maynooth University</h3>
                      <h5>2014 – 2016</h5>
                      <p>
                        MSc in Dependable Software Systems<br />
                        (Erasmus Mundus two years programme).
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Chulalongkorn University</h3>
                      <h5>2004 – 2008</h5>
                      <p>BSc in Computer Science (2<sup>nd</sup> honour).</p>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Skills</h2>
              </td>
              <td>
                <ul className={styles.skills}>
                  <li>React</li>
                  <li>AngularJS</li>
                  <li>Sass</li>
                  <li>Node.js</li>
                  <li>Ruby on Rails</li>
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Field of Interests</h2>
              </td>
              <td>
                <ul>
                  <li>
                    <div>
                      <h3>Front-end Development</h3>
                      <p>
                        My bread-and-butter skills. I started my day as a design-to-html
                        developer (and still happy to do that!).
                        Later on I equipped myself with modern front-end technologies,
                        such as developing single page applications. Also since I'm
                        a big fan of JavaScript I'd love to work with Node.js,
                        Ruby on Rails is also nice!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Information Visualisation and Animation</h3>
                      <p>
                        I love graphs, charts, SVGs, and any slick web animation stuff
                        (mostly based on JavaScript, of course).
                        This would be my dream field of choice to be working on.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Mobile Development</h3>
                      <p>
                        I am very interested in this field, but inexperienced with it.
                        It would be great to expand my knowledge of front-end
                        to realm of mobile.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Game Development</h3>
                      <p>
                        Back in my youth I played a lot of games. As of now
                        I'm fond of casual games on mobile and browsers, like those 8-bit graphics.
                        It would be fun to work on this too!
                      </p>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
