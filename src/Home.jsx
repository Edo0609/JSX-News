import { useEffect, useState, useContext } from 'react';
import './Main_pages.css';
import { useNavigate } from 'react-router-dom';
import { LangContext } from './LangProvider';

export default function Home() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { lenguaje } = useContext(LangContext);

  const buttonTranslations = {
    en: "Read more",
    es: "Leer más",
    fr: "En savoir plus",
    it: "Leggi di più",
    ch: "阅读更多",
    pt: "Leia mais",
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://news-foniuhqsba-uc.a.run.app');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error fetching news: {error}</p>;

  return (
    <div>
      <div className="news-grid">
        {news.map((item, index) => {

          const translation = item.translations?.[lenguaje] || item;

          return (
            <div key={index} className="news-card">
              <img src={item.image_url} alt={translation.headline} />
              <h2>{translation.headline}</h2>
              <p>{translation.abstract}</p>
              <button onClick={() => navigate(`/news/${item.id}`)}>{buttonTranslations[lenguaje]}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}