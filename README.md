To create database run code in console

    create schema if not exists kolyniak_1800
    
    use kolyniak_1800;    
    
    create table if not exists department
    (
        id    int auto_increment
            primary key,
        label varchar(100) charset latin1 not null,
        constraint department_label_uindex
            unique (label)
    )
        charset = utf8;
    
    create table if not exists doctor
    (
        id            int auto_increment
            primary key,
        name          varchar(100) charset latin1 not null,
        experience    int                         not null,
        description   text charset latin1         not null,
        phone_num     int                         not null,
        email         varchar(50) charset latin1  not null,
        floor_num     int                         not null,
        office_num    int                         not null,
        working_days  tinytext charset latin1     not null,
        password      varchar(60) charset latin1  not null,
        department_id int                         null,
        constraint doctor_email_uindex
            unique (email),
        constraint doctor_phone_num_uindex
            unique (phone_num),
        constraint doctor_department_id_fk
            foreign key (department_id) references department (id)
                on update cascade on delete set null
    )
        charset = utf8;
    
    create table if not exists patient
    (
        id       int auto_increment
            primary key,
        name     varchar(100) charset latin1 not null,
        email    varchar(50) charset latin1  not null,
        password varchar(60) charset latin1  not null,
        constraint patient_email_uindex
            unique (email),
        constraint patient_name_uindex
            unique (name)
    )
        charset = utf8;
    
    create table if not exists comments
    (
        id         int auto_increment
            primary key,
        doctor_id  int  null,
        comment    text null,
        patient_id int  null,
        constraint comments_doctor_id_fk
            foreign key (doctor_id) references doctor (id)
                on update cascade,
        constraint comments_patient_id_fk
            foreign key (patient_id) references patient (id)
                on update cascade
    );
    
    create table if not exists rating
    (
        id         int auto_increment
            primary key,
        doctor_id  int null,
        mark       int null,
        patient_id int null,
        constraint rating_doctor_id_fk
            foreign key (doctor_id) references doctor (id)
                on update cascade on delete cascade,
        constraint rating_patient_id_fk
            foreign key (patient_id) references patient (id)
                on update cascade on delete cascade
    )
        charset = utf8;
