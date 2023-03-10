import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button disable>Hello</Button>
      <Button 
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button 
        btnType={ButtonType.Link} 
        href="http://www.baidu.com"
        disable
      >
        Baidu Link
      </Button>
    </div>
  );
}

export default App;
