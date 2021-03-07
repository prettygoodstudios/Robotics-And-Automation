import React from "react";


const Card = ({title, content, img, key}) => {
    return (
        <div className="tech__cards__card" key={key}>
            <div className="tech__cards__card__front">
                <div className="tech__cards__card__title">
                    {title}
                </div>
                <img className="tech__cards__card__img" src={img} alt={title}/>
            </div>
            <div className="tech__cards__card__back">
                <div className="tech__cards__card__content">
                    {content}
                </div>
            </div>
        </div>
    )
}

const Tech = ({}) => {

    const cards = [
        {
            title: `IIoT`,
            content: `Industrial internet of things devices are devices that are connected to the internet and facilitate the remote monitoring and control of business processes. IIoT devices can range from robotic shelves in Amazon distribution centers to computer vision powered defect detectors on assembly lines. `,
            img: `https://specials-images.forbesimg.com/imageserve/5fac01cee9769955286a8551/960x0.jpg?fit=scale`
        },
        {
            title: `Cloud Computing`,
            content: `Cloud computing is a term used to describe computing systems that can be remotely accessed from a variety of locations. Examples of cloud computing that most everyday consumers are aware of are Google Drive, Spotify and Netflix. In business settings cloud computing facilitates the collection and processing of big data. This helps businesses gain key insights from their customers and forecast demand. In addition, it allows businesses to aggregate the data from their IIoT devices and deploy algorithms that control their IIoT devices and businesses processes in a coordinated and optimal manner. `,
            img: `https://dcode.co/wp-content/uploads/2019/03/cloud-computing-and-cloud-technology.jpg`
        },
        {
            title: `Big Data`,
            content: `Is the collection and processing of datasets that are two large or complicated to be processed by traditional tools such as Excel and business intelligence tools such as Tableau and Microsoft Power BI. Big data is described by five dimensions. These are volume, velocity, variety, veracity and value. If data does not satisfy these five dimensions it is not considered big data. Volume and velocity describe the size of the data-set. Oftentimes these two dimensions get overemphasized due to them being easily quantifiable. In contrast, the variety, veracity and value of the data are often times more important. These dimensions measure the quality of the data. Large amounts of low quality data will produce low quality insights. While small quantities of high quality data can produce insights with much higher value. A more simple way to think about this is garbage in garbage out. `,
            img: `https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg`
        }
    ]

    return (
        <div className="section">
            <div className="section__title">What are some of the technologies that are enabling automation?</div>
            <div className="section__content">Hover on card to learn more about that specific technology.</div>
            <div className="tech__cards">
                {
                    cards.map((c, i) => Card({...c, key: i}) )
                }
            </div>
        </div>
    )
}

export default Tech;