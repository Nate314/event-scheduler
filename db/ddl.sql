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
    date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES Users(UserID)
);

-- Notes Table
CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    eventID INT NOT NULL,
    userID INT NOT NULL,
    description VARCHAR(2000) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES Users(UserID),
    FOREIGN KEY (eventID) REFERENCES events(eventID)
);

ALTER TABLE notes ADD pinned TINYINT(1) NOT NULL;
