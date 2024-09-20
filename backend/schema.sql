CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  priority INTEGER,
  is_completed BOOLEAN DEFAULT FALSE,
  category_id INTEGER REFERENCES categories(id)
);

-- Insert some initial categories
INSERT INTO categories (name) VALUES ('Work'), ('Personal'), ('Health');