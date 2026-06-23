CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE salons (
    id SERIAL PRIMARY KEY,
    salon_name VARCHAR(100) NOT NULL,
    owner_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    description TEXT,
    image TEXT
);

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    salon_id INT REFERENCES salons(id) ON DELETE CASCADE,
    service_name VARCHAR(100),
    price DECIMAL(10,2),
    duration INT
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    salon_id INT REFERENCES salons(id) ON DELETE CASCADE,
    service_id INT REFERENCES services(id) ON DELETE CASCADE,
    booking_date DATE,
    booking_time TIME,
    status VARCHAR(20) DEFAULT 'Pending'
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    salon_id INT REFERENCES salons(id) ON DELETE CASCADE,
    rating INT,
    review TEXT
);