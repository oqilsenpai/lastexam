import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
}

const AccountPage: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<any>(null); 

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      if (!response.ok) {
        setErrorMessage("Ошибка запроса, попробуйте позже.");
        return;
      }

      const responseData = await response.json();

      if (responseData.token) {
       
        localStorage.setItem("auth_token", responseData.token);
        alert("Token received and stored successfully!");

        
        await fetchUserData(responseData.token);
      } else {
        setErrorMessage("Не удалось получить токен. Пожалуйста, проверьте учетные данные.");
      }
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "Произошла ошибка при отправке данных.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users/1", { 
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setErrorMessage("Ошибка при получении данных пользователя.");
        return;
      }

      const userData = await response.json();
      setUserData(userData); 
    } catch (error: any) {
      console.error("Error fetching user data:", error);
      setErrorMessage(error.message || "Не удалось получить данные пользователя.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 mx-auto text-center">
        Мой аккаунт
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex gap-16">
          <div>
            <img src="images/mypro.png" className="mt-8" alt="My Orders Icon" />
            <div>
              <a href="/">
                <img className="mt-52" src="images/exit.png" alt="Exit Icon" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl mt-8">Изменить профиль</h2>
            <form className="max-w-sm mx-auto w-[300px] mb-6" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-600">
                Логин
              </label>
              <input
                id="username"
                type="text"
                placeholder="Введите ваш логин"
                {...register("username", { required: "Логин обязателен" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.username && <p className="text-red-500 text-xs mt-2">{errors.username.message}</p>}

              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600 mt-6">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                placeholder="Введите ваш пароль"
                {...register("password", { required: "Пароль обязателен" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password.message}</p>}

              <button 
                type="submit" 
                className="bg-[#FCA311] w-[200px] h-[45px] rounded-md mx-3 font-semibold mt-8"
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Сохранить"}
              </button>
            </form>

            {errorMessage && <p className="text-red-500 text-xs mt-4">{errorMessage}</p>}

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
