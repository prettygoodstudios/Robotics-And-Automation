import React from "react";

const Use = ({title, imgs, content}) => {
    return (
        <div className="uses__use">
            <div className="uses__use__title">{title}</div>
            <div className="users__use__imgs">
                {
                    imgs.map((img, i) => {
                        return (
                            <img className="uses__use__img" src={img} key={i}/>
                        )
                    })
                }
            </div>
            <div className="uses__use__content">{content}</div>
        </div>
    )
}

const Uses = ({}) => {
    const data = [
        {
            title: `The Port of Long Beach Los Angeles`,
            imgs: [
                `https://content.fortune.com/wp-content/uploads/2018/01/rtsprcw.jpg`
            ],
            content: `The Port of Long Beach Los Angeles has completely automated their docking facility. The automation project used IIoT devices and cyber physical systems to coordinate and control automated forklifts, trucks and cranes. Their implementation of automation has decreased turnaround times for trucks utilizing the port from 96 to 35 minutes. Turnaround time is the time it takes for a truck to enter and leave the facility. This has resulted in trucks spending less time idling. This is great for the truckers that utilize the port as they are paid by the load. Prior to the automation of the dock, there was significant tension between the salaried union dock workers and the mostly immigrant truck drivers. The union dock workers were not incentivized to work efficiently as the union provided them great job security and they are paid salary. This misaligned the dockworkers incentives from the incentives of the port and its clients. Automation was able to solve this issue as the automated equipment is able to consistently operate twenty-four hours seven days a week.`
        },
        {
            title: `Amazon Smart Warehouses`,
            imgs: [
                
            ],
            content: `Through Amazon’s acquisition of Kiva robotics Amazon has implemented robotic shelves in its warehouses. These shelves are able to bring items to pickers in its warehouses. This eliminates the non-value adding task of walking to each item to put together an order. Prior to the implementation of the Kiva robots Amazon pick workers would spend 70% of their time working walking around the warehouse. That percentage is now 0%. The associates also enjoy the new work experience as it is less physically strenuous. The Kiva robots are connected to Amazon’s cloud computing platform Amazon Web Services (AWS). This allows Amazon to use sophisticated queuing algorithms to coordinate the movements of the robots. Amazon also uses big data techniques to forecast consumer demand and place the right amount of inventory in the right warehouses. These techniques allow Amazon to get away with less inventory in its warehouses. Amazon’s use of automation allows it to run a lean and mean machine.`
        },
        {
            title: `Goldman Sachs Algorithmic Trading`,
            imgs: [
                `https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1147977502%2F0x0.jpg%3Ffit%3Dscale`
            ],
            content: `Goldman Sachs currently employs more software-engineers than financial professionals. These software engineers utilize machine learning and big data techniques to build algorithms that can identify and act on trends in the market. These algorithms on average are able to outperform their human counterparts. Investment banks that have not leveraged these technologies have been left behind. The finance industry is an example that firms that embrace automation will remain competitive, while those that don’t will be put at a disadvantage. Machine learning’s ability to make judgement calls and handle fuzzy logic gives it the ability to automate tasks in traditionally white-collar jobs and industries. No job is safe from automation. Therefore, all workers should prepare themselves for the automation revolution.`
        }
    ]
    return (
        <div className="section" id="uses">
            <div className="section__title">What are some real world use cases of these technologies?</div>
            <div className="uses__use">
                {
                    data.map(d => Use(d))
                }
            </div>
        </div>
    )
}

export default Uses;