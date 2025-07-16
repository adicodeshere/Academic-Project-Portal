# Academic Submission Portal

A comprehensive full-stack web application for managing academic project submissions with role-based access control for Admins, Teachers, and Students.

## 🚀 Project Overview

This Academic Submission Portal is designed to streamline the process of academic project management in educational institutions. It provides a centralized platform for students to submit projects, teachers to evaluate and grade submissions, and administrators to manage the entire system.

## 🛠️ Technical Stack

### Frontend
- **React.js** - User interface framework
- **Material-UI (@mui/material)** - Component library
- **Bootstrap** - CSS framework
- **React Router** - Navigation and routing
- **Axios** - HTTP client for API calls
- **Formik & Yup** - Form handling and validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MySQL** - Database management system
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Academic Submission Portal Project/
├── backend/                    # Express.js API server
│   ├── config/                # Configuration files
│   ├── middleware/            # Custom middleware
│   ├── routes/               # API route handlers
│   ├── db.js                 # Database connection
│   ├── index.js              # Server entry point
│   └── package.json
├── work-master/              # React frontend application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── Pages/           # Page components
│   │   ├── context/         # React context
│   │   └── App.js           # Main App component
│   └── package.json
├── Database/                 # Database schema and setup
│   ├── portalschema.sql     # Database schema
│   └── guide.txt            # Database setup guide
└── README.md                # This file
```

## 🔑 Key Features

### 👨‍💼 Admin Features
- **User Management**: Add, edit, and delete students and teachers
- **Department Management**: Organize users by departments
- **Project Oversight**: Monitor all projects across the system
- **Schedule Management**: Create and manage academic schedules
- **System Administration**: Full access to all system features

### 👨‍🏫 Teacher Features
- **Project Evaluation**: Review and grade student projects
- **Title Approval**: Approve or reject project titles
- **Student Allocation**: View assigned students
- **Progress Tracking**: Monitor student project progress
- **Marking System**: Assign marks and feedback

### 👨‍🎓 Student Features
- **Project Submission**: Submit project proposals and documents
- **Title Submission**: Submit project titles for approval
- **Progress Tracking**: View project status and feedback
- **Schedule Access**: View academic schedules and deadlines
- **Document Management**: Upload and manage project documents

## 🗄️ Database Schema

The system uses MySQL with the following key tables:
- **login** - User authentication and roles
- **marks** - Student grades and evaluations
- **students** - Student information
- **teachers** - Teacher information
- **projects** - Project details
- **schedules** - Academic schedules
- **departments** - Department management

## 🔐 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Authentication**: Token-based authentication system
- **Role-Based Access Control**: Different permissions for Admin, Teacher, Student
- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: Form validation on both client and server side

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Academic\ Submission\ Portal\ Project
   ```

2. **Set up the database**
   - Create MySQL database named `demoproject`
   - Import the schema from `Database/portalschema.sql`
   - Update database credentials in `backend/db.js`

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../work-master
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:3001` (or configured port)

2. **Start the frontend application**
   ```bash
   cd work-master
   npm start
   ```
   Application will run on `http://localhost:3000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth` - User login

### User Management
- `POST /api/addstudent` - Add new student
- `POST /api/addteacher` - Add new teacher
- `GET /api/getstudents` - Get all students
- `GET /api/getteachers` - Get all teachers
- `PUT /api/editstudent` - Edit student details
- `PUT /api/editteacher` - Edit teacher details
- `DELETE /api/deletestudent` - Delete student
- `DELETE /api/deleteteacher` - Delete teacher

### Project Management
- `POST /api/addproject` - Add new project
- `GET /api/getallproject` - Get all projects
- `GET /api/getprojectdetails` - Get project details
- `PUT /api/editprojectdetails` - Edit project details
- `POST /api/fixtitle` - Approve project title
- `POST /api/rejectitle` - Reject project title

### Schedule Management
- `POST /api/addschedule` - Add new schedule
- `GET /api/getAllSchedule` - Get all schedules
- `PUT /api/editschedule` - Edit schedule
- `DELETE /api/deleteschedule` - Delete schedule

### Evaluation System
- `POST /api/savemarks` - Save student marks
- `GET /api/getprojectmark` - Get project marks

## 🎨 User Interface

The application features a modern, responsive design with:
- **Clean Dashboard**: Role-specific dashboards for each user type
- **Intuitive Navigation**: Easy-to-use sidebar navigation
- **Responsive Design**: Works on desktop and mobile devices
- **Material-UI Components**: Professional and consistent UI components
- **Form Validation**: Real-time form validation and error handling

## 🔧 Configuration

### Database Configuration
Update `backend/db.js` with your MySQL credentials:
```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "demoproject",
});
```

### Environment Variables - This shit is optional
Create a `.env` file in the backend directory:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=demoproject
JWT_SECRET=your_jwt_secret
PORT=3001
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Adiii License.

## 👥 Authors

- **Project Team** - Academic Project

## 🐛 Known Issues

- Check the Issues section for current bugs and feature requests

## 🔮 Future Enhancements

- Email notifications for deadlines
- File upload with cloud storage
- Advanced reporting and analytics
- Mobile application
- Integration with learning management systems

## 📞 Support

For support and questions, please contact no one .

---

**Note**: This is an academic project developed for educational purposes. Please ensure to follow your owns guidelines when using this system.
