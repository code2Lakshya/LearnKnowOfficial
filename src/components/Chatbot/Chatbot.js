import { useEffect, useRef, useState } from "react";
import { questionList } from "../../utils/variables";
import { GoHubot } from "react-icons/go";
import toast from "react-hot-toast";
import Chat from "./Chat/Chat";
import './Chatbot.css';
import { IoCloseSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";


const Chatbot = () => {

    const [showChatbot, setShowChatbot] = useState(false);
    const [showMessage, setShowMessage] = useState(true);
    const [userInput, setUserInput] = useState([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [currentInput, setCurrentInput] = useState('');
    const elem = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (elem) {
            elem?.current?.scroll(0, elem?.current?.offsetHeight);
            setTimeout(() => elem?.current?.scroll(0, elem?.current?.offsetHeight), 1010);
        }
    }, [currentQ])

    const issueClickHandler = () => {
        closeHandler();
        navigate('/partner');
    }

    if (!showChatbot)
        return (
            <div className="chatbot">
                <div className="chatbot-icon" onClick={() => setShowChatbot(true)} data-testid='open-bot'><GoHubot /></div>
                {
                    showMessage &&
                    <div className="chatbot-greet">
                        <p>Welcome To </p>
                        <p>Learknow Digital !! </p>
                        <button onClick={() => setShowMessage(false)}><IoCloseSharp /></button>
                    </div>
                }
            </div>
        );
    if (currentQ === questionList.length)
        return (
            <div className="chatbot-retry">
                <div className="chatbot-btn">
                    <span onClick={resetHandler}><GrPowerReset /></span>
                    <span onClick={closeHandler}><IoCloseSharp /></span>
                </div>
                <div className="chatbot-message">
                    <p>Nice chatting with you!!</p>
                    <p>We Will Get Back To You As Soon As Possible.</p>
                    <button onClick={issueClickHandler}>Still Have Issues?</button>
                </div>
            </div>
        );

    const { question, options, inputType, name, multiInput } = questionList[currentQ];

    const changeHandler = (e) => {
        if (multiInput) {
            setUserInput(prev => [...prev, { name, answer: e.target.value }]);
            setCurrentInput('');
            setCurrentQ(currentQ + 1);
        }
        else {
            setCurrentInput(e.target.value);
        }
    }
    const clickHandler = (e) => {
        if (currentInput) {
            setUserInput(prev => [...prev, { name, answer: currentInput }]);
            setCurrentQ(currentQ + 1);
            if (currentQ + 1 === questionList.length) {
                let obj={};
                for(const item of userInput){
                    const name=item?.name;
                    obj[name]=item?.answer;
                }
                obj[name]=currentInput;
                fetch(process.env.REACT_APP_CHATBOT_FORM_URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                .then(()=>console.log('Sent'))
                .catch((error)=>console.log(error))
                setCurrentInput('');
            }
            setCurrentInput('');
        }
        else {
            toast.error('Input Is required');
        }
    }
    function resetHandler() {
        setCurrentQ(0);
        setCurrentInput('');
        setUserInput([]);
    }
    function closeHandler(e) {
        setShowChatbot(false);
        resetHandler();
    }

    return (
        <div className="chatbot-container">
            <div className="chatbot-btn">
                <span onClick={resetHandler}><GrPowerReset /></span>
                <span onClick={closeHandler}><IoCloseSharp /></span>
            </div>
            <div className="chatbot-content" ref={elem}>
                {
                    currentQ > 0 &&
                    userInput.map((item, index) => <div className="chat-container" key={index}>
                        <Chat chatType='bot' message={questionList[index].question} currentQ={currentQ} index={index} />
                        <Chat chatType='user' message={item.answer} currentQ={currentQ} index={index} />
                    </div>)
                }
                {
                    currentQ < questionList.length &&
                    <div className="current-question chatbot-chat">
                        {
                            multiInput ?
                                <div className="chat bot">
                                    <span><GoHubot /></span>
                                    <p className='message'>{question}</p>
                                </div>
                                :
                                <Chat chatType='bot' message={question} currentQ={currentQ} index={currentQ} key={currentQ} />
                        }
                        {
                            multiInput &&
                            options.map((item, index) => <div className="multi-input" key={index}>
                                <div className="input-box">
                                    <input type={inputType}
                                        name={name}
                                        value={item}
                                        onChange={changeHandler}
                                        id={name}
                                    />
                                    <label htmlFor={name}>{item}</label>
                                </div>
                            </div>)
                        }
                    </div>
                }
            </div>
            <div className="chatbot-input">
                {
                    !multiInput ?
                        <input type={inputType}
                            name={name}
                            value={currentInput}
                            onChange={changeHandler}
                            placeholder="Type An Answer"
                        />
                        :
                        <div className="demo-input"></div>
                }
                <button onClick={clickHandler} data-testid='sendBtn'><IoMdSend /></button>
            </div>
        </div >
    );
}
export default Chatbot;