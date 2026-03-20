# Scheme Seva - Government Scheme Management Portal

A comprehensive platform that helps citizens discover, understand, and access government schemes in India.

## Features

### 1. Scheme Discovery
- Browse through central and state government schemes
- Advanced filtering system based on:
  - Income groups (EWS, General, OBC, SC, ST)
  - Gender categories
  - State-specific schemes
  - Age groups
  - Categories/Tags

### 2. Web Application
 - Context-aware responses about:
  - Eligibility criteria
  - Application process
  - Required documents
  - Scheme benefits

### 3. User Management
- User registration and authentication
- Personalized profile management
- Save favorite schemes
- Track application status
- Custom recommendations based on user profile

### 4. Recommendation System
- Personalized scheme suggestions based on:
  - User demographics
  - Income group
  - Location
  - Interests
  - Previous interactions

## Technical Stack

### Frontend
- React.js
- Material-UI
- Tailwind CSS
- Axios for API integration
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- RESTful API architecture

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/9582anupam/scheme-seva
```

2. Frontend Setup
```bash
cd Frontend
npm install
```

3. Backend Setup
```bash
cd Backend
npm install
```

4. Environment Variables
Create .env file in Backend directory with:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=your_refresh_token_secret_expiry
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=your_access_token_secret_expiry
GEMINI_API_KEY=your_gemini_api_key
```

5. Start Backend Server
```bash
npm start
```

5. Start Frontend
```bash
npm start
```

 
