--- data.sql

-- Insert sample users with explicit IDs
INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (1, 'shadowbyte',    'Alice Bauer', '{noop}password123', 'ROLE_USER',  'alice.bauer@example.com', 28, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (2, 'quantumfalcon', 'Bob Chen',    '{noop}hunter2',     'ROLE_USER',  'bob.chen@example.com',    35, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (3, 'lunacipher',    'Carla Diaz',  '{noop}s3cret!',     'ROLE_USER',  'carla.diaz@example.com',  22, 'INACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (4, 'hexzen',        'David Evans', '{noop}qwerty',      'ROLE_ADMIN', 'david.evans@example.com', 41, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (5, 'novaglyph',     'Eva Fischer', '{noop}letmein',     'ROLE_ADMIN', 'eva.fischer@example.com', 30, 'PENDING');

