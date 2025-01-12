import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LangContext } from './LangProvider';
import { AuthContext } from './AuthProvider';
import './Article.css'; 

export default function Article() {
  const { id } = useParams();
  const { lenguaje } = useContext(LangContext); 
  const { estaAutenticado } = useContext(AuthContext); 
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://news-foniuhqsba-uc.a.run.app/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>Error fetching article: {error}</p>;

  if (!article) return <p>Article not found</p>;


  const translation = article.translations?.[lenguaje] || article;

  const handleLoginClick = () => {
    navigate('/login');  
  };

  return (
    <div className="article-container">
      <img src={article.image_url} alt="Article" />
      <h1>{translation.headline}</h1>
      <p>{translation.abstract}</p>
      
      {!estaAutenticado ? (
        <div className="login-prompt">
          <p>To read the article, please log in.</p>
          <button onClick={handleLoginClick}>Log in</button>
        </div>
      ) : (
        <p>{translation.body}</p>
      )}
    </div>
  );
}
