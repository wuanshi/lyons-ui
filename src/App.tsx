import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Input from './components/Input/input';

const App: React.FC = () => {
  return (
    <div className="App">
      <Input disable />
      <Input />
      <Input size='lg'/>
      <Button>Default</Button>
      <Button btnType={ButtonType.Primary} disable>Hello</Button>
      <Button 
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button btnType={ButtonType.Primary}>
        Primary
      </Button>
      <Button btnType={ButtonType.Danger}>
        Danger
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
