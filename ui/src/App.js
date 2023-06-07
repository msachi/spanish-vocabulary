import './App.css';
import { useState } from 'react';
import { SelectionRow } from './App.styles'
import { Header } from './components/Header/Header';
import { LanguageCard } from './components/LanguageCard/LanguageCard';
import { CategoryCard } from './components/CategoryCard/CategoryCard';
import { Welcome } from './components/Welcome/Welcome';

function App() {
  const [ language, setLanguage ] = useState();
  const [ category, setCategory ] = useState();

  return (
    <div className="App">
      <Header />
      <Welcome />
      <SelectionRow>
        <LanguageCard language='spanish' selected={language === 'spanish'} onClick={() => setLanguage('spanish')} />
        <LanguageCard language='english' selected={language === 'english'} onClick={() => setLanguage('english')} />
      </SelectionRow>
      <SelectionRow>
        <CategoryCard category='nouns' selected={category === 'nouns'} onClick={() => setCategory('nouns')} />
        <CategoryCard category='adjectives' selected={category === 'adjectives'} onClick={() => setCategory('adjectives')} />
        <CategoryCard category='verbs' selected={category === 'verbs'} onClick={() => setCategory('verbs')} />
        <CategoryCard category='adverbs' selected={category === 'adverbs'} onClick={() => setCategory('adverbs')} />
        <CategoryCard category='other' selected={category === 'other'} onClick={() => setCategory('other')} />
      </SelectionRow>
    </div>
  );
}

export default App;
