import { useState } from 'react';
import DateInput from './components/DateInput';
import OutputField from './components/OutputField';
import calculateAge from './utils/calculateAge';
import './styles/App.scss';
import ErrorMessage from './components/ErrorMessage';

function App() {
    const [age, setAge] = useState(null);
    const [error, setError] = useState(null);

   // inside App component
    const handleCalculateClick = (date, errorMessage) => {
    if (errorMessage) {
      setError(errorMessage);
      setAge(null);
      return;
    }
    if (!date) {
      // If null is received, clear the age and error state
      setAge(null);
      setError(null);
    } else {
      // Calculate age
      const ageResult = calculateAge(date.day, date.month, date.year);
      if (ageResult.error) {
        setError(ageResult.error);
        setAge(null);
      } else {
        setError(null);
        setAge(ageResult);
      }
    }
  };
  
    

    return (
        <main className="App">
            <DateInput onCalculateClick={handleCalculateClick} />
            {error && <ErrorMessage errorObject={error} />}
            { <OutputField age={age} />}
        </main>
    );
}

export default App;
