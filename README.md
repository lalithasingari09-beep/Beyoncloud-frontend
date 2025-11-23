# Beyoncloud-frontend

beyonCloud – Frontend Assessment Project (Next.js + TailwindCSS)

A fully responsive frontend application built using Next.js (App Router), TypeScript, and TailwindCSS.
The application includes Login, Dashboard, and Create User pages — all wrapped inside a reusable Main Layout with Header, Sidebar, and Footer components.

Features
1. Login Page

Left section: Company logo

Right section: Login form

Responsive layout for desktop, tablet, and mobile

On successful login → redirect to Dashboard

2. Dashboard Page

Uses shared layout (Header + Sidebar + Footer)

Displays User Table using sample JSON data

Contains:

User ID

Name

Email

✔ Dashboard Enhancements

Logged-in username in header

Logout option in header

Sidebar with active menu highlight

3. Create User Page

Form fields:

Name

Email

Mobile

Age

Date of Birth

Buttons: Save & Reset

Validations:

Required fields

Email format

Mobile number length

Success toast after saving

Tech Stack
Technology	Purpose
Next.js (App Router)	Main framework
TypeScript	Strong typing
TailwindCSS	Styling & responsiveness
Reusable Components	Header, Sidebar, Footer, Layout, Background
React Hooks	State management

Project Structure
/components
   /Layout
      ├── Header.tsx
      ├── Sidebar.tsx
      ├── Footer.tsx
      └── MainLayout.tsx
   ├── LoginForm.tsx
   ├── UserTable.tsx
   ├── CreateUserForm.tsx

/app
   ├── login/page.tsx
   ├── dashboard/page.tsx
   ├── create-user/page.tsx
   └── globals.css

How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

4️⃣ Open in Browser
http://localhost:3000
