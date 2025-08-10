import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(MENU_API + resId);
        if (!data.ok) {
          throw new Error("Failed to fetch menu");
        }
        const json = await data.json();
        setResInfo(json.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (resId) fetchData();
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
