# SkillEdge LMS - Learning Management System

A modern, responsive Learning Management System built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive platform for online learning with separate interfaces for students and administrators.

![SkillEdge LMS](https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## 🚀 Features

### 🎓 Student Features

- **Dashboard**: Overview of enrolled courses, progress tracking, and recent activities
- **Course Catalog**: Browse and enroll in available courses
- **Course Player**: Watch video lectures, download materials, and track progress
- **Assignments**: Submit assignments, view grades, and receive feedback
- **Profile Management**: Update personal information and change passwords

### 👨‍💼 Admin Features

- **Admin Dashboard**: System overview with key metrics and statistics
- **Course Management**: Create, edit, and delete courses and modules
- **User Management**: Manage student accounts and enrollments
- **Assignment Grading**: Review submissions and provide feedback
- **Reports**: Generate and download system reports

### 🎨 UI/UX Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Modern Interface**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with JavaScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── course/         # Course-related components
│   ├── dashboard/      # Dashboard widgets
│   ├── data/          # Data display components
│   ├── layout/        # Layout components
│   └── ui/            # Basic UI components
├── context/            # React Context providers
├── pages/             # Page components
│   ├── admin/         # Admin pages
│   ├── auth/          # Authentication pages
│   └── student/       # Student pages
├── types/             # TypeScript type definitions
├── utils/             # Utility functions and mock data
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/skilledge-lms.git
   cd skilledge-lms
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Demo Accounts

Use these credentials to explore the application:

**Admin Account:**

- Email: `admin@skilledge.com`
- Password: `password`

**Student Account:**

- Email: `student@skilledge.com`
- Password: `password`

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured interface with sidebar navigation
- **Tablet**: Adapted layout with collapsible sidebar
- **Mobile**: Touch-optimized interface with mobile navigation

## 🎨 Theme Support

SkillEdge LMS includes comprehensive dark and light theme support:

- **Light Theme**: Clean, bright interface for daytime use
- **Dark Theme**: Easy on the eyes for low-light environments
- **Persistent Preferences**: Theme choice is saved across sessions
- **System Integration**: Respects user's system theme preferences

## 🔐 Authentication & Authorization

The application implements role-based access control:

- **Public Routes**: Login, register, forgot password
- **Protected Routes**: Dashboard and feature pages
- **Role-based Access**: Different interfaces for students and admins
- **Route Guards**: Automatic redirection based on user role

## 📊 Mock Data

The application uses comprehensive mock data for demonstration:

- **Users**: Sample admin and student accounts
- **Courses**: Various courses with different progress states
- **Assignments**: Sample assignments with different statuses
- **Submissions**: Mock student submissions for grading
- **Analytics**: Dashboard statistics and metrics

## 🧩 Component Architecture

### Reusable Components

- **Button**: Configurable button with multiple variants
- **Input**: Form input with validation and error states
- **Card**: Flexible card component for content display
- **Modal**: Accessible modal dialogs with animations
- **DataTable**: Feature-rich table with sorting and pagination

### Layout Components

- **AppLayout**: Main application layout with sidebar and navbar
- **AuthLayout**: Authentication pages layout
- **Navbar**: Top navigation with user menu and theme toggle
- **Sidebar**: Collapsible navigation sidebar

## 🎯 Key Features Implementation

### Course Management

- Course catalog with search and filtering
- Video player integration (YouTube embed ready)
- Module-based content organization
- Progress tracking and completion status

### Assignment System

- File upload interface (UI ready for backend integration)
- Submission status tracking
- Grading interface for administrators
- Feedback system

### Dashboard Analytics

- Real-time statistics display
- Activity feed with recent actions
- Progress visualization
- Quick action buttons

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Zero-configuration deployment for React applications
- **GitHub Pages**: Free hosting for static sites
- **AWS S3**: Scalable cloud hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow JavaScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages
- Test responsive design on multiple devices

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Pexels** for the stock photography
- **Framer Motion** for smooth animations

## 🗺️ Roadmap

### Phase 1 (Current)

- ✅ Core UI components
- ✅ Authentication system
- ✅ Student dashboard
- ✅ Admin dashboard
- ✅ Course management
- ✅ Assignment system

### Phase 2 (Planned)

- 🔄 Backend API integration
- 🔄 Real-time notifications
- 🔄 Video streaming optimization
- 🔄 Advanced analytics
- 🔄 Mobile app development

### Phase 3 (Future)

- 📋 Discussion forums
- 📋 Live video sessions
- 📋 Certificate generation
- 📋 Payment integration
- 📋 Multi-language support

---

**Built with ❤️ by the ZENITH Team**

_Empowering education through technology_
