import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

function App() {
  return (
    <>
      <Heading>
        My App
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
        accusantium? Reiciendis saepe repellendus esse, mollitia minima odio,
        qui voluptatum dolorem maiores ad quam doloribus nesciunt repudiandae
        aliquid ipsum illum. Eos!
      </p>
    </>
  );
}

export default App;
