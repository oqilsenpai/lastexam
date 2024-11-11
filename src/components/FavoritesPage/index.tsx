import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../services/api"; 

const FavoritesPage: FC = () => {
  const [cards, setCards] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]); 

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
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (cardId: number) => {
    setFavorites((prevFavorites) => {

      let updatedFavorites;
      if (prevFavorites.includes(cardId)) {
 
        updatedFavorites = prevFavorites.filter(id => id !== cardId);
      } else {
     
        updatedFavorites = [...prevFavorites, cardId];
      }

     
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      return updatedFavorites; 
    });
  };

  const getFavoritedCards = () => {
    return cards.filter((card) => favorites.includes(card.id)); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const favoritedCards = getFavoritedCards();

  return (
    <div className="bg-[#f5f3f3] py-16 max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Your Favorite Listings</h1>
      {favoritedCards.length === 0 ? (
        <div>No favorite listings found!</div>
      ) : (
        <div>
          {favoritedCards.map((card) => (
            <div key={card.id} className="w-full gap-7 bg-[#FFFFFF] mt-10 flex relative">
              <div>
                <Link to={`/singlepage/${card.id}`}>
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="w-[100%] h-60 object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1 flex justify-between">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-normal">{card.title}</h2>
            
                    <button
                      onClick={() => toggleFavorite(card.id)} 
                      className="focus:outline-none"
                    >
                      <img
                        src={favorites.includes(card.id) ? "images/filled-heart.png" : "images/Vector.png"}
                        alt="Favorite Icon"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>

                  <div className="pt-[90px]">
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
                    <div className="mt-4 text-xs">
                      <h2 className="font-semibold">{card.location}</h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between p-6">
                  <img
                    className="absolute -right-3 inset-2-9 h-[235px] bottom-1 z-20"
                    src="images/position.png"
                    alt="Position Icon"
                  />
                  <h2 className="text-lg text-[#6A9B0C]">{card.price}</h2>
                  <h5 className="text-sm text-[#999999]">{card.published}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

