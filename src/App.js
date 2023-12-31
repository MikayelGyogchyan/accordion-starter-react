import { useState } from "react";
import "./style.css";

const faqs = [
  {
    id: 1,
    title: "Which kind of code do you write when using React.js?",
    text: "Declarative JavaScript Code.",
  },
  {
    id: 2,
    title: "Which statement is correct?",
    text: "With React, you build a component tree with one root component that's mounted into a DOM node.",
  },
  {
    id: 3,
    title: "What does 'component tree' mean?",
    text: "You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.",
  },
  {
    id: 4,
    title: "Which value should you pass to event listener props like onClick?    ?",
    text: "A pointer at the function that should execute when the event occurs",
  },
  {
    id: 5,
    title: "Why do you need this extra 'state' concept instead of regular JS variables which you change and use?",
    text: "Because standard JS variables don't cause React compenents to be re-evaluated",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
          curOpen={curOpen} 
          onOpen={setCurOpen} 
          title={el.title}
          num={i} 
          key={el.id}
        >{el.text}</AccordionItem>
      ))}

        <AccordionItem 
          curOpen={curOpen} 
          onOpen={setCurOpen} 
          title='What are Higher Order Components(HOC)?'
          num={22} 
          key='Test 1'
        >Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.</AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen
  function handleToggle() {
    onOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? "open" : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
