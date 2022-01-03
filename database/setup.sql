CREATE TABLE users (
    id INT NOT NULL,
    user_name VARCHAR(128) NOT NULL DEFAULT '',
    pass_word VARCHAR(128) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
);

CREATE TABLE tokens (
    id INT NOT NULL,
    user_id INT NOT NULL,
    valid BOOLEAN NOT NULL DEFAULT false,
    token CHAR(36) NOT NULL,
    PRIMARY KEY (id)
);
