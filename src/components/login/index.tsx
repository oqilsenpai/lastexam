import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

       
        localStorage.setItem("auth_token", data.token);

        
        navigate("/loginsecond"); 
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fca211c2] min-h-screen w-full">
      <div className="bg-white">
        <div className="flex justify-between container mx-auto pt-3">
          <div>
            <a href="/">
              <img src="images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-9">
              <div>
                <h2>+998 99 880 80-80</h2>
              </div>
              <div>
                <button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md text-white">
                  Разместить объявление
                </button>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-5">
                <img src="images/MyOrders.png" alt="My Orders Icon" />
                <img src="images/heart4.png" alt="Favorites Icon" />
                <img src="images/SignUp.png" alt="Sign Up Icon" />
              </div>
              <div>
                <select
                  id="language"
                  name="language"
                  className="border rounded-md w-[70px] px-3 py-2"
                >
                  <option value="en">eng</option>
                  <option value="ru">ru</option>
                  <option value="uz">uz</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
          <img
            className="absolute z-10"
            src="images/poslogin.png"
            alt="Login Illustration"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white relative z-20">
            Войти
          </h2>
          <img className="bg-white" src="images/imppart.png" alt="Decorative Image" />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <div className="p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <button
                type="submit"  
                className={`flex w-full justify-center rounded-md bg-[#FCA311] px-3 py-1.5 text-sm font-semibold text-white shadow-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Log In'}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-500 mb-5">
            Уже есть аккаунт?{" "}
            <a href="#" className="font-semibold text-yellow-600">
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
