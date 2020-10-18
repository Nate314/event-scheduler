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
