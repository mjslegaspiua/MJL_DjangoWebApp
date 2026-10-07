# MJL Django Web App

## Requirements

- Python 3.12 or newer
- pip

## Run on Windows

Open PowerShell in the folder containing `manage.py`, then run:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

If PowerShell blocks virtual-environment activation, run the commands below
instead of activating it:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py createsuperuser
.\.venv\Scripts\python.exe manage.py runserver
```

## Run on macOS or Linux

Open a terminal in the folder containing `manage.py`, then run:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Open <http://127.0.0.1:8000/registration/> in a browser. Sign in with the
superuser created above to load the dashboard's AJAX student list.

## Database

The SQLite database (`db.sqlite3`) is deliberately excluded from Git, so a
fresh download starts with an empty database. Run `python manage.py migrate`
to create it. Create a new superuser on each computer if you need to sign in;
accounts and student records from another computer are not included in the
source download.
