/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './style.css';

const Main = () => {
    const [input, setInput] = useState('');
    const [button, setButton] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const API = 'https://newsapi.org/v2/top-headlines?country=id';
    const API_SEARCH = 'https://newsapi.org/v2/everything?q=';
    // API KEY dibawah ini bisa hangus jadi bisa diganti pakai akun NEWS API kalian sendiri
    const API_KEY = '&apiKey=a7912003a9a04585b9b4ccd2646523bb'

    useEffect(() => {
        if(input === '') return(
            fetch(API + API_KEY)
                .then(res => res.json())
                .then(data => {
                    setData(data.articles);
                    setLoading(false);
                })
                .catch(err => err.message)
        )
        else return(
            fetch(API_SEARCH + input + API_KEY)
                .then(res => res.json())
                .then(data => {
                    setData(data.articles);
                    setLoading(false);
                })
                .catch(err => err.message)
        )
    }, [button])

    return(
        <main>
            <div className="input">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="masukan"
                />
                <input type="submit" value="KIRIM" className="button" onClick={() => {
                    setLoading(true)
                    setButton(!button)
                }} />
            </div>
            <div className="list">
                {
                    loading ? 'Loading' :
                    data.map((item, i) => {
                        return(
                            <article key={i}>
                                <img src={item.urlToImage} alt="gambar tidak tersedia"/>
                                <h3>{item.title}</h3>
                                <h4>Author : {item.author}</h4>
                                <p>{item.description}</p>
                                <a href={item.url} target="_blank" rel="noreferrer"><button>selengkapnya</button></a>
                            </article>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main;