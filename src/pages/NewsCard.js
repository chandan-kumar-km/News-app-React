import React from 'react'

export default function NewsCard(props) {
    return (
        <>

            <span className="card my-3">
                <a href={props.readMore} target='_blank' style={{ color: "black", font: "Arial", padding: ".5vw", textDecoration: "none" }}>
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <span className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </span>
                </a>
            </span>
        </>
    )
}
