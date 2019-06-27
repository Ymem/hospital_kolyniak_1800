Link to Postman requests collection: https://www.getpostman.com/collections/397009b3251b07b52820

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
    
    create table if not exists answers
    (
        id         int auto_increment
            primary key,
        comment_id int  null,
        answer     text not null,
        constraint answers_comments_id_fk
            foreign key (comment_id) references comments (id)
                on update cascade on delete cascade
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
        
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (1, 'Ivanov Ivan Ivanovych', 11, 'Very good doctor', 968659852, 'ivanovych@mail.ua', 3, 315, 'Monday to Friday', '159357', 1);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (2, 'Petrenko Petro Petrovych', 5, 'Good doctor', 968659856, 'petrovych@gmail.com', 1, 111, 'Monday to Friday', '159357', 2);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (3, 'Denysenko Denys Denysovych ', 20, 'Very good doctor', 968659857, 'denysovych@mail.ua', 2, 222, 'Monday to Friday', '159357', 3);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (4, 'Vasylenko Vasyl Vasylovych', 1, 'Good doctor', 968659858, 'vasylovych@gmail.com', 1, 116, 'Monday to Friday', '159357', 4);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (5, 'Bohdan Bohdan Bohdanovych', 3, 'Very good doctor', 968645985, 'bohdanovych@gmail.com', 2, 202, 'Monday to Friday', '159357', 1);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (6, 'Jariy Jaroslav Jaroslavovych', 13, 'Good doctor', 968689852, 'jaroslavovych@mail.ua', 3, 303, 'Monday to Friday', '159357', 2);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (7, 'Yurchenko Yurii Yuriyovych', 8, 'Very good doctor', 968119852, 'yuriyovych@mail.ua', 1, 115, 'Monday to Friday', '159357', 3);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (8, 'Oleskiv Oleksiy Oleksiyovych', 9, 'Good doctor', 988659852, 'oleksiyovych@gmail.com', 1, 119, 'Monday to Friday', '159357', 4);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (9, 'Zorya Zoryana Zinoviivna', 2, 'Very good doctor', 969959852, 'zinoviivna@mail.ua', 2, 209, 'Monday to Friday', '159357', 1);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (10, 'Martynovych Marta Mrativna', 6, 'Good doctor', 968899852, 'mrativna@gmail.com', 3, 308, 'Monday to Friday', '159357', 2);
    INSERT INTO kolyniak_1800.doctor (id, name, experience, description, phone_num, email, floor_num, office_num, working_days, password, department_id) VALUES (11, 'Syva Sophia Sergiivna', 18, 'Very good doctor', 968615932, 'sergiivna@mail.ua', 3, 311, 'Monday to Friday', '159357', 3);

    INSERT INTO kolyniak_1800.patient (id, name, email, password) VALUES (1, 'Kolyniak Denys', 'dankolyniak@gmail.com', '159357');
    INSERT INTO kolyniak_1800.patient (id, name, email, password) VALUES (2, 'Vlad Patcuta', 'vladpatsuta@gmail.com', '159357');
    INSERT INTO kolyniak_1800.patient (id, name, email, password) VALUES (3, 'Yurii Maksymiv', 'yramaksymiv@gmail.com', '159357');
    
    INSERT INTO kolyniak_1800.department (id, label) VALUES (1, 'Department of Surgery');
    INSERT INTO kolyniak_1800.department (id, label) VALUES (2, 'Department of Pediatrics');
    INSERT INTO kolyniak_1800.department (id, label) VALUES (3, 'Department of Traumatology');
    INSERT INTO kolyniak_1800.department (id, label) VALUES (4, 'Department of Oncology');
    
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (1, 1, 'good', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (2, 4, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (3, 1, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (4, 1, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (5, 2, 'good', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (6, 5, 'bad', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (7, 8, 'good', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (8, 5, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (9, 4, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (10, 8, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (11, 6, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (12, 2, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (13, 4, 'good', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (14, 2, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (15, 3, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (16, 8, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (17, 8, 'good', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (18, 2, 'bad', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (19, 1, 'good', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (20, 4, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (21, 1, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (22, 1, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (23, 2, 'good', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (24, 5, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (25, 8, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (26, 5, 'good', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (27, 4, 'bad', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (28, 8, 'good', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (29, 6, 'bad', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (30, 2, 'good', 3);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (31, 4, 'bad', 1);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (32, 2, 'good', 2);
    INSERT INTO kolyniak_1800.comments (id, doctor_id, comment, patient_id) VALUES (33, 3, 'bad', 3);
    
    INSERT INTO kolyniak_1800.answers (id, comment_id, answer) VALUES (1, 1, 'ok');
    INSERT INTO kolyniak_1800.answers (id, comment_id, answer) VALUES (2, 2, 'no');
    
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (1, 1, 10, 1);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (3, 1, 6, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (5, 2, 5, 2);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (18, 2, 4, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (15, 3, 2, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (39, 3, 10, 1);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (2, 4, 5, 2);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (9, 4, 8, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (13, 4, 10, 1);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (6, 5, 8, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (8, 5, 5, 2);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (11, 6, 9, 3);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (29, 6, 9, 2);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (17, 8, 10, 2);
    INSERT INTO kolyniak_1800.rating (id, doctor_id, mark, patient_id) VALUES (34, 8, 9, 3);
