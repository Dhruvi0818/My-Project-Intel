# Swasthya Kendrament 🏥  
A Smart Healthcare Web Portal built with Django

## 📌 Project Overview

**Swasthya Kendrament** is a healthcare platform that bridges the gap between patients and medical professionals. <br>
This all-in-one web portal allows users to consult doctors via live video and chat, order medicines online or from nearby pharmacies, access health education resources, and stay updated on health tips and awareness.

---

## 🌐 Live Features

### 👨‍⚕️ Consult a Doctor
- Virtual video consultation with general physicians, pediatricians, mental health professionals, and gynecologists.
- Live chat support with medical experts.
- Appointment scheduling and doctor availability status.

### 💊 Order Medicines
- Search and order medicines online (via e-pharmacy).
- Upload prescriptions for pharmacist review.
- Locate nearby pharmacies with stock availability.

### 📚 Health Awareness & Education
- Informative health articles and tips.
- Awareness videos and downloadable brochures.
- Multilingual nutrition guidance.
- Newsletter signup form for health updates.

---

## 🛠️ Tech Stack

- **Backend**: Django 5+
- **Frontend**: HTML5, CSS3, Bootstrap, JavaScript
- **Database**: SQLite (default), configurable to PostgreSQL
- **Media/Static**: Managed with Django static/media settings

---

## 📁 Project Structure

healthproject/
│
├── mainapp/
│ ├── templates/
│ ├── static/
│ ├── models.py
│ ├── views.py
│ └── urls.py
│
├── healthproject/
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
│
├── db.sqlite3
└── manage.py


---

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- Django 5.x (install with `pip install django`)
- Git (for version control)

### Installation

```bash
# Clone the repository

git clone https://github.com/Dhruvi0818/healthproject.git
cd healthproject

# Create and activate virtual environment (optional but recommended)
python -m venv env
source env/bin/activate  # or `env\Scripts\activate` on Windows

# Install required packages
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the development server
python manage.py runserver
Then go to: http://127.0.0.1:8000

```

---

## 💡 Future Enhancements
- Real-time doctor availability tracking
- Payment integration for e-pharmacy orders
- Patient medical history dashboard
- Admin panel for doctors and pharmacists

---

## 🙋‍♀️ Contact Me

Name: Dhruvi Rana <br>
GitHub: @Dhruvi0818<br>
Email: ranadhruvi689@gmail.com<br>

---

👍 Like this Project?
If you liked this project, don’t forget to give it a ⭐ on GitHub and share it with others who might benefit from it.


