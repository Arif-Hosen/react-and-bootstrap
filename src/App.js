import logo from './logo.svg';
import './App.css';
import Card from './component/News/News';
import { ButtonGroup, Button, Spinner, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './component/News/News';



function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=fba6f4258d124d148fac350236a43a58")
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={2} md={4} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );
}

export default App;
