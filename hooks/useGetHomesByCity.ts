import { useEffect, useState } from "react";
import { LimeHome } from "../types";

function useGetHomesByCity() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<LimeHome[] | null>(null);

  useEffect(() => {
    const fetchHomes = async () => {
      const url = `https://api.limehome.com/properties/v1/public/properties/?cityId=32&adults=1`;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const itemsWithPrices = jsonResponse.payload.map((item: LimeHome) => {
          item.lowest_price_per_night = 40 + Math.floor(Math.random() * 20);
          return item;
        });
        setData(itemsWithPrices);
        setLoading(false);
      } catch (e: unknown) {
        setError(e);
        setLoading(false);
      }
    };

    fetchHomes();
  }, []);

  return { loading, error, data };
}

export default useGetHomesByCity;
