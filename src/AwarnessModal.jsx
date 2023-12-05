import axios from 'axios';
import { useState, useEffect } from 'react';
import './assets/AwarnessModal.css';

const AwarnessModal = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMore, setIsMore] = useState(false);
    const [mainVideo, setMainVideo] = useState('');
    const [videoList, setListVideo] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsLimit = 8;
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsLimit;
        const endIndex = startIndex + itemsLimit;
        return videoList.slice(startIndex, endIndex);
      };

      const totalPages = Math.ceil(videoList.length / itemsLimit);
      const paginationButtons = [];
      for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: process.env.YOUTUBE_APIKEY,
              part: 'snippet',
              q: 'light pollution',
              maxResults: 50,
            },
          });
          setIsLoading(!isLoading);
          setIsLoaded(!isLoaded);
          setMainVideo(response.data.items[0]);
          setListVideo(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); 
    }, []); 

    const isPlayingHandler = () => {
        setIsLoaded(!isLoaded)
        setIsPlaying(!isPlaying)
    }

    const isMoreHandler = () => {
        setIsLoaded(!isLoaded)
        setIsMore(!isMore)
    }

    const pageHandler = (page) => {
        setCurrentPage(page);
      };

    const goToYoutube = (url) => {
        window.open(`https://www.youtube.com/watch?v=${url}`, '_blank');
    }



  return (
    <div className="AwarnessModal">
      {isLoading && (
        <div className="skeleton-video">
          <div className="skeleton-thumbnail"></div>
          <div className="skeleton-details">
            <div className="skeleton-title"></div>
            <div className="skeleton-channel"></div>
          </div>
        </div>
      )}
      {isLoaded &&(
        <div className="youtubeContainer">
            <div className="thumbnail">
            <svg onClick={isPlayingHandler} width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="66" height="66" rx="33" fill="white"/>
                <path d="M50 33L24.5 47.7224L24.5 18.2776L50 33Z" fill="black"/>
            </svg>
                <img src={mainVideo.snippet.thumbnails.high.url} alt="mainvideo" />
            </div>
                <div className="descriptionContainer">
                    <div className="content">
                        <h1>{mainVideo.snippet.title}</h1>
                        <p>{mainVideo.snippet.description}</p>
                    </div>
                    <div className="moreButton">
                        <svg onClick={isMoreHandler} width="89" height="22" viewBox="0 0 89 22" xmlns="http://www.w3.org/2000/svg" style={{fill: 'black'}}>
                            <path d="M88.5312 12.0312C89.1007 11.4617 89.1007 10.5383 88.5312 9.9688L79.2504 0.688025C78.6809 0.118511 77.7575 0.118511 77.188 0.688025C76.6185 1.25754 76.6185 2.18091 77.188 2.75042L85.4376 11L77.188 19.2496C76.6185 19.8191 76.6185 20.7425 77.188 21.312C77.7575 21.8815 78.6809 21.8815 79.2504 21.312L88.5312 12.0312ZM0 12.4583H87.5V9.54167H0V12.4583Z" fill="white"/>
                        </svg>
                    </div>
                </div>
        </div>
      )}
      {isPlaying && (
        <div className="iframeContainer">
            <svg onClick={isPlayingHandler} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z" fill="white"/>
            </svg>
            <iframe  src={`https://www.youtube.com/embed/${mainVideo.id.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )}
      {isMore && (
        <div className="moreContainer">
            <svg onClick={isMoreHandler} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z" fill="white"/>
            </svg>
            <div className="videoContainer">
            {getCurrentPageItems().map((item) => (
                <div onClick={() => goToYoutube(item.id.videoId)} key={item.id.videoId} className="videoItem">
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h3>{item.snippet.title}</h3>
                    <p>{item.snippet.publishTime.match(/^(\d{4}-\d{2}-\d{2})/)[0]}</p>
                </div>
            ))}
            </div>
           <div className="paginationButtons">
                {currentPage !== 1 &&
                    <button onClick={() => pageHandler(currentPage - 1)}>&lt;</button>
                }
                {paginationButtons.map((button) => (
                    button
                ))}
                {currentPage !== totalPages &&
                     <button onClick={() => pageHandler(currentPage + 1)}>&gt;</button>
                }
            </div>
        </div>
      )}
    </div>
  );
};

export default AwarnessModal;
