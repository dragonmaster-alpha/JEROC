import Customer from './Customer/index';
import CustomerDetails from './Customer/Details';
import Product from './Products/index';
import Employee from './Employee/index';
import WorkOrder from './WorkOrder/index';
import NewEmployee from './Employee/NewEmployee';
import EmployeeDetails from './Employee/EmployeeDetails';
import NewArticle from './Article/NewArticle';

const Routes = [
    {
        path: "/customer",
        name: 'Customer',
        exact: true,
        pageTitle: "Customer",
        component: Customer
    },
    {
        path: "/customerDetails",
        name: 'CustomerDetails',
        exact: true,
        pageTitle: "Customer Details",
        component: CustomerDetails
    },
    {
        path: "/product",
        name: 'Products',
        exact: true,
        pageTitle: "Products",
        component: Product
    },
    {
        path: "/employee",
        name: 'Employee',
        exact: true,
        pageTitle: "Employee",
        component: Employee
    },
    {
        path: "/newEmployee",
        name: 'New Employee',
        exact: true,
        pageTitle: "New Employee",
        component: NewEmployee
    },
    {
        path: "/employeeDetails",
        name: 'Employee Details',
        exact: true,
        pageTitle: "Employee Details",
        component: EmployeeDetails
    },
    {
        path: "/newArticle",
        name: 'New Article',
        exact: true,
        pageTitle: "New Article",
        component: NewArticle
    },
    {
        path: "/workorder",
        name: 'Work Orders',
        exact: true,
        pageTitle: "Work Orders",
        component: WorkOrder
    }
];

export default Routes;