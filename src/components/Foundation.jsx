import React from "react";

const Foundation = ({}) => {
    return <div className="section">
        <div className="section__title">Foundational knowledge to understand automation in the supply chain</div>
        <div className="section__content">
            The following are essential terms and concepts that are required to understand automation.
        </div>
        <div className="foundation__essentials">
            <div className="foundation__essentials__title">Processes</div>
            <img src="https://i.pinimg.com/originals/dd/d0/dd/ddd0dd43e41cba6c587bdee4bb5fccb2.png" className="foundation__essentials__img"/>
            <div className="foundation__essentials__content">
                A process is a series of tasks that take a series of inputs and produce value added outputs. The inputs of a process can be anything from raw materials and information to human capital. Each step in a process should add value to the inputs. If this is not the case, then there are steps that management can take to optimize the process. The understanding of processes is absolutely essential to automation as automation is simply the act of using machinery to eliminate and reduce non-value adding steps of the process. 
            </div>
            <div className="foundation__essentials__title">Algorithims</div>
            <img src="https://lucidchart.zendesk.com/hc/article_attachments/360001078606/algorithm-flowchart.png" className="foundation__essentials__img"/>
            <div className="foundation__essentials__content">
            The term algorithm may seem abstract and scary, if you don’t have a math or computer science background. Contrary to this popular belief, an algorithm is quite simple: it is simply a list of formalized steps that take a series of inputs and produce a series of outputs. This sounds eerily familiar right. An algorithm is simply a more formalized version of a process. An algorithm describes each step in detail; this allows machinery and computers to execute each step. This is how it differs from a process. Algorithms can range in complexity from the recipe to bake a batch of cookies to the series of steps required to identify edges and objects in photos. Algorithms are required in automation as machinery can only perform tasks that they are explicitly instructed to do. In addition, algorithms allow the machinery to understand and execute business processes. Without algorithms automation would simply not be possible.
            </div>
        </div>
    </div>
}

export default Foundation;