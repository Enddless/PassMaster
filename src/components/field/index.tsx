type TTypeInputProps = {
  type: string;
  label: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  specialchar?: boolean;
};

export const Field = ({
  label,
  type,
  value,
  checked,
  onChange,
  specialchar
}: TTypeInputProps) => {
  const isCheckbox = type === 'checkbox';
  return (
    <label className='password-generator__label'>
      {label}

      {isCheckbox ? (
        <>
          <input
            className='password-generator__input checkbox checkbox--agreement'
            type={type}
            value={value}
            checked={checked}
            onChange={onChange}
            pattern={specialchar ? '[!@#$%^&*_|<>?;^.,~{}[]-"]*' : undefined}
            onKeyPress={(event) => {
              // Проверяем, если это поле для специальных символов
              if (specialchar && !/[!@#$%^&*_|<>?;^.,~{}[\]"-]/.test(event.key)) {
                event.preventDefault(); // предотвращаем ввод недопустимых символов
              }
            }}
          />
          <span className='checkbox--fake'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24px'
              height='24px'>
              <path d='M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z' />
            </svg>
          </span>
        </>
      ) : (
        <input
          className='password-generator__input'
          type={type}
          value={value}
          checked={checked}
          onChange={onChange}
          pattern={specialchar ? '[!@#$%^&*_|<>?;^.,~{}[]-"]*' : undefined}
          onKeyPress={(event) => {
            // Проверяем, если это поле для специальных символов
            if (specialchar && !/[!@#$%^&*_|<>?;^.,~{}[\]"-]/.test(event.key)) {
              event.preventDefault(); // предотвращаем ввод недопустимых символов
            }
          }}
        />
      )}
    </label>
  );
};
