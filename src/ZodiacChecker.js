import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ZodiacChecker.css"; // Custom styles for additional design

const zodiacSigns = [
  { sign: "Capricorn", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, icon: "♑", description: "Practical and disciplined." },
  { sign: "Aquarius", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, icon: "♒", description: "Independent and original." },
  { sign: "Pisces", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, icon: "♓", description: "Compassionate and artistic." },
  { sign: "Aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, icon: "♈", description: "Courageous and determined." },
  { sign: "Taurus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, icon: "♉", description: "Reliable and patient." },
  { sign: "Gemini", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, icon: "♊", description: "Adaptable and outgoing." },
  { sign: "Cancer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, icon: "♋", description: "Intuitive and loyal." },
  { sign: "Leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, icon: "♌", description: "Confident and charismatic." },
  { sign: "Virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, icon: "♍", description: "Analytical and kind." },
  { sign: "Libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, icon: "♎", description: "Balanced and diplomatic." },
  { sign: "Scorpio", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, icon: "♏", description: "Passionate and resourceful." },
  { sign: "Sagittarius", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, icon: "♐", description: "Optimistic and adventurous." },
];

const ZodiacChecker = () => {
  const [birthdate, setBirthdate] = useState("");
  const [zodiac, setZodiac] = useState(null);

  const findZodiac = () => {
    if (!birthdate) return;

    const dateObj = new Date(birthdate);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    const foundSign = zodiacSigns.find((z) => {
      return (
        (month === z.startMonth && day >= z.startDay) ||
        (month === z.endMonth && day <= z.endDay) ||
        (month > z.startMonth && month < z.endMonth)
      );
    });

    setZodiac(foundSign);
  };

  return (
    <div className="container">
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        🔮 Zodiac Sign Checker
      </motion.h2>

      <input 
        type="date" 
        value={birthdate} 
        onChange={(e) => setBirthdate(e.target.value)} 
        className="input-date"
      />
      
      <motion.button 
        className="check-btn"
        onClick={findZodiac}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Find My Zodiac
      </motion.button>

      {zodiac && (
        <motion.div 
          className="result-card"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="zodiac-icon">{zodiac.icon}</span>
          <h3>{zodiac.sign}</h3>
          <p>{zodiac.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ZodiacChecker;
