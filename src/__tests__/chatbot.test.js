import { fireEvent, render, screen } from "@testing-library/react"
import Chatbot from '../components/Chatbot/Chatbot';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";


// mock fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve('Success')
        }
    })
})

//mock scroll method
window.HTMLElement.prototype.scroll = jest.fn((a, b) => {
    return 1;
})

describe('Testing for chatbot component', () => {

    //test case 1
    test('Chatbot greet message should disappear on click of btn', async () => {
        render(
            <BrowserRouter>
                <Chatbot />
            </BrowserRouter>
        );
        const element = screen.getByRole('button');
        fireEvent.click(element);
        expect(element).not.toBeInTheDocument();
    })

    //test case 2
    test('Chatbot chat to appear on click of btn', () => {
        render(
            <BrowserRouter>
                <Chatbot />
            </BrowserRouter>
        );
        const element = screen.getByTestId('open-bot');
        fireEvent.click(element);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    })

    //test case 3
    test('Next Message Should appear on enter of user response', () => {
        render(
            <BrowserRouter>
                <Chatbot />
            </BrowserRouter>
        );
        const openChatBtn = screen.getByTestId('open-bot');
        fireEvent.click(openChatBtn);
        const inputBox = screen.getByRole('textbox');
        fireEvent.change(inputBox, { target: { value: 'hello' } });
        const sendBtn = screen.getByTestId('sendBtn');
        fireEvent.click(sendBtn);
        const newQuestion = screen.getByText('Choose The Service You Are Exploring.');
        expect(newQuestion).toBeInTheDocument();
    })
})