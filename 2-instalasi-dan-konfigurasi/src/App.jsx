import { useState } from 'react';
import Header from './components/Header';

function App() {
  // tidak perlu pakai React.useState(x) lagi karena sudah di-import dengan nama useState dibagian import
  const [display, setDisplay] = useState(0);

  const DisableResetButton = display !== 'Done!';
  const DisableOtherButton = display === 'Done!';

  function handleMinusButton() {
    if (display <= 0) {
      setDisplay('Done!');
    } else {
      setDisplay(display - 1);
    }
  }

  function handlePlusButton() {
    if (display >= 10) {
      setDisplay('Done!');
    } else {
      setDisplay(display + 1);
    }
  }

  function handleResetButton() {
    setDisplay(0);
  }

  return (
    <>
      <Header />
      <button
        style={{ display: 'inline' }}
        onClick={handleMinusButton}
        disabled={DisableOtherButton}
      >
        -
      </button>

      <p
        style={{ display: 'inline', marginLeft: '10px' }}
      >
        {display}
      </p>

      <button
        style={{ display: 'inline', marginLeft: '10px' }}
        onClick={handlePlusButton}
        disabled={DisableOtherButton}
      >
        +
      </button>

      <button
        style={{ display: 'inline', marginLeft: '15px' }}
        onClick={handleResetButton}
        disabled={DisableResetButton}
      >
        Reset
      </button>
    </>
  );
}

export default App
