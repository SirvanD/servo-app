CREATE DATABASE servo_app_db;
-- Connect to db 
-- Table Definition
CREATE TABLE public.stations (
    id serial primary key,
    name text,
    owner text,
    address text,
    suburb text,
    state text,
    latitude float,
    longitude float
);
