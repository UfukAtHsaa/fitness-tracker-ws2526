# fitness-tracker-ws2526
Dies ist ein Beispiel repository für Projektseminar Programmierprojekt WS 2025/26.

## Anwendung mit Docker starten

Ausführliche Erklärungen zu den Docker-Konfigurationen: [docker-explained.md](./docker-explained.md).

### 1. Gesamte Anwendung (Docker Compose)
Dies ist der einfachste Weg, um Frontend und Backend gemeinsam zu starten.

```bash
# Bauen und Starten aller Services
docker-compose up --build

# Starten im Hintergrund
docker-compose up -d

# Beenden
docker-compose down 

```
Die Anwendung ist danach unter [http://localhost:8081](http://localhost:8081) (Frontend) und [http://localhost:8080](http://localhost:8080) (Backend) erreichbar.

### 2. Einzelne Container starten
Falls du die Projekte separat bauen und ausführen möchtest:

**Backend (Spring Boot):**
```bash
cd fitness-tracker-service
docker build -t fitness-backend .
docker run -p 8080:8080 fitness-backend
```

**Frontend (Angular):**
```bash
cd fitness-tracker-web
docker build -t fitness-frontend .
docker run -p 8081:80 fitness-frontend
```
