import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';  

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);  
  const [query, setQuery] = useState('');  
  const [results, setResults] = useState([]);  
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);  
  const navigate = useNavigate();

  const toggleDialog = () => setIsOpen(!isOpen);

  const handleChange = (event) => setQuery(event.target.value);

  const handleSearch = async () => {
    if (query.trim() === '') return;  
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://news-foniuhqsba-uc.a.run.app/');
      if (!response.ok) throw new Error('Error fetching articles');
      const data = await response.json();
      const filteredResults = data.filter((article) =>
        article.headline.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const handleArticleClick = (id) => {
    setIsOpen(false); 
    navigate(`/news/${id}`);
  };

  return (
    <>
      <button onClick={toggleDialog}>Search</button>

      {isOpen && (
        <div className="search-dialog">
          <div className="search-dialog-content">
            <button className="close-button" onClick={toggleDialog}>X</button>
            <h2>Search Articles</h2>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search by headline"
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {results.length > 0 && (
              <ul className="search-results">
                {results.map((item) => (
                  <li key={item.id} onClick={() => handleArticleClick(item.id)}>
                    <h3>{item.headline}</h3>
                    <p>{item.abstract}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
