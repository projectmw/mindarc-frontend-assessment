import './Tabs.scss'
import { useState } from 'react';

function Tabs(props) {

    const [currentTab,setCurrentTab] = useState(0);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

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
            <div className="d-none d-md-block">
            {props.data.map((item,i) => (
            <button onClick={() => setCurrentTab(i)} className={`tabs__button--tabs ${i === currentTab ? "tabs__button--tabs--active" : ""}`} key={i}>{item.title}</button>
        ))}
            </div>
        {props.data.map((item,i) => (
            <div key={i}>
            <button onClick={(e) => accordionClick(e,i)} className={`tabs__button--accordion d-block d-md-none ${i === currentTab ? "tabs__button--accordion--active" : ""} `}>{item.title}</button>
            { i === currentTab &&
                <div dangerouslySetInnerHTML={{ __html: item.content }} className='tabs__content'></div>
            }
            </div>
        ))}
    </div>)
}

export default Tabs;