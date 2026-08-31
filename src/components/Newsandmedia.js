import React from 'react';
import './css/Newsandmedia.scss';

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  prevNextButtons: true,
  wrapAround: true,
  contain: true,
  groupCells: true

}

function Newsandmedia() {
  let news_array = [
    {
      name: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: './assets/images/blogdemo.jpg',
    },
    {
      name: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: './assets/images/blogdemo.jpg',
    },
    {
      name: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: './assets/images/blogdemo.jpg',
    },
  ];




  return (
    <div className='News_Media'>
      <div className='section_intro'>
        <div className='title'>
          <h3><b>News & Media</b> Center</h3>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididunt
            utlaboreetdoloremagnaaliqua.Quisipsum suspendisseultricesgravida. Risuscommodo
          </p>
        </div>
      </div>
      <div className='news_section'>
        {news_array?.map((news, key2) => (
          <div className='newsdata' key={key2}>
            <img src={news?.image} />
            <h1>{news?.name}</h1>
            <p>{news?.description}</p>
          </div>

        ))}
      </div>


    </div>
  );
}

export default Newsandmedia;
