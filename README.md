

---

# Portfolio

A personal portfolio website built with Django, showcasing projects, skills, and experiences. The site features dynamic content management through Django's admin interface, allowing for easy updates to the "About Me" section, resume links, and more.([GitHub][1])

## Features

* **Dynamic About Me Section**: Easily update your personal introduction, quotes, and descriptions via the admin panel.
* **Resume Integration**: Provide a downloadable resume or link to an external source like Google Drive.
* **Admin Interface**: Utilize Django's built-in admin for content management.
* **Responsive Design**: Mobile-friendly layout using Bootstrap.
* **Customizable Templates**: Modify HTML templates to fit your personal branding.([GitHub][2])

## Getting Started

### Prerequisites

* Python 3.10 or higher
* pip package manager
* virtualenv (optional but recommended)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abhay1maurya/django-portfolio.git
   cd django-portfolio
   ```



2. **Create and activate a virtual environment**:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```



3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```



4. **Apply migrations**:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```



5. **Create a superuser**:

   ```bash
   python manage.py createsuperuser
   ```



6. **Run the development server**:

   ```bash
   python manage.py runserver
   ```



7. **Access the site**:

   * Portfolio: `http://127.0.0.1:8000/`
   * Admin Panel: `http://127.0.0.1:8000/admin/`

## Usage

* **Admin Panel**: Log in to the admin panel to add or edit content in the "About Me" section.
* **Resume Link**: In the admin panel, you can add a link to your resume hosted on Google Drive or any other platform.
* **Templates**: Customize the HTML templates in the `templates` directory to change the site's appearance.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

* [Django Documentation](https://docs.djangoproject.com/)
* [Bootstrap](https://getbootstrap.com/)

---


