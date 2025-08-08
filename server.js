// Simple Node.js server to handle customer data saving
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build')); // Serve React build files

// API endpoint to save customer data
app.post('/api/save-customer', async (req, res) => {
  try {
    const { firstName, lastName, email, company, position, submittedAt } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !position) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create customer data string
    const customerEntry = `
=== NEW CUSTOMER LEAD ===
Submitted: ${submittedAt}
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Position: ${position}
========================

`;

    // Ensure the possible_customer directory exists
    const customerDir = path.join(__dirname, 'possible_customer');
    try {
      await fs.access(customerDir);
    } catch {
      await fs.mkdir(customerDir, { recursive: true });
    }

    // Create filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `customer_${firstName}_${lastName}_${timestamp}.txt`;
    const filepath = path.join(customerDir, filename);

    // Write customer data to individual file
    await fs.writeFile(filepath, customerEntry, 'utf8');

    // Also append to a master log file
    const logFile = path.join(customerDir, 'all_customers.txt');
    await fs.appendFile(logFile, customerEntry, 'utf8');

    console.log(`✅ New customer lead saved: ${filename}`);
    console.log(`📧 ${firstName} ${lastName} from ${company}`);
    
    return res.status(200).json({ 
      message: 'Customer data saved successfully',
      filename: filename
    });

  } catch (error) {
    console.error('❌ Error saving customer data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Customer data will be saved to: ${path.join(__dirname, 'possible_customer')}`);
});


