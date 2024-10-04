type GeneratePasswordProps = {
  length: number;
  includeSpecialChars: boolean;
  includeNumbers: boolean;
};

export const generatePassword = ({
  length,
  includeSpecialChars,
  includeNumbers
}: GeneratePasswordProps): string => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let password = '';
  const standardSpecialChars = '!@#$%^&*_|<>?;^.,~{}[]-"'; // стандартные символы

  // Всегда добавляем цифры, если чекбокс установлен
  if (includeNumbers) {
    chars += '0123456789';
  }

  // Генерация пароля
  if (includeSpecialChars) {
    // Обязательно добавляем два специальных символа, если длина пароля больше 10
    const specialCharCount = length > 10 ? 2 : 1;
    for (let i = 0; i < specialCharCount; i++) {
      password +=
        standardSpecialChars[Math.floor(Math.random() * standardSpecialChars.length)];
    }
  }

  // Добавляем буквы и, если нужно, цифры до достижения нужной длины
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  // Перемешиваем символы, чтобы специальные символы не были всегда в начале
  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  // Обеспечиваем, что пароль соответствует нужной длине
  return password.slice(0, length);
};
