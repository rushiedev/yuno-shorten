import { useState } from "react";

import { url } from '../../api.json';

function Home({ header, footer }) {
    const [ longLink, setLongLink ] = useState('');

    const [ result, setResult ] = useState('');

    const [ urlResult, setURLResult ] = useState(null);

    const [ loading, setLoading ] = useState(false);

    const shortenLink = urlResult ? (
        <a href={urlResult} target="_blank" rel="noreferrer" id="url_result">{ urlResult }.</a>
    ) : (
        null
    )

    const shortenHandle = async () => {
        setLoading(true);

        const resp = await fetch(url + "/create", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-type": "application/json"
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify({ url: longLink })
        })

        resp.json().then((data) => {
            setLoading(false);

            data.data && setURLResult(url + "/" + data.data);

            setResult(data.data ? ("Your Shorten URL: ") : data.msg);

            setLongLink('');
        })
    }

    return (
        <>
            { header }
                <main id="home_page">
                    <div className="page">
                        <h1 className="text-center">Shorten a long link for free!</h1>

                        <div id="result">{ result } { urlResult && shortenLink }</div>

                        <input 
                            type="text" 
                            id="shorten-link" 
                            placeholder="Long link to shorten..." 
                            onChange={(e) => setLongLink(e.target.value)}
                            value={longLink}
                        />

                        <div className="d-flex shorten-div">
                            <button className="button" id="shorten-submit" disabled={loading} onClick={shortenHandle}>Shorten</button>
                        </div>
                    </div>
                </main>
            { footer }
        </>
    )
}

export default Home;