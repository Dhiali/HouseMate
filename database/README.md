# MySQL Database Setup Guide


## Using XAMPP Control Panel

1. **Start XAMPP:**
   - Open XAMPP Control Panel.
   - Start the **Apache** and **MySQL** modules.

2. **Open phpMyAdmin:**
   - Click the **Admin** button next to MySQL in XAMPP, or go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin) in your browser.

3. **Create a New Database:**
   - In phpMyAdmin, click **Databases** at the top.
   - Enter `housemate_db` as the database name.
   - Choose `utf8mb4_unicode_ci` as the collation.
   - Click **Create**.

4. **Create a New User (Optional):**
   - Go to the **User accounts** tab.
   - Click **Add user account**.
   - Enter `housemate_user` as the username.
   - Set host to `localhost`.
   - Enter a strong password.
   - Under **Database for user**, select **Grant all privileges on database "housemate_db"**.
   - Click **Go** to create the user.

5. **Connect Your Backend:**
   - Use these credentials in your backend:
     - Host: `localhost`
     - User: `housemate_user`
     - Password: (your password)
     - Database: `housemate_db`

## Connect Node.js Backend to MySQL with Sequelize

1. **Install dependencies:**
   ```
   npm install sequelize mysql2
   ```

2. **Project structure:**
   ```
   /config
     └── db.config.js
   /models
     └── index.js
     └── user.model.js
     └── task.model.js
   ```

3. **Configure database connection:**  
   Edit `/config/db.config.js` with your database credentials.

4. **Define models:**  
   Create model files in `/models` (see Sequelize docs for details).

5. **Initialize Sequelize:**  
   Use `/models/index.js` to initialize Sequelize and import models.

6. **Use models in your backend:**  
   Import models from `/models` and use them in your routes/controllers.

See [Sequelize documentation](https://sequelize.org/) for more details.

## (For command line instructions, see previous sections)
