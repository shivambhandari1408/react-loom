import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Simple product fetcher hook.
 * Returns { products, loading, error }.
 * Accepts full url.
 */
export default function useFetchProducts(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    let mounted = true;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (!mounted) return;
        // API shape: dummyjson -> res.data.products ; local json -> res.data
        const payload = res.data.products || res.data || [];
        setProducts(payload);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [url]);

  return { products, loading, error };
}
