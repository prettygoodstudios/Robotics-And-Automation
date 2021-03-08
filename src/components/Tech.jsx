import React, {useEffect, useState} from "react";


const Card = ({title, content, img, key, modal, showModal}) => {



    return (
        <div className="tech__cards__card" key={key}>
            <div className="tech__cards__card__front">
                <div className="tech__cards__card__mask"></div>
                <div className="tech__cards__card__title">
                    {title}
                </div>
                
                <img className="tech__cards__card__img" src={img} alt={title}/>
            </div>
            <div className="tech__cards__card__back">
                <div className="tech__cards__card__content">
                    {content}
                    <div>
                    {
                        modal != undefined && <button onClick={modal.toggle}>Learn More</button>
                    }
                    </div>
                </div>
            </div>
            {  modal && showModal && modal.modal }
        </div>
    )
}

const Modal = ({dismiss, show, title, children}) => {
    return (
    <div className="modal__mask">
        <div className="modal">
            <div className="modal__title-bar">
                <div className="modal__title-bar__title">
                    {title}
                </div>
                <div className="modal__title-bar__dismiss" onClick={dismiss}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="modal__body">
                {children}
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
            content: `Is the collection and processing of datasets that are too large or complicated to be processed by traditional tools such as Excel and business intelligence tools such as Tableau and Microsoft Power BI. Big data is described by five dimensions. These are volume, velocity, variety, veracity and value. If data does not satisfy these five dimensions, it is not considered big data. Volume and velocity describe the size of the data-set. Oftentimes these two dimensions get overemphasized due to them being easily quantifiable. In contrast, the variety, veracity and value of the data are often times more important. These dimensions measure the quality of the data. Large amounts of low quality data will produce low quality insights. While small quantities of high-quality data can produce insights with much higher value. A more simple way to think about this is garbage in garbage out.`,
            img: `https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg`
        },
        {
            title: `Machine Learning`,
            content: `Is a classification of algorithms that makes adjustments according to data. This allows these algorithms to adjust to trends and make judgement calls that were previously not possible by more traditional and rigid algorithms. Examples of applications of machine learning in the workplace include algorithmic trading bots and computer vision defect detectors. Machine learning algorithms require large amounts of data to produce quality insights. Therefore, big data is necessary for the proper implementation of machine learning in the workplace.`,
            img: `https://s27389.pcdn.co/wp-content/uploads/2020/10/how-kubernetes-extends-machine-learning-ml.jpeg`
        },
        {
            title: `Cyber Physical Systems`,
            content: `Cyber physical systems are systems composed of physical components such as workers, IIoT devices, Cobots and machines and virtual components such as cloud computing infrastructure, machine learning algorithms and enterprise information technology systems. Cyber physical systems enable increased collaboration and allow for the collection and processing of big data. In addition, cyber physical systems allow for algorithmic decision making and the streamlining of processes. Algorithmic decision making is the automation of making business decisions by using algorithms that are designed to optimize for certain outcomes. In addition, cyber physical systems can increase the accuracy of production forecasts as all workers, processes and machinery are monitored. This gives data analysts and algorithms access to large amounts of high-quality data to make forecasts.`,
            img: `https://media.rs-online.com/image/upload/infographics/uk/industry40/img/Machine.gif`
        },
        {
            title: `Cobots`,
            content: `Cobots are collaborative robots. These robots are designed to work alongside humans. This is in contrast to traditional industrial robots that work in fenced off areas. The collaboration of human workers and robots allows for synergies that were once not possible. Cobots work in what are called human robot collaboration (HRC) workspaces. These workspaces allow cobots to focus on tasks that they are good at such as fast and accurate movements and allow human workers to use their creativity and problem solving skills. HRC workspaces are the way of the future as it is not practical or possible to completely automate many processes due to the dexterity and problem solving required to complete certain tasks. Special considerations for both safety and ergonomics must be taken in HRC workspaces. These are serious concerns that are oftentimes extremely difficult to address. One way these concerns can be addressed is by designing cobots to be conforming. A conforming robot is a robot that has soft components and whose mechanical joints give to external forces. For example, if a conforming robot accidentally hits your arm the mechanical joints will give in much like the elbow in a human arm. The conforming nature of many cobots greatly improves their safety. Another solution to these concerns is  using machine learning algorithms to control portions of a cobots behavior. This allows the cobot to adapt to the unpredictable and dynamic actions of human workers. To conclude cobots enable automation in ways that were once not sought possible, but have significant challenges to successful implementation.`,
            img: `https://www.ge.com/news/sites/default/files/Reports/2020-03/tumblr_inline_nihd6aB9bT1qzgziy.jpg`,
            showModal: false
        }
    ]

    

    const [cardState, setCards] = useState(cards);

    const toggleModal = (id) => {
        let copy = [...cardState];
        copy[id].showModal = !copy[id].showModal;
        console.log(copy)
        setCards(copy);
    }

    const modals = {
        5: {
            modal: (
                <Modal title="Cobots" dismiss={() => toggleModal(5)} show={true}>
                    Cobots are collaborative robots. These robots are designed to work alongside humans. This is in contrast to traditional industrial robots that work in fenced off areas.
                </Modal>
            ),
            toggle: () => {
                toggleModal(5);
            }
        }
    }

    return (
        <div className="section" id="tech">
            <div className="section__title">What are some of the technologies that are enabling automation?</div>
            <div className="section__content">Hover on a card to learn more about that specific technology.</div>
            <div className="tech__cards">
                {
                    cardState.map((c, i) => Card({...c, modal: modals[i]}) )
                }
            </div>
        </div>
    )
}

export default Tech;