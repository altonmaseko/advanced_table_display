type EmployeeType = {
  image: string;
  name: string;
  surname: string;
  country: string;
  email: string;
  projectName: string;
  taskProgress: number;
  status: string;
  date: Date;
}
const employeesData: EmployeeType[] = [
  {
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Emma',
    surname: 'Martinez',
    country: 'Argentina',
    email: 'emmamartinez67@gmail.com',
    projectName: 'Healthcare App',
    taskProgress: 90,
    status: 'in progress',
    date: new Date("2025-01-26T00:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Liam',
    surname: 'Anderson',
    country: 'United States',
    email: 'liam.anderson@example.com',
    projectName: 'E-Commerce Platform',
    taskProgress: 75,
    status: 'in progress',
    date: new Date("2025-01-20T10:30:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Noah',
    surname: 'Smith',
    country: 'Canada',
    email: 'noah.smith123@example.ca',
    projectName: 'AI Chatbot Development',
    taskProgress: 60,
    status: 'in progress',
    date: new Date("2025-01-18T14:15:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    name: 'Sophia',
    surname: 'Johnson',
    country: 'United Kingdom',
    email: 'sophiaj@example.co.uk',
    projectName: 'CRM Tool Enhancement',
    taskProgress: 50,
    status: 'in progress',
    date: new Date("2025-01-15T09:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    name: 'Mason',
    surname: 'Williams',
    country: 'Australia',
    email: 'mason.williams@company.au',
    projectName: 'Logistics System Overhaul',
    taskProgress: 85,
    status: 'in progress',
    date: new Date("2025-01-22T16:45:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/89.jpg',
    name: 'Olivia',
    surname: 'Brown',
    country: 'South Africa',
    email: 'olivia.brown@example.co.za',
    projectName: 'Mobile Banking App',
    taskProgress: 100,
    status: 'completed',
    date: new Date("2025-01-14T08:30:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Elijah',
    surname: 'Jones',
    country: 'New Zealand',
    email: 'elijah.jones@example.nz',
    projectName: 'E-Learning Portal',
    taskProgress: 95,
    status: 'in review',
    date: new Date("2025-01-10T13:20:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    name: 'Ava',
    surname: 'Garcia',
    country: 'Spain',
    email: 'ava.garcia@example.es',
    projectName: 'Inventory Management System',
    taskProgress: 40,
    status: 'in progress',
    date: new Date("2025-01-12T11:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    name: 'James',
    surname: 'Miller',
    country: 'Germany',
    email: 'james.miller@example.de',
    projectName: 'Cloud Migration Project',
    taskProgress: 20,
    status: 'not started',
    date: new Date("2025-01-08T17:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Isabella',
    surname: 'Lopez',
    country: 'Mexico',
    email: 'isabella.lopez@example.mx',
    projectName: 'Event Management App',
    taskProgress: 70,
    status: 'in progress',
    date: new Date("2025-01-18T10:15:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'Benjamin',
    surname: 'Hernandez',
    country: 'United States',
    email: 'benjaminh@example.com',
    projectName: 'Digital Marketing Tool',
    taskProgress: 45,
    status: 'in progress',
    date: new Date("2025-01-07T14:30:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Charlotte',
    surname: 'Davis',
    country: 'France',
    email: 'charlotte.d@example.fr',
    projectName: 'Restaurant Booking System',
    taskProgress: 80,
    status: 'in progress',
    date: new Date("2025-01-13T09:45:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    name: 'Lucas',
    surname: 'Martinez',
    country: 'Chile',
    email: 'lucasmartinez@example.cl',
    projectName: 'Blockchain Wallet',
    taskProgress: 30,
    status: 'in progress',
    date: new Date("2025-01-16T15:10:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/77.jpg',
    name: 'Mia',
    surname: 'Taylor',
    country: 'Ireland',
    email: 'mia.taylor@example.ie',
    projectName: 'HR Management Platform',
    taskProgress: 65,
    status: 'in progress',
    date: new Date("2025-01-21T12:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    name: 'Henry',
    surname: 'Clark',
    country: 'Sweden',
    email: 'henry.clark@example.se',
    projectName: 'Data Analytics Dashboard',
    taskProgress: 50,
    status: 'in progress',
    date: new Date("2025-01-24T13:00:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: 'Ella',
    surname: 'Lewis',
    country: 'Portugal',
    email: 'ella.lewis@example.pt',
    projectName: 'Travel Booking App',
    taskProgress: 35,
    status: 'in progress',
    date: new Date("2025-01-15T16:30:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    name: 'Alexander',
    surname: 'Walker',
    country: 'India',
    email: 'alexander.walker@example.in',
    projectName: 'Remote Work Collaboration Tool',
    taskProgress: 55,
    status: 'in progress',
    date: new Date("2025-01-20T08:45:00Z")
  },
  {
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Grace',
    surname: 'Hall',
    country: 'Italy',
    email: 'grace.hall@example.it',
    projectName: 'AR Shopping Experience',
    taskProgress: 95,
    status: 'in review',
    date: new Date("2025-01-23T14:20:00Z")
  }
];

export default employeesData;
