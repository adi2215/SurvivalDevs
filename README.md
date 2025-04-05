# Project Web
# SurvivalDevs - team

FreshPlay - браузерная мультиплеерная платформа для игр. Построена на Angular и Django с поддержкой WebSocket для взаимодействия в реальном времени.

## Технологии

- Frontend: Angular 17 (TypeScript, SCSS)
- Backend: Django + Django Channels
- Реальное время: WebSockets (Django Channels + Redis)

## Запуск проекта

### 1. Backend (Django)

```bash
# Установка зависимостей
pip install -r requirements.txt

# Применение миграций
python manage.py migrate

# Запуск WebSocket-сервера (через Daphne)
daphne -p 8000 project_name.asgi:application
