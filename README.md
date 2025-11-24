# NLRC AI Homework Solver

An intelligent homework solver powered by Google's Gemini AI.

## 🔐 API Key Security

Your API key has been securely integrated into the application. Here's how it's protected:

### Current Setup
- **API Key Location**: `config.js` file
- **Protected Files**: Listed in `.gitignore` to prevent accidental sharing
- **Fresh API Key**: Integrated with the new key you provided

### Security Best Practices

1. **Never Share `config.js`**
   - This file contains your API key
   - It's listed in `.gitignore` to prevent Git commits
   - Never upload it to GitHub or share it publicly

2. **Keep `.env` Private** (for future backend setup)
   - Contains sensitive configuration
   - Already in `.gitignore`

3. **Regenerate If Exposed**
   - If you accidentally share your key, regenerate it immediately at:
   - https://makersuite.google.com/app/apikey

## 🚀 How to Use

### Method 1: Simple File Opening (Current Setup)
1. Open `index.html` in your web browser
2. The application will work directly with the API key from `config.js`

### Method 2: Local Server (Recommended for Development)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Or if you have Node.js installed:
```bash
# Install dependencies
npm install

# Start the secure backend server
npm start

# Then open: http://localhost:3000
```

## ✨ Features

- **Multi-Subject Support**: Math, Science, English, Social Studies, Coding, and more
- **Image Upload**: Upload images of homework problems
- **Multiple Languages**: Support for English, Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi
- **AI Chat Assistant**: Interactive chatbot for follow-up questions
- **Step-by-Step Solutions**: Detailed explanations with verification
- **LaTeX Math Rendering**: Beautiful mathematical notation

## 🛡️ Error Handling

The application now includes:
- ✅ Comprehensive error handling
- ✅ Detailed error messages
- ✅ Automatic retry logic
- ✅ Connection status feedback

## 📝 API Key Integration Details

### What Changed:
1. **Removed hardcoded API key** from `script.js`
2. **Created `config.js`** to store API configuration separately
3. **Updated `.gitignore`** to protect sensitive files
4. **Improved error handling** for better debugging
5. **Fixed API header** to use correct `x-goog-api-key` format

### API Configuration:
```javascript
// config.js structure
const CONFIG = {
    GEMINI_API_KEY: 'YOUR_API_KEY_HERE',
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
};
```

## 🔧 Troubleshooting

### If the API key stops working:
1. Check browser console for error messages (F12)
2. Verify `config.js` exists and contains the correct API key
3. Ensure you're not hitting API rate limits
4. Try regenerating your API key if needed

### Common Issues:
- **CORS Errors**: Use a local server instead of opening the file directly
- **API Quota Exceeded**: Wait or upgrade your API plan
- **Network Errors**: Check your internet connection

## 📊 File Structure

```
NLRC AI Home work solver/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Main application logic
├── config.js           # API configuration (KEEP PRIVATE!)
├── .env                # Environment variables (for backend)
├── .gitignore          # Prevents committing sensitive files
├── server.js           # Optional: Secure backend server
├── package.json        # Optional: Node.js dependencies
└── README.md           # This file
```

## 🎯 Next Steps

For maximum security, consider:
1. Installing Node.js and using the backend server (`server.js`)
2. This keeps the API key completely hidden from the browser
3. Run `npm install` then `npm start` to use the secure backend

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your API key is valid
3. Ensure all files are in the same directory
4. Make sure `config.js` is loaded before `script.js`

---

**⚠️ IMPORTANT**: Never commit `config.js` or `.env` to version control!
