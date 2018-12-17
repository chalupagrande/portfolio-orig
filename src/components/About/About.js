import React from 'react';
import Computex from '../../assets/computex.jpg';
import Adesign from '../../assets/adesign.jpg';
import './About.css';
import C from '../../assets/cmyk/c.png';
import M from '../../assets/cmyk/m.png';
import Y from '../../assets/cmyk/y.png';
import K from '../../assets/cmyk/k.png';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>Hi</h1>
        <h2>My name is Jamie Skinner</h2>
        <div className="portrait">
          <img className="small-img cmyk-image cmyk--0" src={C} alt="Cyan" />
          <img className="small-img cmyk-image cmyk--1" src={Y} alt="Yellow" />
          <img className="small-img cmyk-image cmyk--2" src={K} alt="blacK" />
          <img className="small-img cmyk-image cmyk--3" src={M} alt="Magenta" />
        </div>
        <h3>
          I am a Fullstack Developer, Software Designer, and Artist currently working for IBM
          Design.
        </h3>
        <p>And I know what you are thinking:</p>
        <blockquote>
          <h3>"WHY IS EVERYTHING IN COMIC SANS AND WITH NO STYLING!??! ARE YOU INSANE"</h3> <br />-{' '}
          <strong>You</strong> (probably)
        </blockquote>
        <p>
          The short answer is, because I think it is <strong>funny</strong>. Also, there are a lot
          of benefits to making a site really boring, and using an annoying font. One, Comic Sans
          <sup>&reg;</sup> is scientifically proven to be easier to read! I read that somewhere. I
          don't know if it is true, but it probably is because...
        </p>
        <p>Two, the site is responsive!. Go ahead, resize the window!</p>

        <blockquote>
          <h3>"OOOOOOOOOOO! It is so responsive!"</h3> <br />- <strong>You</strong> (probably
          again...)
        </blockquote>

        <p>
          Not to mention. Not <i>reeaally</i> designing my site leaves me free to do a whole lot of
          other cool projects. Like potentially work on <strong>YOUR</strong> project! That is right
          people! I am available for hire. Play your cards right and you could have your own site as
          good as this one. But probably a lot better because I am actually pretty good at my job
          (despite your first impression). If you dont believe me, take a look at this!
        </p>

        <img src={Computex} alt="Computex Design Award for Bluemix Availability Monitoring" />
        <img src={Adesign} alt="A'Design Gold Award for Bluemix Availability Monitoring" />

        <p>
          That's right! <strong>TWO</strong> International Design Awards for Bluemix Availability
          Monitoring (the team I work on at IBM)
        </p>
        <blockquote>
          <h3>"Alright, alright. Take it down a notch"</h3> <br />- <strong>You</strong> (rightfully
          so)
        </blockquote>

        <p>
          You're right. Got a little carried away. <strong>BUT</strong> if by some strange stretch
          of the imagination you still aren't convinced, you can take a look at some of the other
          resources and determine for yourself.
        </p>

        <ul>
          <li>
            <a href="github.com/ninth-mind">Github - @ninth-mind</a>
            <br /> If you wanna see more projects
          </li>
          <li>
            <a href="https://codepen.io/thesuperuser/">CodePen @thesuperuser</a> OR{' '}
            <a href="https://ninth-mind.github.io/sandbox/">Sandbox</a>
            <br /> If you wanna see random snippets of code I think are cool
          </li>
          <li>
            <a href="https://codepen.io/thesuperuser/">Instagram @thesuperuser</a>
            <br /> If you wanna see some of my art
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jamieacskinner/">Linked In @jamieacskinner</a>
            <br /> If you wanna see some of my art
          </li>
          <li>
            <a href="/#" onClick={() => alert('COMING SOON!')}>
              Resume
            </a>
            <br /> If you want to read about what I've done and stuff
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
