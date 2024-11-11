import { FC, useState, useEffect } from "react";
import request from "../../services/api";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(false);

 
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get("/");
        if (Array.isArray(response.data)) {
          setCards(response.data);
        } else {
          setError("Data is not in expected format");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(new Set(savedFavorites)); 
  }, []);

 
  const toggleFavorite = (cardId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      
      if (updatedFavorites.has(cardId)) {
     
        updatedFavorites.delete(cardId);
      } else {

        updatedFavorites.add(cardId);
      }

   
      localStorage.setItem('favorites', JSON.stringify(Array.from(updatedFavorites)));
      return updatedFavorites;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16 max-w-[1400px] mx-auto">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold text-2xl">Топ объявления</h1>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="images/Frame.png"
            alt="Menu Icon"
            onClick={() => setIsGridLayout(false)} 
            className="cursor-pointer"
          />
          <img
            src="images/Frame-1.png"
            alt="Menu Icon"
            onClick={() => setIsGridLayout(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {isGridLayout ? (
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-11">
          {cards.slice(0, 8).map((card) => (
            <div
              key={card.id}
              className="bg-white w-[400px] h-[381px] shadow-md rounded-md flex flex-col"
            >
            
              <Link to="/singlepage">
                <img
                  src={card.image}
                  alt="Card Image"
                  className="h-60 w-[400px]"
                />
              </Link>

              <div className="flex-1 flex flex-col justify-between p-3">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold truncate">{card.title}</h2>
                  <button
                    onClick={() => toggleFavorite(card.id)}
                    className="focus:outline-none"
                  >
                    <img
                      src={favorites.has(card.id) ? "images/filled-heart.png" : "images/Vector.png"} 
                      alt="Favorite Icon"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                <p className="mt-2 mb-2 text-lg text-[#6A9B0C]">${card.price}</p>
                <div className="flex gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <img src="images/Room.png" alt="Room Icon" />
                        <img src="images/28.png" alt="28 Icon" />
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="images/Area.png" alt="Area Icon" />
                        <img src="images/2.png" alt="2 Icon" />
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="images/Condition.png" alt="Condition Icon" />
                        <img src="images/euro.png" alt="Euro Icon" />
                      </div>
                    </div>
                <p className="text-sm text-gray-500">{card.location}</p>

                <div className="mt-4">
                  <img
                    className=" w-full -mt-2"
                    src="images/position2.png"
                    alt="Position Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (

        <section>
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full flex gap-7 bg-[#FFFFFF] mt-11 relative"
            >
              <div>
                <Link to="/singlepage">
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="w-[] h-[18rem] object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1 flex justify-between">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="text-3xl pt-6 font-normal">{card.title}</h2>
                    <button
                      onClick={() => toggleFavorite(card.id)}
                      className="focus:outline-none pt-4 "
                    >
                      <img
                        src={favorites.has(card.id) ? "images/filled-heart.png" : "images/Vector.png"}
                        alt="Favorite Icon"
                        className="mt-4 mx- "
                      />
                    </button>
                  </div>

                  <div className="pt-[141px]">
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2">
                        <img src="images/Room.png" alt="Room Icon" />
                        <img src="images/28.png" alt="28 Icon" />
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="images/Area.png" alt="Area Icon" />
                        <img src="images/2.png" alt="2 Icon" />
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="images/Condition.png" alt="Condition Icon" />
                        <img src="images/euro.png" alt="Euro Icon" />
                      </div>
                    </div>
                    <div className="mt-4 text-xs pb-8">
                      <h2 className="text-sm">{card.location}</h2>
                    </div>
                  </div>
                </div>

                <div className="flex  items-end justify-between ">
                  <img
                    className="absolute -right-3 inset-2-9 h-[289px] bottom-1 z-20"
                    src="images/position.png"
                    alt="pic"
                  />
                  <h2 className="text-2xl text-[#6A9B0C] mr-[-50px] mb-16">$ {card.price}</h2>
                  <h5 className="text-sm text-[#999999] mb-7">{card.published}</h5>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

    
      <div className="mt-10 flex justify-end ">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a href="#" className="hover:bg-yellow-100 px-3 py-2 rounded-lg">
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">1</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">2</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">3</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">.......</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">4</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">5</a>
            </li>
            <li>
              <a href="#" className="hover:bg-yellow-400 px-3 py-2 rounded-lg">
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
