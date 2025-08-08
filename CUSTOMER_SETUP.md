# Customer Data Collection Setup

This setup allows your website form to save customer lead data to text files in the `possible_customer` folder.

## Installation

1. Install the new dependencies:
```bash
npm install express cors concurrently
```

## Running the Application

### Development Mode (React + Backend)
```bash
npm run dev
```
This runs both the React development server (port 3000) and the backend server (port 3001) simultaneously.

### Production Mode
```bash
npm run prod
```
This builds the React app and serves it through the Express server on port 3001.

### Backend Only
```bash
npm run server
```
Runs just the Express server on port 3001.

## How It Works

1. **Form Submission**: When a user fills out the contact form, the data is sent to `/api/save-customer`
2. **File Creation**: The backend creates two files:
   - Individual file: `possible_customer/customer_FirstName_LastName_timestamp.txt`
   - Master log: `possible_customer/all_customers.txt` (contains all submissions)
3. **Data Format**: Each entry includes:
   - Submission timestamp
   - Full name
   - Email address
   - Company name
   - Position title

## File Structure

```
possible_customer/
├── customer_John_Smith_2024-01-15T10-30-00-000Z.txt
├── customer_Jane_Doe_2024-01-15T11-45-30-000Z.txt
└── all_customers.txt
```

## Example Customer File Content

```
=== NEW CUSTOMER LEAD ===
Submitted: 2024-01-15T10:30:00.000Z
Name: John Smith
Email: john.smith@company.com
Company: Tech Solutions Inc
Position: Data Manager
========================
```

## Environment Variables (Optional)

You can set the port using an environment variable:
```bash
PORT=3001 npm run server
```

## Deployment Notes

- The `possible_customer` folder will be created automatically
- Make sure your deployment environment has write permissions
- For Docker deployment, ensure the volume is mounted for the `possible_customer` folder
- The server serves the built React app from the `build` folder
