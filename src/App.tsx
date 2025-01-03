import { useState } from 'react';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import Test from './components/Text';

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];
  const [open,setOpen] = useState(true)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-8">
      <Tabs tabs={tabs} />
      <Test/>
      <Modal isOpen={open} onClose={() => {setOpen(false)}} >hello world</Modal>
    </div>
  );
};

export default App;
