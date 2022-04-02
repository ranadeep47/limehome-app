import { useEffect, useState } from "react";
import { LimeHome, LimeHomeDetail } from "../types";

function useGetProperty(id: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<LimeHomeDetail | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const url = `https://api.limehome.com/properties/v1/public/properties/${id}`;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        jsonResponse.payload.lowest_price_per_night =
          40 + Math.floor(Math.random() * 20);
        setData(jsonResponse.payload);
        setLoading(false);
      } catch (e: unknown) {
        console.log("Error: ", e);
        setError(e);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  return { loading, error, data };
}

export default useGetProperty;
