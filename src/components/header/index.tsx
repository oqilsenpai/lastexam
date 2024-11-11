import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="container flex justify-between max-w-[1400px] mx-auto my-[30px]">
    
    <div className="relative flex items-center gap-2 mb-6">
  <input
    placeholder="Найти объявления..."
    type="text"
    className="px-3 w-[250px] py-2 border rounded-md pl-10" 
  />
  <img
    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
    src="images/search.png"
    alt="Search Icon"
  />
</div>


<div className="flex gap-[35px]">

<div className="flex gap-5 ">
  <Link to="/formapage">
<button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md text-white mx-3">
  Разместить объявление
</button></Link>
<Link to="/accountpage">
  <img
 
    src="images/MyOrders.png"
    alt="My Orders Icon"
  /></Link>
  <Link to="/favoritespage">
  <img
   
    src="images/heart.png"
    alt="Favorites Icon"
  /></Link>
  <Link to="/login">
  <img
  className="mx-6"
    src="images/SignUp.png"
    alt="Sign Up Icon"
  />
</Link>

<div>
<select
  id="language"
  name="language"
  className="border w-[80px] rounded-md px-3 py-2"
>
  <option value="en">eng</option>
  <option value="ru">ru</option>
  <option value="uz">uz</option>
</select>
</div> 
</div>
</div>

    </header>
  );
};

export default Header;

