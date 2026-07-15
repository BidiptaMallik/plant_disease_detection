import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 70; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 8,
        size: 4 + Math.random() * 10,
      });
    }

    setParticles(arr);
  }, []);

  return (
    <div className="home-container">

      {/* Glow Blobs */}
      <motion.div className="glow glow-1"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />

      <motion.div className="glow glow-2"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="leaf"
          style={{
            left: `${p.left}%`,
            fontSize: p.size + 10,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            x: [0, 40, -40, 20],
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            delay: p.delay,
            duration: p.duration,
          }}
        >
          🍃
        </motion.div>
      ))}

      
      <div className="hero">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <FaLeaf className="leaf-icon" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Plant Disease
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="subtitle"
        >
          Detection using AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="desc"
        >
          Upload a plant image and let Artificial Intelligence detect diseases within seconds.
        </motion.p>

        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => navigate("/detect")}
        >
          Get Started <FaArrowRight />
        </motion.button>

        
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2>AI Powered</h2>
          <p>🌿 38 Plant Diseases</p>
          <p>⚡ Instant Prediction</p>
          <p>🎯 High Accuracy Model</p>
        </motion.div>

      </div>
    </div>
  );
}