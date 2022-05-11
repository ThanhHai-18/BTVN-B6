import React from "react";
import "../CSS/MangaContainer.css";

export default function MangaContainer({ photo, name, viewCount, commentCount, latesChapter, dateModified }){
    return (<div className="manga-container">
            <div className="manga-photo">
                <img src={photo} />
                <div>
                    <span className="view-count">{viewCount}</span>
                    <span className="comment-count">{commentCount}</span>
                </div>
            </div>
            <div className="manga-info">
                <b className="manga-name">{name}</b>
                <div>
                    <span className="latest-chapter">{latesChapter}</span>
                    <span className="date-modified">{dateModified}</span>
                </div>
            </div>
    </div>);
}