import React, { useEffect } from 'react'

const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        // getCovidData();
    }, []);


    return (
        <>
            <h1> Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className="card__inner">
                            <p className='card__name'><span>OUR</span> COUNTRY</p>
                            <p  className='card__total card__small'>India</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Covid