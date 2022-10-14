import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__text">
                <h3 className="home__heading">Welcome to my page!</h3>
                <p className="home__paragraph">
                    I'm definitely not a good designer, so the styles are quite .... ugly.
                    But I hope it would not matter, because the main issue in task is functionality.
                    If you have any questions, you can text me in Telegram <a className="home__tg-link" href="https://t.me/AlexandreZabelin">@AlexandreZabelin</a>.
                    Have a nice day!
                </p>
            </div>
        </div>
    );
};

export default Home;