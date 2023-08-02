/** Contains Common constants */

export const DRAWER_WIDTH = 240;

export const HOME_TAB_ID = "home_tab";

export const DEFAULT_EDITOR_TAB = {
  name: "Home",
  id: HOME_TAB_ID,
  value: "home",
  canDelete: false,
  query: "",
  isActive: true,
};

export const EDITOR_TAB_ADD = "editor_tab_added";
export const EDITOR_TAB_DELETE = "editor_tab_delete";
export const EDITOR_TAB_CHANGE = "editor_tab_change";

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

export const DEFAULT_STRINGS = {
  WELCOME_MESSAGE_TITLE: "Welcome to SQL QUERY EDITOR",
  WELCOME_MESSAGE_SUBTITLE: "To get started, Enter and Run a Query",
  APP_TITLE: "SQL EDITOR",
  IMPORT_DATA: "Import Data",
  NO_TABLES_EXIST: "No table exists",
  IMPORT_NEW_DATA_MESSAGE: "Please import data to the Editor",
  QUERY_EDITOR_PLACEHOLDER: "Write Query Here ...",
  IMPORT_DATA_DIALOG_TITLE: "Import Data",
  IMPORT_DATA_HELP_TEXT:
    "Select your file by clicking on upload button to import data",
  BUTTON_OPEN_TEXT: "open",
  BUTTON_CANCEL_TEXT: "Cancel",
  BUTTON_CLOSE_TEXT: "Close",
  BUTTON_SAVE_CHANGES_TEXT: "Save Changes",
  BUTTON_UPLOAD_TEXT: "Upload",
  HEADING_COLUMNS: "Columns",
  TABLE_ROW_DIALOG: "Row Details",
};
