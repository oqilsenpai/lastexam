import { FC, useState } from "react";
import { Link } from "react-router-dom";

const LoginSecond: FC = () => {
  const [code, setCode] = useState<string[]>(new Array(6).fill("")); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  return (
    <div className="bg-[#fca211c2] min-h-screen w-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
          <img
            className="absolute z-10"
            src="images/poslogin.png"
            alt="My Orders Icon"
          />

          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white relative z-20">
            Подтверждение номера
          </h2>

          <img
            className="bg-white"
            src="images/secondpo.png"
            alt="My Orders Icon"
          />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <Link to="/login">
              <button className="text-[#fca211] font-semibold mb-4 hover:underline">
                ← Вернуться
              </button>
            </Link>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Введите код из СМС
              </h2>
              <div className="text-sm text-gray-500">
                <h2>Получить повторный код можно через 1:48</h2>
              </div>
            </div>

            <div className="flex gap-3 mb-4 justify-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-12 text-center border rounded-md text-xl font-semibold"
                />
              ))}
            </div>

            <div className="flex gap-3 mb-4 justify-center">
              <Link to="/login">
                <button className="bg-[#FCA311] w-[300px] h-[45px] rounded-md mx-3">
                  <h2>Зарегистрироваться</h2>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSecond;
