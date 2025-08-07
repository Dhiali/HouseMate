-- Create the HouseMate database
CREATE DATABASE IF NOT EXISTS housemate_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create a user (optional, replace 'your_password' with a strong password)
CREATE USER IF NOT EXISTS 'housemate_user'@'localhost' IDENTIFIED BY 'your_password';

-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON housemate_db.* TO 'housemate_user'@'localhost';

-- Apply changes
FLUSH PRIVILEGES;
