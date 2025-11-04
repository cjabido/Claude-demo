# Full Stack Test Application

A simple full-stack web application to test the availability and proper installation of Java/Spring Boot, Node.js, npm, and Angular on your work PC.

## Overview

This project consists of:
- **Backend**: Spring Boot REST API (Java)
- **Frontend**: Angular 17 application

The application provides:
- Hello World functionality to verify basic setup
- Interactive messaging to test backend-frontend communication
- System status display showing Java and Spring Boot versions

## Prerequisites

Before running this application, ensure you have the following installed:

### Required Software

1. **Java Development Kit (JDK) 17 or higher**
   - Check: `java -version`
   - Download: https://adoptium.net/ or https://www.oracle.com/java/technologies/downloads/

2. **Apache Maven 3.6+**
   - Check: `mvn -version`
   - Download: https://maven.apache.org/download.cgi

3. **Node.js 18+ and npm**
   - Check: `node -v` and `npm -v`
   - Download: https://nodejs.org/

4. **Angular CLI (optional, but recommended)**
   - Install: `npm install -g @angular/cli`
   - Check: `ng version`

## Project Structure

```
Claude-demo/
├── backend/                          # Spring Boot application
│   ├── src/
│   │   └── main/
│   │       ├── java/com/demo/testapp/
│   │       │   ├── TestApplication.java      # Main Spring Boot class
│   │       │   └── TestController.java       # REST API endpoints
│   │       └── resources/
│   │           └── application.properties    # Configuration
│   └── pom.xml                              # Maven dependencies
│
└── frontend/                         # Angular application
    ├── src/
    │   ├── app/
    │   │   ├── app.component.ts             # Main component logic
    │   │   ├── app.component.html           # UI template
    │   │   ├── app.component.css            # Styles
    │   │   ├── app.config.ts                # App configuration
    │   │   └── api.service.ts               # Backend API service
    │   ├── index.html                       # HTML entry point
    │   ├── main.ts                          # Angular bootstrap
    │   └── styles.css                       # Global styles
    ├── angular.json                         # Angular configuration
    ├── package.json                         # npm dependencies
    ├── tsconfig.json                        # TypeScript configuration
    └── tsconfig.app.json                    # App-specific TS config
```

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/cjabido/Claude-demo.git
cd Claude-demo
```

### Step 2: Backend Setup (Spring Boot)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project (this will download dependencies):
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

   The backend server will start on `http://localhost:8080`

   You should see:
   ```
   ===========================================
   Spring Boot Application Started Successfully!
   Server running at: http://localhost:8080
   ===========================================
   ```

4. Test the backend (optional - in a new terminal):
   ```bash
   curl http://localhost:8080/api/hello
   ```

### Step 3: Frontend Setup (Angular)

1. Open a **new terminal** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This may take a few minutes on the first run.

3. Start the Angular development server:
   ```bash
   npm start
   ```

   Or if you have Angular CLI installed globally:
   ```bash
   ng serve
   ```

   The frontend will start on `http://localhost:4200`

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Using the Application

Once both servers are running, the web application provides three test features:

### 1. System Status
- Automatically loads on startup
- Displays backend status, Java version, and Spring Boot version
- Click "Refresh Status" to reload

### 2. Backend Connection Test
- Click "Test Backend Connection" button
- Verifies the frontend can communicate with the Spring Boot backend
- Displays "Hello from Spring Boot!" message on success

### 3. Interactive Backend Test
- Type a message in the input field
- Click "Send to Backend" or press Enter
- The backend echoes your message back
- Tests full request/response cycle

## API Endpoints

The backend provides the following REST endpoints:

- `GET /api/hello` - Returns a hello message
- `GET /api/status` - Returns system status information
- `POST /api/echo` - Echoes back the sent message

## Troubleshooting

### Backend Issues

**Port 8080 already in use:**
```bash
# Find and kill the process using port 8080
# On Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:8080 | xargs kill -9
```

**Java version issues:**
- Ensure you have JDK 17 or higher installed
- Set `JAVA_HOME` environment variable to your JDK installation

**Maven issues:**
- Clear Maven cache: `mvn clean`
- Delete `~/.m2/repository` and rebuild

### Frontend Issues

**Port 4200 already in use:**
```bash
# Kill the process using port 4200
# On Windows:
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:4200 | xargs kill -9
```

**npm install fails:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**"Failed to connect to backend" error:**
- Ensure the Spring Boot backend is running on port 8080
- Check browser console for CORS errors
- Verify the backend URL in `frontend/src/app/api.service.ts`

### CORS Issues

If you encounter CORS errors, ensure:
- The backend `@CrossOrigin` annotation includes `http://localhost:4200`
- Both applications are running on their default ports

## Stopping the Application

### Stop Backend:
- Press `Ctrl + C` in the terminal running the Spring Boot application

### Stop Frontend:
- Press `Ctrl + C` in the terminal running the Angular development server

## Building for Production

### Backend:
```bash
cd backend
mvn clean package
java -jar target/testapp-1.0.0.jar
```

### Frontend:
```bash
cd frontend
npm run build
# Built files will be in dist/test-application-frontend/
```

## Technologies Used

- **Backend:**
  - Java 17+
  - Spring Boot 3.2.0
  - Maven

- **Frontend:**
  - Angular 17
  - TypeScript 5.2
  - RxJS 7.8
  - Node.js & npm

## Success Indicators

Your setup is successful if you can:
1. ✓ Start the Spring Boot backend without errors
2. ✓ Start the Angular frontend without errors
3. ✓ See the System Status displaying Java and Spring Boot versions
4. ✓ Click "Test Backend Connection" and receive a hello message
5. ✓ Type and send a message that gets echoed back from the backend

## License

This is a test application for development environment verification.

## Support

If you encounter issues:
1. Check that all prerequisites are installed with correct versions
2. Ensure both backend and frontend are running simultaneously
3. Check the troubleshooting section above
4. Review console logs for specific error messages
