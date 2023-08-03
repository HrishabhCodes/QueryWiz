export const DEFAULT_TAB = {
  id: "home_tab",
  name: "Home",
  query: "",
  value: 0,
};

export const EXAMPLE_QUERIES = [
  {
    type: "ddl",
    name: "Data Definition",
    queries: [
      `CREATE TABLE employees (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT,
        department VARCHAR(50)
    );`,
      `ALTER TABLE employees
    ADD salary DECIMAL(10, 2);`,
      `DROP TABLE employees;`,
      `CREATE UNIQUE INDEX idx_email ON users (email);
      `,
      `ALTER TABLE old_table_name RENAME TO new_table_name;
      `,
    ],
  },
  {
    type: "dml",
    name: "Data Manipulation",
    queries: [
      `INSERT INTO employees (id, name, age, department, salary)
    VALUES (1, 'John Doe', 30, 'IT', 60000);
    `,
      `UPDATE employees
      SET salary = 65000
      WHERE department = 'IT';
      `,
      `DELETE FROM employees
      WHERE id = 1;
      `,
      `INSERT INTO employees (id, name, age, department, salary)
      VALUES (2, 'Jane Smith', 25, 'HR', 55000),
             (3, 'Bob Johnson', 40, 'Finance', 70000);
      `,
      `UPDATE employees
      SET department = 'Operations'
      WHERE age > 35;
      `,
    ],
  },
  {
    type: "dql",
    name: "Data Query",
    queries: [
      `SELECT * FROM employees;
    `,
      `SELECT name, department FROM employees;
      `,
      `SELECT * FROM employees
      WHERE department = 'HR';
      `,
      `SELECT * FROM employees
      ORDER BY age DESC;
      `,
      `SELECT department, AVG(salary) AS avg_salary
      FROM employees
      GROUP BY department;
      `,
    ],
  },
];
