import React from "react";
// import { createRoot } from "react-dom";

function Button({ link }) {
    return <a href={link}>Find out more</a>
}

function CardHeader({ image, category }) {
    return (
        <header>
            <h4>{category}</h4>
            <img src={image} alt="" />
        </header>
    )
}

function CardBody({ date, title, content, link }) {
    return (
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button link={link} />
        </div>
    )
}

function Card({ image, category, date, title, content, link }) {
    return (
        <article>
            <CardHeader image={image} category={category} />
            <CardBody date={date} title={title} content={content} link={link} />
        </article>
    )
}

function Header({ title, subtitle }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

function News() {
    const someNews = [
        {
            title: 'CNN Acuire BEME 1',
            date: 'March 10, 2021',
            content: 'CNN purchased Casey Neistat\'s Beme',
            image: 'https://source.unsplash.com/user/erondu/600x400',
            category: 'News',
            link: '#'
        },
        {
            title: 'CNN Acuire BEME 2',
            date: 'March 10, 2021',
            content: 'CNN purchased Casey Neistat\'s Beme',
            image: 'https://source.unsplash.com/user/erondu/600x400',
            category: 'News',
            link: '#'
        },
        {
            title: 'CNN Acuire BEME 3',
            date: 'March 10, 2021',
            content: 'CNN purchased Casey Neistat\'s Beme',
            image: 'https://source.unsplash.com/user/erondu/600x400',
            category: 'News',
            link: '#'
        }
    ];

    return (
        <div>
            <Header title="Latest News" subtitle="Covering March 2022" />
            <Card
                title={someNews[0].title}
                date={someNews[0].date}
                content={someNews[0].content}
                image={someNews[0].image}
                category={someNews[0].category}
                link={someNews[0].link}
            />
            <Card
                title={someNews[1].title}
                date={someNews[1].date}
                content={someNews[1].content}
                image={someNews[1].image}
                category={someNews[1].category}
                link={someNews[1].link}
            />
            <Card
                title={someNews[2].title}
                date={someNews[2].date}
                content={someNews[2].content}
                image={someNews[2].image}
                category={someNews[2].category}
                link={someNews[2].link}
            />

            {/* with spread operator */}
            <Card {...someNews[0]} />
            <Card {...someNews[1]} />
            <Card {...someNews[2]} />

            {/* with map */}
            {someNews.map((news) => <Card {...news} key={news.title} />)}
        </div>
    );
}

// const root = createRoot(document.getElementById("root"));
// root.render(<News />);

export default News;