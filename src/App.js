import './App.css';
import Title from './components/Title';
import Contents from './components/Contents';
import Comments from './components/Comments';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('title');
  const [contents, setContents] = useState('contents');

  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditContents, setIsEditContents] = useState(false);

  const toggleTitleHandler = () => {
    setIsEditTitle(!isEditTitle);
  };

  const toggleContentsHandler = () => {
    setIsEditContents(!isEditContents);
  };

  return (
    <div>
      <h1>NOTICE</h1>
      <Title
        title={title}
        setTitle={setTitle}
        isEditTitle={isEditTitle}
        toggleHandler={toggleTitleHandler}
      />
      <Contents content={contents} setContent={setContents} isEditContents={isEditContents}></Contents>
      <button onClick={toggleContentsHandler}>{isEditContents ? "Save" : "Edit"}</button>
      <Comments></Comments>
    </div>
  );
}

export default App;
