import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_articles'>
            <div className='widgets_articlesLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articlesRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>Linkdin News</h2>
                <InfoIcon />
            </div>
            {newsArticle('What is bringing young investors into stock market in hordes', 'A slew of app-based trading platforms has seen the rise of a new Indian investor')}
            {newsArticle('England and India draw rain-marred first Test', `Persistent rain proved to be anti-climactic as India`)}
            {newsArticle('Tokyo 2020 draws to close with message of moving forward', 'n between an unrelenting virus and an approaching typhoon, the extraordinary Tokyo Olympics drew to a close on Sunday')}
            {newsArticle('Bigg Boss OTT grand launch highlights', 'Bigg Boss OTT is all set for a grand launch tonight (August 8). With a fascinating and interesting line-up of celebrities, filmmaker and producer Karan Johar is going to make his OTT debut as the host of the show.')}
            {newsArticle('The man who did not let the bronze slip away', 'P R Sreejesh was rock solid in front of the goal. Relive all his heroic saves, including the hearts-in-our-mouths last-second block')}
        </div>
    )
}

export default Widgets
