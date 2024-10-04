import { useState } from 'react';
import { Field } from '../field';
import { generatePassword } from '../../utils/generatePass';

function App() {
  const [length, setLength] = useState<number>(8);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [copyMessage, setCopyMessage] = useState<string>('');

  const handleGeneratePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = generatePassword({
      length,
      includeSpecialChars,
      includeNumbers
    });
    setGeneratedPassword(password);
    setCopyMessage('');
  };

  const handleCopyToClipboard = () => {
    if (generatedPassword) {
      navigator.clipboard
        .writeText(generatedPassword)
        .then(() => {
          setCopyMessage('Пароль скопирован');
        })
        .catch(() => {
          setCopyMessage('Ошибка при копировании');
        });
    }
  };

  return (
    <section className='password-generator container'>
      <div className='password-generator__header'>
        <h1 className='password-generator__title'>Генератор паролей</h1>
        <p className='password-generator__subtitle'>
          Надежный пароль без дополнительных усилий
        </p>
      </div>
      <div className='password-generator__settings'>
        <form className='password-generator__form' onSubmit={handleGeneratePassword}>
          <Field
            label='Длина пароля:'
            type='number'
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <Field
            label='Добавить специальные символы:'
            type='checkbox'
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <Field
            label='Добавить цифры:'
            type='checkbox'
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <button type='submit' className='password-generator__button'>
            Сгенерировать
          </button>
        </form>
        <div className='password-generator__result'>
          <h2 className='password-generator__result-title'>Ваш пароль:</h2>
          <p
            className='password-generator__result-password'
            onClick={handleCopyToClipboard}
            style={{ cursor: 'pointer' }}>
            {generatedPassword}
          </p>
          {copyMessage && (
            <p className='password-generator__copy-message'>{copyMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;

