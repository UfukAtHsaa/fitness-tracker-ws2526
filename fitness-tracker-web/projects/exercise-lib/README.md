# ExerciseLib

## How the library was generated:

```bash
# Library
ng g lib exercise-lib --standalone

# Components
ng g component --project exercise-lib view-components/exercise-list
ng g component --project exercise-lib view-components/exercise-detail

# Services
ng g service --project exercise-lib logic-services/exercise-logic
ng g service --project exercise-lib provider-services/exercise-provider

```

## Structure

`lib` - enthält alle Services, Views und Tools für die Umsetzung eines speziellen Features der Anwendung

- `view-components` - ganzeheitliche Views, die dem Benutzer präsentiert werden (Aggregation mehrere Komponenten)
   - "Presentation" Layer

- `provider-services` - enthält alle Services, die für die Kommunikation von außen nach innen oder von innen nach außen relevant sind (bspw. HTTP Requests)
   - "Data" Layer

- `logic-services` - enthält alle Services, die innerhalb der Anwendung benötigt werden
   - "Business" Layer