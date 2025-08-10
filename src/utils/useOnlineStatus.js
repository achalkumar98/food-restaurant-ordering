import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Returns a boolean indicating if the browser is online
  return onlineStatus;
};

export default useOnlineStatus;
