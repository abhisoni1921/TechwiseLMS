// Mock Users
export const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@skilledge.com",
    role: "admin",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "John Doe",
    email: "student@skilledge.com",
    role: "student",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "student",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

// Mock Courses
export const mockCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    instructor: "Alex Johnson",
    thumbnail:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalModules: 5,
    totalDuration: "15 hours",
    progress: 60,
    enrolled: true,
    createdAt: "2023-01-15T00:00:00.000Z",
    updatedAt: "2023-01-15T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    description:
      "Dive deep into JavaScript concepts, including promises, async/await, and functional programming.",
    instructor: "Sarah Miller",
    thumbnail:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalModules: 8,
    totalDuration: "20 hours",
    progress: 30,
    enrolled: true,
    createdAt: "2023-02-20T00:00:00.000Z",
    updatedAt: "2023-02-20T00:00:00.000Z",
  },
  {
    id: "3",
    title: "React for Beginners",
    description:
      "Learn how to build modern web applications using React framework.",
    instructor: "David Wilson",
    thumbnail:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalModules: 6,
    totalDuration: "18 hours",
    progress: 0,
    enrolled: false,
    createdAt: "2023-03-10T00:00:00.000Z",
    updatedAt: "2023-03-10T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Node.js Fundamentals",
    description: "Build server-side applications with Node.js and Express.",
    instructor: "Emily Chen",
    thumbnail:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalModules: 7,
    totalDuration: "22 hours",
    progress: 0,
    enrolled: false,
    createdAt: "2023-04-05T00:00:00.000Z",
    updatedAt: "2023-04-05T00:00:00.000Z",
  },
];

// Mock Modules
export const mockModules = [
  {
    id: "1",
    courseId: "1",
    title: "HTML Basics",
    description:
      "Learn the fundamentals of HTML including tags, attributes, and semantics.",
    duration: "3 hours",
    order: 1,
    content: [
      {
        id: "1",
        moduleId: "1",
        title: "Introduction to HTML",
        type: "video",
        url: "https://www.youtube.com/embed/UB1O30fR-EE",
        duration: "45 minutes",
        completed: true,
      },
      {
        id: "2",
        moduleId: "1",
        title: "HTML Document Structure",
        type: "video",
        url: "https://www.youtube.com/embed/PlxWf493en4",
        duration: "30 minutes",
        completed: true,
      },
      {
        id: "3",
        moduleId: "1",
        title: "HTML5 Semantic Elements",
        type: "document",
        url: "#",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    courseId: "1",
    title: "CSS Fundamentals",
    description: "Learn how to style your web pages using CSS.",
    duration: "4 hours",
    order: 2,
    content: [
      {
        id: "4",
        moduleId: "2",
        title: "CSS Selectors",
        type: "video",
        url: "https://www.youtube.com/embed/1PnVor36_40",
        duration: "50 minutes",
        completed: true,
      },
      {
        id: "5",
        moduleId: "2",
        title: "CSS Box Model",
        type: "video",
        url: "https://www.youtube.com/embed/rIO5326FgPE",
        duration: "35 minutes",
        completed: false,
      },
    ],
  },
];

// Mock Assignments
export const mockAssignments = [
  {
    id: "1",
    courseId: "1",
    title: "Create a Personal Portfolio",
    description: "Build a personal portfolio website using HTML and CSS.",
    dueDate: "2024-07-30T23:59:59.000Z",
    totalMarks: 100,
    status: "pending",
  },
  {
    id: "2",
    courseId: "1",
    title: "Responsive Design Project",
    description:
      "Create a responsive website that works on mobile, tablet, and desktop.",
    dueDate: "2024-08-15T23:59:59.000Z",
    totalMarks: 100,
    status: "submitted",
    submittedAt: "2024-08-10T14:30:00.000Z",
  },
  {
    id: "3",
    courseId: "2",
    title: "JavaScript Game",
    description: "Build a simple game using JavaScript.",
    dueDate: "2024-08-05T23:59:59.000Z",
    totalMarks: 100,
    status: "graded",
    submittedAt: "2024-08-01T10:15:00.000Z",
    grade: 85,
    feedback:
      "Great work! The game mechanics are well implemented. Could improve the UI design.",
  },
];

// Mock Submissions
export const mockSubmissions = [
  {
    id: "1",
    assignmentId: "2",
    studentId: "2",
    studentName: "John Doe",
    submittedAt: "2024-08-10T14:30:00.000Z",
    fileUrl: "#",
    status: "pending",
  },
  {
    id: "2",
    assignmentId: "3",
    studentId: "2",
    studentName: "John Doe",
    submittedAt: "2024-08-01T10:15:00.000Z",
    fileUrl: "#",
    grade: 85,
    feedback:
      "Great work! The game mechanics are well implemented. Could improve the UI design.",
    status: "graded",
  },
  {
    id: "3",
    assignmentId: "1",
    studentId: "3",
    studentName: "Jane Smith",
    submittedAt: "2024-07-25T09:45:00.000Z",
    fileUrl: "#",
    status: "pending",
  },
];

// Student Dashboard Stats
export const studentDashboardStats = {
  totalCourses: 4,
  coursesInProgress: 2,
  assignmentsPending: 1,
  completedCourses: 0,
};

// Admin Dashboard Stats
export const adminDashboardStats = {
  totalStudents: 45,
  totalCourses: 12,
  totalAssignments: 36,
  pendingSubmissions: 15,
};
