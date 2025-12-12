--- data.sql

-- Insert sample users with explicit IDs
INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (1, 'shadowbyte',    'Alice Bauer', 'password123', 'ROLE_USER',  'alice.bauer@example.com', 28, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (2, 'quantumfalcon', 'Bob Chen',    'hunter2',     'ROLE_USER',  'bob.chen@example.com',    35, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (3, 'lunacipher',    'Carla Diaz',  's3cret!',     'ROLE_USER',  'carla.diaz@example.com',  22, 'INACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (4, 'hexzen',        'David Evans', 'qwerty',      'ROLE_ADMIN', 'david.evans@example.com', 41, 'ACTIVE');

INSERT INTO USERS (id, username, name, password, role, email, age, status) VALUES
    (5, 'novaglyph',     'Eva Fischer', 'letmein',     'ROLE_ADMIN', 'eva.fischer@example.com', 30, 'PENDING');

