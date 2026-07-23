#  Plant Disease Detection System

A full-stack deep learning application that detects plant diseases from leaf images in real time. Upload an image of a plant leaf, and the system predicts the disease (or confirms the plant is healthy) using a trained Convolutional Neural Network.

---

##  Features

- Image-based plant disease classification (38 classes)
- Convolutional Neural Network (CNN) trained on the PlantVillage dataset
- ~93% validation accuracy
- React-based frontend for image upload and result display
- Python backend serving real-time model predictions via API
- Clean, responsive UI with instant results

---

##  Tech Stack

### Machine Learning
- TensorFlow / Keras
- Convolutional Neural Network (CNN)
- PlantVillage Dataset

### Backend
- Python
- FastAPI

### Frontend
- React.js
- JavaScript
- Vite

### Training Environment
- Google Colab

---

##  Folder Structure

```
plant_disease_detection/
├── backend/
│   ├── app.py
│   ├── model/
│   │   └── plant_disease_model_v3.keras
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api.js
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

##  Installation

### Clone the repository

```bash
git clone https://github.com/BidiptaMallik/plant_disease_detection.git
cd plant_disease_detection
```

### Backend setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

##  How It Works

```
Upload Leaf Image
        ↓
Image Preprocessing (resize, normalize)
        ↓
CNN Model Inference (TensorFlow/Keras)
        ↓
Disease Prediction + Confidence Score
        ↓
Result Displayed on Frontend
```

---

##  Model Performance

| Metric              | Value       |
|----------------------|-------------|
| Validation Accuracy  | ~93%        |
| Number of Classes    | 38          |
| Training Epochs      | 50          |
| Architecture         | CNN (Conv2D + MaxPooling + Dense) |

---



---



##  Author

**Bidipta Mallik**
[GitHub](https://github.com/BidiptaMallik)