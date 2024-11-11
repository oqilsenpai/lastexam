import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" x py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
   
        <div>
          <h2 className="text-xl font-semibold mb-6">Полезные Ссылки</h2>
          <ul className="space-y-4 text-sm">
            <li>О Нас</li>
            <li>Пользовательское Соглашение</li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6">Наши Страницы</h2>
          <div className="flex space-x-6">
            <img src="images/11.png" alt="Facebook" className="w-8 h-8" />
            <img src="images/22.png" alt="Instagram" className="w-8 h-8" />
            <img src="images/33.png" alt="Twitter" className="w-8 h-8" />
            <img src="images/44.png" alt="LinkedIn" className="w-8 h-8" />
          </div>
        </div>

     
        <div>
          <h2 className="text-xl font-semibold mb-6">Тех. поддержка</h2>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <img src="images/phone.png" alt="Phone" className="w-6 h-6" />
            <span>+998 99 880 80-80</span>
          </div>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <img src="images/email.png" alt="Email" className="w-6 h-6" />
            <span>info@utopia.uz</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <img src="images/home.png" alt="Address" className="w-6 h-6" />
            <span>г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8  pt-4">
        <h3 className="text-sm text-gray-400">©️ 2021 Utopia | Все права защищены</h3>
      </div>
    </footer>
  );
};

export default Footer;
