const questions = [
  // ── EASY ──────────────────────────────────────────────────────────────────

  {
    id: "select-all-employees",
    title: "Select All Employees",
    difficulty: "Easy",
    description:
      "Write a SQL query to retrieve every row and every column from the employees table.",
    constraints: "Return all columns in their original order.",
    tags: ["select"],
    solutionQuery: "SELECT * FROM employees",
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id        INTEGER PRIMARY KEY,
  name      TEXT    NOT NULL,
  department TEXT   NOT NULL,
  salary    INTEGER NOT NULL,
  hire_date TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000, "2019-03-15"],
          [2, "Bob Smith", "Marketing", 72000, "2020-07-01"],
          [3, "Carol White", "Engineering", 105000, "2018-11-20"],
          [4, "David Brown", "HR", 68000, "2021-01-10"],
          [5, "Eva Martinez", "Marketing", 78000, "2020-04-22"],
          [6, "Frank Lee", "Engineering", 88000, "2019-09-05"],
          [7, "Grace Kim", "HR", 71000, "2022-02-14"],
          [8, "Henry Park", "Finance", 92000, "2017-06-30"],
          [9, "Iris Chen", "Finance", 87000, "2018-08-18"],
          [10, "Jack Wilson", "Marketing", 65000, "2023-01-03"],
        ],
      },
    ],
  },

  {
    id: "filter-high-earners",
    title: "Filter High Earners",
    difficulty: "Easy",
    description:
      "Find all employees whose salary is greater than 80,000.\n\nReturn their id, name, department, and salary.",
    constraints:
      "Only include employees with salary > 80000. Order by salary descending.",
    tags: ["select", "filter"],
    solutionQuery: `SELECT id, name, department, salary
FROM employees
WHERE salary > 80000
ORDER BY salary DESC`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000],
          [2, "Bob Smith", "Marketing", 72000],
          [3, "Carol White", "Engineering", 105000],
          [4, "David Brown", "HR", 68000],
          [5, "Eva Martinez", "Marketing", 78000],
          [6, "Frank Lee", "Engineering", 88000],
          [7, "Grace Kim", "HR", 71000],
          [8, "Henry Park", "Finance", 92000],
          [9, "Iris Chen", "Finance", 87000],
          [10, "Jack Wilson", "Marketing", 65000],
        ],
      },
    ],
  },

  {
    id: "count-by-department",
    title: "Count Employees per Department",
    difficulty: "Easy",
    description:
      "Write a query to count how many employees are in each department.\n\nReturn department and employee_count. Order alphabetically by department.",
    constraints:
      "Include all departments. Column alias must be employee_count.",
    tags: ["select", "aggregation"],
    solutionQuery: `SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
ORDER BY department`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000],
          [2, "Bob Smith", "Marketing", 72000],
          [3, "Carol White", "Engineering", 105000],
          [4, "David Brown", "HR", 68000],
          [5, "Eva Martinez", "Marketing", 78000],
          [6, "Frank Lee", "Engineering", 88000],
          [7, "Grace Kim", "HR", 71000],
          [8, "Henry Park", "Finance", 92000],
          [9, "Iris Chen", "Finance", 87000],
          [10, "Jack Wilson", "Marketing", 65000],
        ],
      },
    ],
  },

  {
    id: "select-specific-columns",
    title: "Select Specific Columns",
    difficulty: "Easy",
    description:
      "Write a SQL query to retrieve only the name, department, and salary columns from the employees table.",
    constraints: "Return columns in the order: name, department, salary.",
    tags: ["select"],
    solutionQuery: "SELECT name, department, salary FROM employees",
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL,
  hire_date  TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000, "2019-03-15"],
          [2, "Bob Smith", "Marketing", 72000, "2020-07-01"],
          [3, "Carol White", "Engineering", 105000, "2018-11-20"],
        ],
      },
    ],
  },

  {
    id: "filter-by-department",
    title: "Filter by Department",
    difficulty: "Easy",
    description:
      "Find all employees who work in the Engineering department.\n\nReturn id, name, and salary.",
    constraints: "Order results by salary descending.",
    tags: ["select", "filter"],
    solutionQuery: `SELECT id, name, salary
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000],
          [2, "Bob Smith", "Marketing", 72000],
          [3, "Carol White", "Engineering", 105000],
          [4, "David Brown", "HR", 68000],
          [5, "Frank Lee", "Engineering", 88000],
        ],
      },
    ],
  },

  {
    id: "average-salary",
    title: "Average Salary",
    difficulty: "Easy",
    description:
      "Calculate the average salary of all employees.\n\nReturn a single value named avg_salary.",
    constraints: "Round to nearest integer if needed.",
    tags: ["aggregation"],
    solutionQuery: "SELECT ROUND(AVG(salary)) AS avg_salary FROM employees",
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id     INTEGER PRIMARY KEY,
  salary INTEGER NOT NULL
)`,
        rows: [
          [1, 95000],
          [2, 72000],
          [3, 105000],
          [4, 68000],
          [5, 78000],
        ],
      },
    ],
  },

  {
    id: "employees-hired-after",
    title: "Employees Hired After Date",
    difficulty: "Easy",
    description:
      "Find employees hired after January 1, 2020.\n\nReturn name and hire_date.",
    constraints: "Order by hire_date ascending.",
    tags: ["filter", "date"],
    solutionQuery: `SELECT name, hire_date
FROM employees
WHERE hire_date > '2020-01-01'
ORDER BY hire_date`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id        INTEGER PRIMARY KEY,
  name      TEXT    NOT NULL,
  hire_date TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice", "2019-03-15"],
          [2, "Bob", "2020-07-01"],
          [3, "Carol", "2021-05-10"],
          [4, "David", "2019-11-20"],
          [5, "Eva", "2022-02-14"],
        ],
      },
    ],
  },

  // ── MEDIUM ────────────────────────────────────────────────────────────────

  {
    id: "employee-department-join",
    title: "Employees with Department Names",
    difficulty: "Medium",
    description:
      "Join the employees and departments tables to list every employee with their department name.\n\nReturn employee_name and department_name. Order by employee_name.",
    constraints:
      "Use an INNER JOIN. Alias the columns as employee_name and department_name.",
    tags: ["joins"],
    solutionQuery: `SELECT e.name AS employee_name, d.name AS department_name
FROM employees e
JOIN departments d ON e.dept_id = d.id
ORDER BY e.name`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id      INTEGER PRIMARY KEY,
  name    TEXT    NOT NULL,
  dept_id INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", 1],
          [2, "Bob Smith", 2],
          [3, "Carol White", 1],
          [4, "David Brown", 3],
          [5, "Eva Martinez", 2],
          [6, "Frank Lee", 1],
          [7, "Grace Kim", 3],
          [8, "Henry Park", 4],
          [9, "Iris Chen", 4],
          [10, "Jack Wilson", 2],
        ],
      },
      {
        name: "departments",
        schema: `CREATE TABLE departments (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL
)`,
        rows: [
          [1, "Engineering"],
          [2, "Marketing"],
          [3, "HR"],
          [4, "Finance"],
        ],
      },
    ],
  },

  {
    id: "highest-salary-per-dept",
    title: "Highest Salary per Department",
    difficulty: "Medium",
    description:
      "Find the highest salary in each department.\n\nReturn department and max_salary. Order by max_salary descending.",
    constraints: "Column alias must be max_salary.",
    tags: ["aggregation", "group-by"],
    solutionQuery: `SELECT department, MAX(salary) AS max_salary
FROM employees
GROUP BY department
ORDER BY max_salary DESC`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice Johnson", "Engineering", 95000],
          [2, "Bob Smith", "Marketing", 72000],
          [3, "Carol White", "Engineering", 105000],
          [4, "David Brown", "HR", 68000],
          [5, "Eva Martinez", "Marketing", 78000],
          [6, "Frank Lee", "Engineering", 88000],
          [7, "Grace Kim", "HR", 71000],
          [8, "Henry Park", "Finance", 92000],
          [9, "Iris Chen", "Finance", 87000],
          [10, "Jack Wilson", "Marketing", 65000],
        ],
      },
    ],
  },

  {
    id: "user-purchase-stats",
    title: "User Purchase Statistics",
    difficulty: "Medium",
    description:
      "Calculate each user's total purchases and total spend.\n\nJoin users and purchases. Return user_name, total_purchases (count), and total_spent (sum of amount). Only include users who have made at least one purchase. Order by total_spent descending.",
    constraints:
      "Use INNER JOIN. Aliases: user_name, total_purchases, total_spent.",
    tags: ["joins", "aggregation"],
    solutionQuery: `SELECT u.name AS user_name,
       COUNT(p.id)    AS total_purchases,
       SUM(p.amount)  AS total_spent
FROM users u
JOIN purchases p ON p.user_id = u.id
GROUP BY u.id, u.name
ORDER BY total_spent DESC`,
    tables: [
      {
        name: "users",
        schema: `CREATE TABLE users (
  id    INTEGER PRIMARY KEY,
  name  TEXT    NOT NULL,
  email TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice", "alice@example.com"],
          [2, "Bob", "bob@example.com"],
          [3, "Carol", "carol@example.com"],
          [4, "David", "david@example.com"],
        ],
      },
      {
        name: "purchases",
        schema: `CREATE TABLE purchases (
  id      INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product TEXT    NOT NULL,
  amount  REAL    NOT NULL
)`,
        rows: [
          [1, 1, "Laptop", 1200.0],
          [2, 1, "Mouse", 45.0],
          [3, 2, "Keyboard", 89.0],
          [4, 3, "Monitor", 350.0],
          [5, 3, "Webcam", 75.0],
          [6, 3, "Headset", 120.0],
          [7, 1, "USB Hub", 35.0],
          [8, 2, "Mousepad", 25.0],
          [9, 4, "Chair", 450.0],
          [10, 4, "Desk Lamp", 60.0],
        ],
      },
    ],
  },

  {
    id: "orders-without-customers",
    title: "Orphaned Orders",
    difficulty: "Medium",
    description:
      "Find all orders that have no matching customer record.\n\nReturn order_id, product, and amount. Order by order_id.",
    constraints: "Use a LEFT JOIN and filter for unmatched rows.",
    tags: ["joins", "filter"],
    solutionQuery: `SELECT o.id AS order_id, o.product, o.amount
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.id
WHERE c.id IS NULL
ORDER BY o.id`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL,
  city TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice", "New York"],
          [2, "Bob", "London"],
          [3, "Carol", "Tokyo"],
          [4, "David", "Paris"],
          [5, "Eva", "Berlin"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product     TEXT    NOT NULL,
  amount      REAL    NOT NULL
)`,
        rows: [
          [1, 1, "Laptop", 1200.0],
          [2, 2, "Phone", 800.0],
          [3, 99, "Tablet", 450.0],
          [4, 3, "Monitor", 350.0],
          [5, 55, "Keyboard", 89.0],
          [6, 4, "Webcam", 75.0],
          [7, 77, "Headset", 120.0],
          [8, 5, "USB Hub", 35.0],
        ],
      },
    ],
  },

  {
    id: "sales-by-region",
    title: "Total Sales by Region",
    difficulty: "Medium",
    description:
      "Calculate total sales amount per region.\n\nReturn region and total_sales. Order by total_sales descending.",
    constraints: "Use alias total_sales.",
    tags: ["aggregation", "group-by"],
    solutionQuery: `SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region
ORDER BY total_sales DESC`,
    tables: [
      {
        name: "sales",
        schema: `CREATE TABLE sales (
  id      INTEGER PRIMARY KEY,
  region  TEXT    NOT NULL,
  amount  REAL    NOT NULL,
  sale_date TEXT  NOT NULL
)`,
        rows: [
          [1, "North", 1200, "2024-01-05"],
          [2, "South", 800, "2024-01-06"],
          [3, "North", 950, "2024-01-10"],
          [4, "East", 1500, "2024-01-12"],
          [5, "South", 600, "2024-01-15"],
        ],
      },
    ],
  },

  {
    id: "customer-order-count",
    title: "Customers with Order Count",
    difficulty: "Medium",
    description:
      "Show each customer and how many orders they placed.\n\nReturn customer_name and order_count. Include customers with zero orders.",
    constraints: "Use LEFT JOIN. Alias columns appropriately.",
    tags: ["joins", "aggregation"],
    solutionQuery: `SELECT c.name AS customer_name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY order_count DESC`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL
)`,
        rows: [
          [1, "Alice"],
          [2, "Bob"],
          [3, "Carol"],
          [4, "David"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER,
  amount      REAL
)`,
        rows: [
          [1, 1, 299],
          [2, 1, 150],
          [3, 3, 450],
          [4, 2, 89],
        ],
      },
    ],
  },

  {
    id: "products-sold-above-average",
    title: "Products Above Average Price",
    difficulty: "Medium",
    description:
      "Find products whose unit price is above the average price of all products.",
    constraints: "Return product_name and unit_price. Use a subquery.",
    tags: ["subquery", "filter"],
    solutionQuery: `SELECT name AS product_name, unit_price
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products)
ORDER BY unit_price DESC`,
    tables: [
      {
        name: "products",
        schema: `CREATE TABLE products (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  unit_price REAL    NOT NULL
)`,
        rows: [
          [1, "Laptop", 1299],
          [2, "Mouse", 45],
          [3, "Keyboard", 89],
          [4, "Monitor", 449],
          [5, "Chair", 399],
        ],
      },
    ],
  },

  {
    id: "recent-orders-per-customer",
    title: "Most Recent Order per Customer",
    difficulty: "Medium",
    description:
      "Find the most recent order for each customer.\n\nReturn customer_name, order_date, and amount.",
    constraints:
      "Use a subquery with MAX() or window function (preferred: ROW_NUMBER).",
    tags: ["subquery", "joins"],
    solutionQuery: `SELECT c.name AS customer_name, o.order_date, o.amount
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.order_date = (
  SELECT MAX(order_date) FROM orders o2 WHERE o2.customer_id = c.id
)
ORDER BY o.order_date DESC`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL)`,
        rows: [
          [1, "Alice"],
          [2, "Bob"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id          INTEGER PRIMARY KEY,
  customer_id INTEGER,
  order_date  TEXT,
  amount      REAL
)`,
        rows: [
          [1, 1, "2024-05-01", 299],
          [2, 1, "2024-05-10", 450],
          [3, 2, "2024-05-05", 120],
          [4, 2, "2024-04-20", 89],
        ],
      },
    ],
  },

  {
    id: "average-order-value-by-customer",
    title: "Average Order Value by Customer",
    difficulty: "Medium",
    description:
      "Calculate the average order amount for each customer who placed at least one order.",
    constraints:
      "Return customer_name and avg_order_value. Round to 2 decimals.",
    tags: ["aggregation", "joins"],
    solutionQuery: `SELECT c.name AS customer_name,
       ROUND(AVG(o.amount), 2) AS avg_order_value
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY avg_order_value DESC`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
)`,
        rows: [
          [1, "Ava"],
          [2, "Ben"],
          [3, "Chloe"],
          [4, "Dylan"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, 1, 120.5],
          [2, 1, 79.5],
          [3, 2, 300.0],
          [4, 3, 50.0],
          [5, 3, 150.0],
          [6, 3, 200.0],
        ],
      },
    ],
  },

  // ── HARD ──────────────────────────────────────────────────────────────────

  {
    id: "second-highest-salary",
    title: "Second Highest Salary",
    difficulty: "Hard",
    description:
      "Find the second highest distinct salary from the employees table.\n\nReturn a single column named second_highest_salary. If no second salary exists, return NULL.",
    constraints:
      "Must handle duplicate salaries correctly. Use a subquery or LIMIT/OFFSET.",
    tags: ["subquery", "aggregation"],
    solutionQuery: `SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees)`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id     INTEGER PRIMARY KEY,
  name   TEXT    NOT NULL,
  salary INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice", 120000],
          [2, "Bob", 95000],
          [3, "Carol", 120000],
          [4, "David", 78000],
          [5, "Eva", 105000],
          [6, "Frank", 95000],
          [7, "Grace", 88000],
          [8, "Henry", 105000],
        ],
      },
    ],
  },

  {
    id: "employees-managers",
    title: "Employees and Their Managers",
    difficulty: "Hard",
    description:
      "The employees table has a self-referencing manager_id column.\n\nList each employee's name alongside their manager's name. Employees with no manager should show NULL for manager_name. Order by employee_name.",
    constraints:
      "Use a self-join (LEFT JOIN employees AS manager). Aliases: employee_name, manager_name.",
    tags: ["joins", "subquery"],
    solutionQuery: `SELECT e.name AS employee_name, m.name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
ORDER BY e.name`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  manager_id INTEGER
)`,
        rows: [
          [1, "Sarah (CEO)", null],
          [2, "Alice", 1],
          [3, "Bob", 1],
          [4, "Carol", 2],
          [5, "David", 2],
          [6, "Eva", 3],
          [7, "Frank", 3],
          [8, "Grace", 4],
          [9, "Henry", 4],
          [10, "Iris", 5],
        ],
      },
    ],
  },

  {
    id: "top-products-by-revenue",
    title: "Top 3 Products by Revenue",
    difficulty: "Hard",
    description:
      "Find the top 3 products by total revenue.\n\nJoin order_items with products. Return product_name and total_revenue (quantity × unit_price summed). Order by total_revenue descending. Limit to 3 rows.",
    constraints:
      "Alias columns as product_name and total_revenue. Use LIMIT 3.",
    tags: ["joins", "aggregation", "subquery"],
    solutionQuery: `SELECT p.name AS product_name,
       SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.id, p.name
ORDER BY total_revenue DESC
LIMIT 3`,
    tables: [
      {
        name: "products",
        schema: `CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT    NOT NULL,
  category TEXT    NOT NULL
)`,
        rows: [
          [1, "Laptop Pro", "Electronics"],
          [2, "Wireless Mouse", "Electronics"],
          [3, "Standing Desk", "Furniture"],
          [4, "Monitor 4K", "Electronics"],
          [5, "Ergonomic Chair", "Furniture"],
          [6, "USB-C Hub", "Electronics"],
        ],
      },
      {
        name: "order_items",
        schema: `CREATE TABLE order_items (
  id         INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL,
  quantity   INTEGER NOT NULL,
  unit_price REAL    NOT NULL
)`,
        rows: [
          [1, 1, 3, 1299.0],
          [2, 2, 15, 45.0],
          [3, 3, 5, 599.0],
          [4, 4, 8, 449.0],
          [5, 5, 4, 399.0],
          [6, 6, 20, 39.0],
          [7, 1, 2, 1299.0],
          [8, 3, 3, 599.0],
          [9, 4, 6, 449.0],
          [10, 2, 10, 45.0],
          [11, 5, 6, 399.0],
          [12, 1, 1, 1299.0],
        ],
      },
    ],
  },

  {
    id: "running-total-sales",
    title: "Running Total of Sales",
    difficulty: "Hard",
    description:
      "Calculate the running (cumulative) total of sales ordered by date.",
    constraints:
      "Return sale_date, amount, and running_total. Use window function.",
    tags: ["window-functions"],
    solutionQuery: `SELECT 
  sale_date,
  amount,
  SUM(amount) OVER (ORDER BY sale_date) AS running_total
FROM sales
ORDER BY sale_date`,
    tables: [
      {
        name: "sales",
        schema: `CREATE TABLE sales (
  id        INTEGER PRIMARY KEY,
  sale_date TEXT    NOT NULL,
  amount    REAL    NOT NULL
)`,
        rows: [
          [1, "2024-01-01", 100],
          [2, "2024-01-02", 150],
          [3, "2024-01-03", 200],
          [4, "2024-01-04", 75],
        ],
      },
    ],
  },

  {
    id: "department-salary-rank",
    title: "Salary Rank within Department",
    difficulty: "Hard",
    description:
      "Assign a salary rank to each employee within their department (highest salary = rank 1).",
    constraints:
      "Return name, department, salary, and rank. Use RANK() window function.",
    tags: ["window-functions"],
    solutionQuery: `SELECT 
  name,
  department,
  salary,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
FROM employees
ORDER BY department, rank`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT    NOT NULL,
  department TEXT    NOT NULL,
  salary     INTEGER NOT NULL
)`,
        rows: [
          [1, "Alice", "Engineering", 105000],
          [2, "Frank", "Engineering", 88000],
          [3, "Carol", "Engineering", 95000],
          [4, "Bob", "Marketing", 72000],
          [5, "Eva", "Marketing", 78000],
        ],
      },
    ],
  },

  {
    id: "employees-no-sales",
    title: "Employees with No Sales",
    difficulty: "Hard",
    description:
      "Find employees who have not made any sales in the last 30 days.",
    constraints: "Return employee_name. Use LEFT JOIN and date filter.",
    tags: ["joins", "filter", "date"],
    solutionQuery: `SELECT e.name AS employee_name
FROM employees e
LEFT JOIN sales s ON e.id = s.employee_id 
  AND s.sale_date >= DATE('now', '-30 days')
WHERE s.id IS NULL
ORDER BY e.name`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL)`,
        rows: [
          [1, "Alice"],
          [2, "Bob"],
          [3, "Carol"],
        ],
      },
      {
        name: "sales",
        schema: `CREATE TABLE sales (
  id          INTEGER PRIMARY KEY,
  employee_id INTEGER,
  sale_date   TEXT
)`,
        rows: [
          [1, 1, "2026-05-01"],
          [2, 2, "2026-04-01"],
        ],
      },
    ],
  },

  {
    id: "nth-highest-salary",
    title: "Nth Highest Salary",
    difficulty: "Hard",
    description:
      "Find the 3rd highest distinct salary in the company.\n\nReturn a column named third_highest.",
    constraints: "Return NULL if fewer than 3 distinct salaries exist.",
    tags: ["subquery", "aggregation"],
    solutionQuery: `SELECT DISTINCT salary AS third_highest
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id     INTEGER PRIMARY KEY,
  salary INTEGER NOT NULL
)`,
        rows: [
          [1, 120000],
          [2, 95000],
          [3, 120000],
          [4, 78000],
          [5, 105000],
          [6, 95000],
          [7, 150000],
        ],
      },
    ],
  },

  {
    id: "consecutive-days-attendance",
    title: "Employees with Consecutive Attendance",
    difficulty: "Hard",
    description:
      "Find employees who attended work on 3 or more consecutive days.",
    constraints: "Use window functions or self-join technique.",
    tags: ["window-functions", "advanced"],
    solutionQuery: `WITH ranked AS (
  SELECT 
    employee_id,
    attendance_date,
    ROW_NUMBER() OVER (PARTITION BY employee_id ORDER BY attendance_date) AS rn,
    JULIANDAY(attendance_date) - ROW_NUMBER() OVER (PARTITION BY employee_id ORDER BY attendance_date) AS grp
  FROM attendance
)
SELECT DISTINCT e.name
FROM ranked r
JOIN employees e ON r.employee_id = e.id
GROUP BY r.employee_id, r.grp
HAVING COUNT(*) >= 3`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT)`,
        rows: [
          [1, "Alice"],
          [2, "Bob"],
        ],
      },
      {
        name: "attendance",
        schema: `CREATE TABLE attendance (
  id               INTEGER PRIMARY KEY,
  employee_id      INTEGER,
  attendance_date  TEXT
)`,
        rows: [
          [1, 1, "2024-05-01"],
          [2, 1, "2024-05-02"],
          [3, 1, "2024-05-03"],
          [4, 2, "2024-05-10"],
          [5, 2, "2024-05-12"],
        ],
      },
    ],
  },

  {
    id: "monthly-sales-growth",
    title: "Monthly Sales Growth",
    difficulty: "Hard",
    description: "Calculate month-over-month growth in total sales.",
    constraints:
      "Return month, total_sales, previous_month_sales, and growth_rate. Use a window function.",
    tags: ["window-functions", "aggregation"],
    solutionQuery: `WITH monthly AS (
  SELECT substr(sale_date, 1, 7) AS month,
         SUM(amount) AS total_sales
  FROM sales
  GROUP BY substr(sale_date, 1, 7)
)
SELECT month,
       total_sales,
       LAG(total_sales) OVER (ORDER BY month) AS previous_month_sales,
       ROUND((total_sales - LAG(total_sales) OVER (ORDER BY month)) * 100.0 / LAG(total_sales) OVER (ORDER BY month), 2) AS growth_rate
FROM monthly
ORDER BY month`,
    tables: [
      {
        name: "sales",
        schema: `CREATE TABLE sales (
  id INTEGER PRIMARY KEY,
  sale_date TEXT NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, "2024-01-05", 1200],
          [2, "2024-01-20", 800],
          [3, "2024-02-03", 1500],
          [4, "2024-02-18", 700],
          [5, "2024-03-10", 2100],
          [6, "2024-03-22", 600],
        ],
      },
    ],
  },

  {
    id: "customers-with-three-orders",
    title: "Customers with Three or More Orders",
    difficulty: "Hard",
    description: "Find customers who placed at least three orders.",
    constraints:
      "Return customer_name and order_count. Order by order_count descending.",
    tags: ["aggregation", "joins", "having"],
    solutionQuery: `SELECT c.name AS customer_name,
       COUNT(o.id) AS order_count
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
HAVING COUNT(o.id) >= 3
ORDER BY order_count DESC, customer_name`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
)`,
        rows: [
          [1, "Ava"],
          [2, "Ben"],
          [3, "Chloe"],
          [4, "Dylan"],
          [5, "Emma"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, 1, 100],
          [2, 1, 120],
          [3, 1, 80],
          [4, 2, 50],
          [5, 3, 60],
          [6, 3, 70],
          [7, 4, 90],
          [8, 5, 110],
          [9, 5, 130],
          [10, 5, 140],
        ],
      },
    ],
  },

  {
    id: "top-customer-by-region",
    title: "Top Customer by Region",
    difficulty: "Hard",
    description: "Find the highest-spending customer in each region.",
    constraints:
      "Return region, customer_name, and total_spent. Use a window function or subquery.",
    tags: ["joins", "aggregation", "window-functions"],
    solutionQuery: `WITH totals AS (
  SELECT c.region, c.name AS customer_name, SUM(o.amount) AS total_spent,
         ROW_NUMBER() OVER (PARTITION BY c.region ORDER BY SUM(o.amount) DESC) AS rn
  FROM customers c
  JOIN orders o ON o.customer_id = c.id
  GROUP BY c.region, c.name
)
SELECT region, customer_name, total_spent
FROM totals
WHERE rn = 1
ORDER BY region`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  region TEXT NOT NULL
)`,
        rows: [
          [1, "Ava", "North"],
          [2, "Ben", "North"],
          [3, "Chloe", "South"],
          [4, "Dylan", "South"],
          [5, "Emma", "East"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, 1, 200],
          [2, 1, 150],
          [3, 2, 500],
          [4, 3, 300],
          [5, 3, 250],
          [6, 4, 100],
          [7, 5, 700],
        ],
      },
    ],
  },

  {
    id: "duplicate-free-emails",
    title: "Duplicate-Free Emails",
    difficulty: "Hard",
    description:
      "Find email addresses that appear more than once and return how many times they appear.",
    constraints:
      "Return email and occurrence_count. Order by occurrence_count descending, then email.",
    tags: ["group-by", "having"],
    solutionQuery: `SELECT email, COUNT(*) AS occurrence_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY occurrence_count DESC, email`,
    tables: [
      {
        name: "users",
        schema: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL
)`,
        rows: [
          [1, "Alice", "alice@example.com"],
          [2, "Alicia", "alice@example.com"],
          [3, "Bob", "bob@example.com"],
          [4, "Bobby", "bob@example.com"],
          [5, "Carol", "carol@example.com"],
          [6, "Dave", "dave@example.com"],
        ],
      },
    ],
  },

  {
    id: "inventory-low-stock",
    title: "Low Stock Inventory",
    difficulty: "Medium",
    description: "Find products where stock is below the reorder level.",
    constraints:
      "Return product_name, stock, and reorder_level. Order by stock ascending.",
    tags: ["filter"],
    solutionQuery: `SELECT name AS product_name, stock, reorder_level
FROM inventory
WHERE stock < reorder_level
ORDER BY stock ASC, product_name`,
    tables: [
      {
        name: "inventory",
        schema: `CREATE TABLE inventory (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  stock INTEGER NOT NULL,
  reorder_level INTEGER NOT NULL
)`,
        rows: [
          [1, "Laptop", 12, 10],
          [2, "Mouse", 4, 8],
          [3, "Keyboard", 7, 7],
          [4, "Monitor", 2, 5],
          [5, "Dock", 15, 10],
        ],
      },
    ],
  },

  {
    id: "latest-hire-per-department",
    title: "Latest Hire per Department",
    difficulty: "Medium",
    description: "Find the most recently hired employee in each department.",
    constraints:
      "Return department, employee_name, and hire_date. Use MAX or ROW_NUMBER.",
    tags: ["aggregation", "window-functions", "joins"],
    solutionQuery: `WITH ranked AS (
  SELECT department, name AS employee_name, hire_date,
         ROW_NUMBER() OVER (PARTITION BY department ORDER BY hire_date DESC) AS rn
  FROM employees
)
SELECT department, employee_name, hire_date
FROM ranked
WHERE rn = 1
ORDER BY department`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT NOT NULL,
  hire_date TEXT NOT NULL
)`,
        rows: [
          [1, "Alice", "Engineering", "2019-03-15"],
          [2, "Bob", "Engineering", "2021-07-01"],
          [3, "Carol", "Marketing", "2020-11-20"],
          [4, "David", "Marketing", "2023-02-10"],
          [5, "Eva", "HR", "2022-04-22"],
          [6, "Frank", "HR", "2021-09-05"],
        ],
      },
    ],
  },

  {
    id: "products-never-sold",
    title: "Products Never Sold",
    difficulty: "Medium",
    description:
      "Find products that have never appeared in an order item record.",
    constraints: "Return product_name. Use LEFT JOIN and null filtering.",
    tags: ["joins", "filter"],
    solutionQuery: `SELECT p.name AS product_name
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.id
WHERE oi.id IS NULL
ORDER BY p.name`,
    tables: [
      {
        name: "products",
        schema: `CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
)`,
        rows: [
          [1, "Laptop"],
          [2, "Mouse"],
          [3, "Keyboard"],
          [4, "Monitor"],
          [5, "Dock"],
        ],
      },
      {
        name: "order_items",
        schema: `CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL
)`,
        rows: [
          [1, 1],
          [2, 2],
          [3, 4],
        ],
      },
    ],
  },

  {
    id: "largest-order-per-customer",
    title: "Largest Order per Customer",
    difficulty: "Hard",
    description: "Return each customer’s largest single order amount.",
    constraints:
      "Return customer_name and largest_order. Use a subquery or window function.",
    tags: ["aggregation", "subquery"],
    solutionQuery: `SELECT c.name AS customer_name, MAX(o.amount) AS largest_order
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY largest_order DESC`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
)`,
        rows: [
          [1, "Ava"],
          [2, "Ben"],
          [3, "Chloe"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, 1, 100],
          [2, 1, 450],
          [3, 2, 90],
          [4, 2, 120],
          [5, 3, 700],
        ],
      },
    ],
  },

  {
    id: "salary-band-distribution",
    title: "Salary Band Distribution",
    difficulty: "Hard",
    description:
      "Group employees into salary bands and count how many employees fall into each band.",
    constraints:
      "Return salary_band and employee_count. Bands: <50000, 50000-79999, 80000-99999, 100000+.",
    tags: ["case", "aggregation"],
    solutionQuery: `SELECT CASE
  WHEN salary < 50000 THEN '<50000'
  WHEN salary < 80000 THEN '50000-79999'
  WHEN salary < 100000 THEN '80000-99999'
  ELSE '100000+'
END AS salary_band,
COUNT(*) AS employee_count
FROM employees
GROUP BY salary_band
ORDER BY salary_band`,
    tables: [
      {
        name: "employees",
        schema: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  salary INTEGER NOT NULL
)`,
        rows: [
          [1, 42000],
          [2, 61000],
          [3, 79000],
          [4, 81000],
          [5, 98000],
          [6, 103000],
          [7, 125000],
        ],
      },
    ],
  },

  {
    id: "repeat-customers-monthly",
    title: "Repeat Customers by Month",
    difficulty: "Hard",
    description:
      "Identify customers who placed orders in at least two different months.",
    constraints:
      "Return customer_name and active_months. Use GROUP BY and COUNT(DISTINCT ...).",
    tags: ["aggregation", "having"],
    solutionQuery: `SELECT c.name AS customer_name,
       COUNT(DISTINCT substr(o.order_date, 1, 7)) AS active_months
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name
HAVING COUNT(DISTINCT substr(o.order_date, 1, 7)) >= 2
ORDER BY active_months DESC, customer_name`,
    tables: [
      {
        name: "customers",
        schema: `CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
)`,
        rows: [
          [1, "Ava"],
          [2, "Ben"],
          [3, "Chloe"],
        ],
      },
      {
        name: "orders",
        schema: `CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  order_date TEXT NOT NULL,
  amount REAL NOT NULL
)`,
        rows: [
          [1, 1, "2024-01-05", 100],
          [2, 1, "2024-02-06", 120],
          [3, 2, "2024-01-10", 80],
          [4, 2, "2024-01-20", 90],
          [5, 3, "2024-03-02", 200],
          [6, 3, "2024-04-03", 220],
        ],
      },
    ],
  },
];
