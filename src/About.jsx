import './index.css';
import { useNavigate } from 'react-router-dom';
import myImage1 from './assets/munch1.jpg';
import myImage2 from './assets/munch2.jpg';
import myImage3 from './assets/munch3.jpg';
import myImage4 from './assets/munch4.jpg';
import myImage5 from './assets/munch5.jpg';
import myImage6 from './assets/munch6.jpg';
import myImage7 from './assets/munch7.jpg';

export default function About() {

  const navigate = useNavigate();

  const shoot = () => {
    navigate('/');
  }

  return (
    <div className='landing'>
      <button onClick={shoot}>Back</button>

      <div id="blog_section">
        <h1>Munch Application Screenshots.</h1>

        <div id="blogs">

          <section>
            <img src={myImage1} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage2} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage3} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage4} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage5} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage6} width="270px" height="480px" />
          </section>

          <section>
            <img src={myImage7} width="270px" height="480px" />
          </section>

        </div>
      </div>

      <div id="footer_blog">
        <a href="https://github.com/jpiekut" target="_blank">made on earth by team X7</a>
      </div>
    </div>);
}

