

 const employees = [
    {
      "id": 1,
      "firstname": "Amit",
      "email": "emp1@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Fix UI Bug",
          "description": "Resolve the alignment issue on the dashboard page.",
          "category": "Frontend",
          "date": "2025-01-10"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "API Integration",
          "description": "Integrate user API and handle error responses.",
          "category": "Backend",
          "date": "2025-01-12"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Database Update",
          "description": "Update employee records table structure.",
          "category": "Database",
          "date": "2025-01-14"
        }
      ]
    },

    {
      "id": 2,
      "firstname": "Suresh",
      "email": "emp2@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Landing Page Design",
          "description": "Create a responsive landing page layout.",
          "category": "Design",
          "date": "2025-02-01"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Testing",
          "description": "Test user authentication flow.",
          "category": "QA",
          "date": "2025-02-03"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Scheduler Fix",
          "description": "Fix broken task scheduler cron job.",
          "category": "Backend",
          "date": "2025-02-05"
        }
      ]
    },

    {
      "id": 3,
      "firstname": "Karthik",
      "email": "emp3@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Dashboard Charts",
          "description": "Implement analytics charts using Chart.js",
          "category": "Frontend",
          "date": "2025-03-01"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Deployment",
          "description": "Deploy latest build to staging server.",
          "category": "DevOps",
          "date": "2025-03-03"
        },
     
      ]
    },

    {
      "id": 4,
      "firstname": "Vikram",
      "email": "emp4@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Create Login Form",
          "description": "Build reusable login form component.",
          "category": "Frontend",
          "date": "2025-04-02"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Unit Tests",
          "description": "Write test cases for product service.",
          "category": "QA",
          "date": "2025-04-04"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Webhook Issue",
          "description": "Fix webhook not triggering for payments.",
          "category": "Backend",
          "date": "2025-04-06"
        }
      ]
    },

    {
      "id": 5,
      "firstname": "Rohit",
      "email": "emp5@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 12,
        "newTask": 11,
        "completed": 1,
        "failed": 0,
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Audit Logs UI",
          "description": "Add UI for activity logs.",
          "category": "Frontend",
          "date": "2025-05-01"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Auth Middleware",
          "description": "Implement JWT authentication middleware.",
          "category": "Backend",
          "date": "2025-05-03"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "SMTP Setup",
          "description": "Fix email SMTP configuration.",
          "category": "DevOps",
          "date": "2025-05-05"
        }
      ]
    }
  ]



const admin = [
  {
    id: 1,
    firstname: "Rajesh",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () =>{
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin =JSON.parse(localStorage.getItem("admin"))
  return{employees , admin }
}