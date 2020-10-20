-- Create schema
CREATE SCHEMA EventScheduler;
USE EventScheduler;

-- Users Table
CREATE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(20) NOT NULL,
    Password VARCHAR(200) NOT NULL,
    PRIMARY KEY (UserID)
);

-- Events Table
CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT,
    userID INT NOT NULL,
    title VARCHAR(40) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES Users(UserID)
);
