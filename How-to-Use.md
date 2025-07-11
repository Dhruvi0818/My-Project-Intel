# 🧑‍💻 How to Use Swasthya Kendrament

This guide will walk you through how to use each section of the **Swasthya Kendrament** healthcare web portal after setting it up locally.

---

## 🗂️ Project Structure

```

healthproject/
│
├── mainapp/                    # Main application
│   ├── templates/             # HTML Templates
│   │   ├── home.html
│   │   └── ...
│   ├── static/                # Static files (CSS, JS, images)
│   │   ├── css/
│   │   ├── js/
│   │   └── icon/
│   ├── models.py              # Database models
│   ├── views.py               # Backend logic/views
│   ├── urls.py                # App-specific URLs
│   └── forms.py               # Django Forms (if used)
│
├── healthproject/             # Project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── db.sqlite3                 # SQLite Database (default)
├── manage.py                  # Django's main control script
├── requirements.txt           # Python dependencies
├── README.md
└── how\_to\_use.md              # This usage guide

````

---

## 🏁 Step 1: Start the Project Locally

1. Open terminal/command prompt.
2. Navigate to your project directory:

```bash
cd healthproject
````

3. Activate your virtual environment:

```bash
# Windows
env\Scripts\activate

# Mac/Linux
source env/bin/activate
```

4. Run the Django development server:

```bash
python manage.py runserver
```

5. Open your browser and go to:

```
http://127.0.0.1:8000/
```

---

## 🧑‍⚕️ Consult a Doctor

* Go to the **Consult a Doctor** page from the navigation menu.
* Choose a specialization: General Physician, Pediatrician, Mental Health, Women’s Health.
* Fill in the consultation form.
* See doctor availability.
* Join the live video and chat session.

---

## 💊 Order Medicines

* Open the **Order Medicines** section.
* Use the search box to look for medicines.
* Upload your prescription (if required).
* Browse nearby pharmacies or order through an e-pharmacy.
* Confirm your order and wait for delivery.

---

## 📚 Health Awareness & Education

* Explore **Featured Health Articles**, **Health Tips**, and **Awareness Videos**.
* Use the Health Topics Grid to browse specific categories.
* Download brochures for later reading.
* Sign up for newsletters for regular health updates.

---

## 🌍 Multilingual Health Tips

* In the Health Awareness section, go to the **Health Tips** area.
* Switch to your preferred language (e.g., Hindi, Gujarati, etc.).
* Read tips on nutrition, hygiene, fitness, and mental health.

---

## ❓ FAQ and Support

* Visit the **FAQ Section** for common questions.
* If still in doubt, contact support through the **Contact Us** page or email.

---

Enjoy using **Swasthya Kendrament** — your one-stop healthcare portal!
💻🩺💊🌿

---

🙌 Thank You!
Enjoy using Swasthya Kendrament – built with ❤️ for health and care.

For any queries, reach out to the developer:
GitHub: [@Dhruvi0818](https://github.com/Dhruvi0818)
