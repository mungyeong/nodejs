﻿CREATE SCHEMA nodejs character set utf8;
GRANT ALL privileges ON nodejs.* TO nodejs@'%' IDENTIFIED BY 'nodejs1234567';
CREATE SCHEMA nodebird character set utf8;
GRANT ALL privileges ON nodebird.* TO nodebird@'%' IDENTIFIED BY 'nodebird1234567';
CREATE SCHEMA nodebird_test character set utf8;
GRANT ALL privileges ON nodebird_test.* TO nodebird@'%' IDENTIFIED BY 'nodebird1234567';
CREATE SCHEMA nodeauction character set utf8;
GRANT ALL privileges ON nodeauction.* TO nodeauction@'%' IDENTIFIED BY 'nodeauction1234567';
flush tables;flush privileges;