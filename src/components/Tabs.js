import './Tabs.scss'
import { useState } from 'react';

function Tabs(props) {

    const [currentTab,setCurrentTab] = useState(0);

    const accordionClick = (e,i) => {
        if(i === currentTab){
            setCurrentTab(-1)
        }else{
            setCurrentTab(i);
            const target = e.currentTarget;
            setTimeout(function() {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }, 100);
            
        }
    }

    return (
        <div className='tabs'>
            <ul className="list-unstyled mb-0 d-none d-md-flex">
            {props.data.map((item,i) => (
            <li key={i}><button onClick={() => setCurrentTab(i)} className={`tabs__button--tabs ${i === currentTab ? "tabs__button--tabs--active" : ""}`} key={i}>{item.title} <span className='visually-hidden'>${i === currentTab ? " - active" : " - inactive"}</span></button></li>
        ))}
            </ul>
            <ul className='list-unstyled'>
        {props.data.map((item,i) => (
            <li key={i}>
            <button onClick={(e) => accordionClick(e,i)} className={`tabs__button--accordion d-block d-md-none ${i === currentTab ? "tabs__button--accordion--active" : ""} `}>{item.title} <span className='visually-hidden'>${i === currentTab ? " - collapse" : " - expand"}</span></button>
            { i === currentTab &&
                <div dangerouslySetInnerHTML={{ __html: item.content }} className='tabs__content'></div>
            }
            </li>
        ))}
        </ul>
    </div>)
}

export default Tabs;