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
    
    
