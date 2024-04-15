import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setloading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setloading(true);

            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=d8c5ca4a342d49e6853e147e6a63cfff`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setNews([...news, ...data.articles]);
            setPage(page + 1);
            console.log(news.length);
            console.log(data.totalResults);
            setloading(false);
            // console.log('api called');
            if (news.length >= data.totalResults) {
                setHasMore(false);
            }
        } catch (error) {
            console.log('error');
        }
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container my-5">
                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<Loading />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    refreshFunction={fetchData}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                >
                    <div className="row">
                        {
                            news.map((e, index) => (
                                <div className="col-4" key={index}>
                                    <NewsCard imageUrl={e.urlToImage} description={e.description} title={e.title} readMore={e.url} />
                                </div>
                            ))
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    page: '1',
    pageSize: '9',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}
