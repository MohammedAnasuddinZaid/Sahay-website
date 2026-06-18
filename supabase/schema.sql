create table if not exists public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  skills text not null,
  availability text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.volunteer_applications enable row level security;

create policy "Allow public volunteer inserts"
on public.volunteer_applications
for insert
to anon
with check (true);

create table if not exists public.donation_pledges (
  id uuid primary key default gen_random_uuid(),
  amount integer not null check (amount >= 100),
  method text not null check (method in ('upi', 'card')),
  name text,
  email text,
  phone text,
  impact text,
  created_at timestamptz not null default now()
);

alter table public.donation_pledges enable row level security;

create policy "Allow public donation pledge inserts"
on public.donation_pledges
for insert
to anon
with check (true);
