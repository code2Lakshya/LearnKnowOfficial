import { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import './Chat.css';
import { GoHubot } from "react-icons/go";

let c;
const Chat = ({ chatType, message ,currentQ,index}) => {

    const [ showAnimation, setShowAnimation ] = useState(currentQ===index ? true : false);


    useEffect(()=>{
        c= setTimeout(()=>setShowAnimation(false),1000)
       return ()=> clearTimeout(c);
    },[])

    return (
        <div className={`chat ${chatType}`}>
            <span><GoHubot /></span>
            {
                !showAnimation ?
                    <p className='message'>{message}</p>
                    :
                    <p id='dot'>
                    <span><GoDot /></span>
                    <span><GoDot /></span>
                    <span><GoDot /></span>
                    </p>
            }
        </div>
    );
}
export default Chat;