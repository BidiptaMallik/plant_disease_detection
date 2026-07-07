import React, { useState } from "react";
import "../App.css";

export default function Detect() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult("");
    }
  };

  const handleDetect = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(
        `${data.predicted_class} (${(data.confidence * 100).toFixed(2)}%)`
      );
    } catch (error) {
      setResult("Error in detection");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="detect-card fade-in">

        <h1 className="title">🌿 Plant Disease Detection</h1>
        <p className="subtitle">
          Upload a leaf image and let AI analyze it instantly
        </p>

        <label className="upload-box">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <span>Click or Drag Image Here</span>
        </label>

        {preview && (
          <div className="image-preview zoom-in">
            <img src={preview} alt="preview" />
          </div>
        )}

        <button
          className={`detect-btn ${loading ? "loading" : ""}`}
          onClick={handleDetect}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Detect Disease"}
        </button>

        {result && (
          <div className="result-box slide-up">
            <h3>Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}