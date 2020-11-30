import React from "react";
import s from './News.module.css';

const News = () => {
    return (
        <div className={s.item}>
            <img src="https://sites.google.com/site/newsmegoyou/_/rsrc/1450812110730/home/News_765x350px.jpg"/>
            <div>
                <p>News</p>
            </div>
        </div>
    );
};

export default News;
