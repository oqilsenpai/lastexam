import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import request from "../../services/api";



const SinglePage: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get("/");

        if (Array.isArray(response.data)) {
          setImages(response.data.map((item: { image: string }) => item.image));
          setCards(response.data); 
        } else {
          setError("Data is not in expected format");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }

      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      setFavorites(new Set(savedFavorites)); 
    };

    fetchData();
  }, []);

  const toggleFavorite = (cardId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);

      if (updatedFavorites.has(cardId)) {
        updatedFavorites.delete(cardId);
      } else {
        updatedFavorites.add(cardId); 
      }

   
      localStorage.setItem(
        "favorites",
        JSON.stringify(Array.from(updatedFavorites))
      );

      return updatedFavorites;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto flex gap-16 container  ">
      <div>
        {" "}
        {cards.length > 0 && (
          <img
            src={cards[0].bigimage} 
            alt="big picture"
            className="w-full h-[500px] object-cover" 
          />
        )}
        <div className="w-[700px] h-[300px] py-5 ">
          {" "}
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {images.length > 0 ? (
                images.map(
                  (
                    image,
                    index 
                  ) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`slide-${index}`} />
            
                    </SwiperSlide>
                  )
                )
              ) : (
                <div>No images available.</div> 
              )}
            </Swiper>
          )}
          <div>
            <div className="flex mt-5 mx-[331px] w-[600px]">
              <h2>+998 99 555 60-70</h2>
              <button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md text-white mx-3">
                Разместить объявление
              </button>
            </div>
            <div className="flex mt-5 mx-[171px] w-[600px]">
              <h2 className="w-[290px]">
                г.Ташкент, Чиланзарский р-н ул.Улица, Дом 65
              </h2>
              <button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md text-white mx-3">
                Разместить объявление
              </button>
            </div>
          </div>
        </div>
        <div className="map-container mt-9 ">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A93fd8a56b222ded607e7b9f3f50b1f396a55e6e073f5808b90c881075a0864b0&source=constructor
"
            width="100%"
            height="450"
            frameBorder="0"
            title="Yandex Map"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div></div>
      <div>
        <div className="flex gap-16 bg-white ">
          <div className="flex gap-4  ">
            <img src="images/fir.png" alt="pic" />
            <h2>Прод ается вилла</h2>
          </div>
          <div className="flex gap-4 ">
            <img src="images/sss.png" alt="pic" />
            <img src="images/ss.png" alt="pic" />
          </div>
        </div>
        <div>
          <h2 className="mt-2 text-lg text-[#6A9B0C]">$ 1,895,000</h2>
        </div>
        <div className="flex gap-8 mt-6">
          <div className="w-[135px] h-[68px] rounded-md bg-[#F6F6F6]">
            <h3 className="text-[#999999] font-semibold text-lg ">
              Стоимость м2{" "}
            </h3>
            <h3>$ 18,950</h3>
          </div>
          <div className="w-[135px] h-[68px] rounded-md bg-[#F6F6F6]">
            <h3 className="text-[#999999] font-semibold text-lg ">
              Предоплата{" "}
            </h3>
            <h3>85%</h3>
          </div>
          <div className="w-[135px] h-[68px] rounded-md bg-[#F6F6F6]">
            <h3 className="text-[#999999] font-semibold text-lg ">
              Рассрочкаs{" "}
            </h3>
            <h3>Есть</h3>
          </div>
        </div>
        <div className="flex gap-10 mt-6">
          <div>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Месячный платеж{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">Скидка </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Предоплата{" "}
            </h3>
            <h3 className="mt-2 text-lg text-[#6f9725]">Акция</h3>
          </div>

          <div>
            <h3 className="text-[#999999] font-semibold text-lg ">1 % </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">1 % </h3>
            <h3 className="text-[#999999] font-semibold text-lg w-[249px] ">
              Описание акции, здесь будет подробная информация об акции{" "}
            </h3>
            <h3 className="mt-2 text-lg text-[#6f9725]">Нет</h3>
          </div>
        </div>
        <hr />
        <div className="flex gap-12 mt-6">
          <div>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Количество комнат{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Месячный платеж{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Количество этажей{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Месячный платеж{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Планировка{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Месячный платеж{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              В доме имеется{" "}
            </h3>
          </div>
          <div>
            <h3 className="text-[#999999] font-semibold text-lg ">
              28 комнат{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">100 м2 </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">1 % </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              10 отдельных санузлов{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">
              Планировкаs{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">2020 </h3>
            <h3 className="text-[#999999] font-semibold text-lg ">3.5 м </h3>
          </div>
        </div>
        <div className="mt-6 flex gap-8">
          <div>
            <h3 className="text-[#999999] font-semibold text-lg mb-9">
              Количество комнат{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg mb-6">
              Месячный платеж{" "}
            </h3>
            <h3 className="text-[#999999] font-semibold text-lg mt-16 ">
              Количество этажей{" "}
            </h3>
          </div>

          <div>
            <div className="flex gap-3  ">
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
              <div className="w-[104px] h-[24px] bg-gray-200 rounded-lg  text-center">
                <h3>интернет</h3>
              </div>
            </div>
            <div>
              <h3>Есть</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-8">
          <h2 className="text-[#999999] font-semibold text-lg ">
            Дополнительная информация
          </h2>
          <p className="mt-8 w-[470px] font-medium">
            Это стильная вилла с потрясающим видом на море и находится всего в
            нескольких метрах от Кала Vadella. Просторная гостиная, большая
            полностью оборудованная кухня открытого плана столовая и
            многочисленные зоны отдыха и террасы, кондиционер, пол с подогревом,
            сигнализация, спутниковое телевидение, интернет, hi- фантастические
            и электронные жалюзи
          </p>
        </div>
        <div>
          <h1 className="font-semibold  text-3xl mt-12">Имя Пользователя</h1>
          <div className="flex gap-9 mt-10">
            <h4 className="text-[#999999] font-semibold text-lg ">
              Опубликовано 22:38 25-Окт 2021
            </h4>

            <button className="bg-[#FCA311] w-[200px] h-[45px] rounded-md ">
              Продлить топ
            </button>
          </div>
        </div>
        <div>
          <div className="mt-20">
            <div className="font-semibold truncate mt-10 -ml-[770px] text-2xl mb-5">
              Рекомендованные объявления
            </div>
            <div className="w-full py-2  -ml-[764px]">
      <div className="container w-[1400px] px-4">
    
        <div className="w-full h-[300px] py-5">
  {loading ? (
    <div className="text-center text-xl font-semibold text-gray-600">Loading...</div>
  ) : error ? (
    <div className="text-center text-xl font-semibold text-red-500">{error}</div>
  ) : (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {cards.length > 0 ? (
        cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex flex-col items-center ">
              <img
                src={card.image}
                alt={`slide-${card.id}`}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-4 w-full">
              
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-medium text-gray-800 truncate max-w-[180px]">{card.title}</div>
                  <button
                    onClick={() => toggleFavorite(card.id)}
                    className="focus:outline-none"
                  >
                    <img
                      src={
                        favorites.has(card.id)
                          ? "images/filled-heart.png"
                          : "images/Vector.png"
                      }
                      alt="Favorite Icon"
                      className="w-6 h-6"
                    />
                  </button>
                </div>

               
                <div className="flex gap-3 mb-2 text-sm ">
                  <div className="flex items-center gap-2">
                    <img src="images/Room.png" alt="Room Icon" className="w-5 h-5" />
                    <span>28</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="images/Area.png" alt="Area Icon" className="w-5 h-5" />
                    <span>2</span>
                  </div>
                 
                </div>

              
                <div className="mt-2 text-sm text-gray-500">
                  {card.location || "No description available."}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="w-full text-center text-lg font-semibold text-gray-600">No items available.</div>
      )}
    </Swiper>
  )}
</div>

      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
