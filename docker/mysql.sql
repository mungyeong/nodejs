CREATE SCHEMA nodejs character set utf8;
GRANT ALL privileges ON nodejs.* TO nodejs@'%' IDENTIFIED BY 'nodejs1234567';
CREATE SCHEMA nodebird character set utf8;
GRANT ALL privileges ON nodebird.* TO nodebird@'%' IDENTIFIED BY 'nodebird1234567';
flush tables;flush privileges;