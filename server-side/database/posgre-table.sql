CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255),
    content TEXT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name_tags VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE notes_tags (
    note_id INTEGER NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (note_id, tag_id),
    CONSTRAINT fk_noteid
        FOREIGN KEY(note_id)
            REFERENCES notes(id)
            ON DELETE CASCADE,
    CONSTRAINT fk_tagid
        FOREIGN KEY(tag_id)
            REFERENCES tags(id)
            ON DELETE CASCADE
);

-- CREATE TABLE notes_tags (
--     note_id INTEGER NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
--     tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
--     PRIMARY KEY (note_id, tag_id)
--     CONSTRAINT fk_noteid
--         FOREIGN KEY(note_id)
--             REFERENCES notes(id)
--             ON DELETE CASCADE
--     CONSTRAINT fk_noteid
--         FOREIGN KEY(note_id)
--             REFERENCES notes(id)
--             ON DELETE CASCADE
-- );