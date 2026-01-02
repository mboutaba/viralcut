import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "database.sqlite",
  driver: sqlite3.Database,
});

  await db.exec(`

  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,  
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);


 await db.exec(`
  CREATE TABLE IF NOT EXISTS plans (
id TEXT PRIMARY KEY,          -- e.g. "starter_monthly"
  name TEXT NOT NULL,           -- "Starter Monthly"
  price_usd INTEGER NOT NULL,   -- 900 = $9.00 (store cents)
  credits INTEGER NOT NULL,     -- how many AI credits
  product_code TEXT NOT NULL,   -- 2Checkout product code
  interval TEXT NOT NULL        -- "monthly", "yearly", "one_time"      
)
`);


 await db.exec(`
  CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,              -- internal subscription id
  user_id TEXT NOT NULL,
  plan_id TEXT NOT NULL,
  status TEXT NOT NULL,             -- pending | active | cancelled
  external_ref TEXT,                -- 2Checkout order / ref
  started_at DATETIME,
  ended_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (plan_id) REFERENCES plans(id)
)
`);


 await db.exec(`
  CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,          -- internal payment id
  user_id TEXT NOT NULL,
  plan_id TEXT NOT NULL,
  amount_usd INTEGER NOT NULL,
  status TEXT NOT NULL,         -- pending | paid | failed | refunded
  provider TEXT NOT NULL,       -- "2checkout"
  provider_ref TEXT,            -- 2Checkout order ref
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id)
)
`);



 await db.exec(`
  CREATE TABLE IF NOT EXISTS credits (
  user_id TEXT PRIMARY KEY,
  balance INTEGER NOT NULL DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id)
)
`);



 await db.exec(`
  CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  amount INTEGER NOT NULL,        -- +100, -5, etc
  reason TEXT NOT NULL,           -- "subscription", "generation"
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id)
)
`);


 await db.exec(`
  CREATE TABLE IF NOT EXISTS generations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  prompt TEXT NOT NULL,
  result TEXT,
  credits_used INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id)
)
`);

