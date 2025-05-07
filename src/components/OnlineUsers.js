import React, { useEffect, useState } from "react";
import { db, ref, onValue, set, onDisconnect } from "../firebase";

const OnlineUsers = () => {
  const [online, setOnline] = useState(0);

  useEffect(() => {
    // Her kullanıcıya benzersiz bir ID ver
    const userId = Math.random().toString(36).substring(2, 15);
    const userRef = ref(db, `onlineUsers/${userId}`);

    // Bağlantı kurulduğunda kullanıcıyı ekle
    set(userRef, true);

    // Bağlantı kesildiğinde kullanıcıyı sil
    onDisconnect(userRef).remove();

    // Toplam online kullanıcıyı dinle
    const onlineRef = ref(db, "onlineUsers");
    const unsubscribe = onValue(onlineRef, (snapshot) => {
      const val = snapshot.val();
      setOnline(val ? Object.keys(val).length : 0);
    });

    return () => {
      set(userRef, null);
      unsubscribe();
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      background: "rgba(30,34,54,0.85)",
      color: "#fff",
      borderRadius: 12,
      padding: "0.7rem 1.5rem",
      fontWeight: 500,
      fontSize: "1.1rem",
      zIndex: 9999,
      boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
    }}>
      👥 Online: {online}
    </div>
  );
};

export default OnlineUsers;
