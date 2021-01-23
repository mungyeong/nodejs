create table users
(
    id         int        not null AUTO_INCREMENT,
    name       varchar(2) not null,
    age        int unsigned not null,
    married    tinyint    not null,
    comment    text null,
    createn_ad datetime   not null default now(),
    primary key (id),
    unique index name_unique (name asc)
) comment ='사용자 정보' default character set = utf8mb4 ENGINE = innoDB;

create table comments
(
    id         int          not null,
    commenter  int          not null,
    comment    varchar(100) not null,
    created_at datetime     not null default now(),
    primary key (id),
    index      commenter_idx (comment asc ),
    constraint commenter
        foreign key (commenter) references users (id) on delete cascade on update cascade
) comment = '댓글' default character set utf8mb4 engine = innodb;