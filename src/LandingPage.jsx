import React, { useState, useEffect, Button, Alert, useRef } from 'react';
import { get } from './Backend/fetch';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function LandingPage() {

    const navigate = useNavigate();

    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });




    const [clickCount, setClickCount] = useState(0);

    // your code here
    useEffect(() => {
        document.addEventListener('mousedown', increment);
        // Specify how to clean up after the effect:
        return () => {
            document.removeEventListener('mousedown', increment);
        };
    })

    const shoot = () => {
        navigate('/about');
    }

    const increment = () => setClickCount((prev) => prev + 1)

    const [newsFeed, setNewsFeed] = useState(null);

    useEffect(() => {
        get('/news-feed').then((response) => {
            setNewsFeed(response.data);
        });
    }, []);



    return (

        <div className='landing'>

            <div className='column'>
                <div className="profile">
                    <div id="profile_img">
                        <img
                            src="https://avatars.githubusercontent.com/u/58668486?v=4" // Replace with your profile picture URL
                            alt="Profile"
                            className="profile_img" />

                        <pre>
                            {'Jakub Piekut \njpiekut790@gmail.com'}
                        </pre>

                        <p>📌 Solar System</p>
                        <p>📍 Unavailable for hire</p>
                        <span>
                            <a href="https://github.com/jpiekut" class="fa fa-github"></a>
                            <a href="https://www.linkedin.com/in/jpiekut/" class="fa fa-linkedin"></a>
                            <a href="https://twitter.com/j_piekut" class="fa fa-twitter"></a>
                        </span>
                    </div>


                </div>
            </div>

            <div className='column_two'>
                <h1 className='title'>Projects.</h1>

                {!newsFeed ? <p>Loading..</p> : (
                    <div class="box">

                        {newsFeed.map(({ id, title, message, technologies }) => (

                            <section class='hidden'>
                                <button class="tile" onClick={shoot}>
                                    <div class="title">{title}</div>
                                    <div class="about_section">{message}</div>
                                    <div class="about_section">{technologies}</div>
                                </button>
                            </section>

                        ))}

                        <h1 className='title'>Click Counter: {clickCount}</h1>
                    </div>

                )}



            </div>

        </div>

    );
}
