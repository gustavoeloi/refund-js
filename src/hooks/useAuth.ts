import { useState, useEffect } from "react";
import type { TokenPayload, User } from "../types/auth";
import { jwtDecode } from "jwt-decode";
import api from "../lib/api";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorageData() {
      const storageToken = localStorage.getItem("refundjs:token");

      if (storageToken) {
        try {
          const decoded = jwtDecode<TokenPayload>(storageToken);

          if (decoded.exp * 1000 < Date.now()) {
            signOut();
            return;
          }

          api.defaults.headers.Authorization = `Bearer ${storageToken}`;
          setUser({
            id: decoded.sub,
            role: decoded.role,
            name: decoded.name,
          });
        } catch (error) {
          signOut();
        }
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  function signOut() {
    localStorage.removeItem("refundjs:token");
    delete api.defaults.headers.Authorization;
    setUser(null);
  }

  return {
    user,
    loading,
    signOut,
    isAuthenticated: !!user,
  };
}
