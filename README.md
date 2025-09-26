# ReputeAI - AI-Powered Reputation Management Platform

ReputeAI is a modern web application that leverages artificial intelligence to help businesses monitor, analyze, and optimize their online reputation across all digital channels.

## Features

- **AI-Powered Sentiment Analysis**: Analyze customer sentiment with 99.2% accuracy
- **Real-Time Monitoring**: Monitor mentions across 500+ sources
- **Predictive Analytics**: Forecast reputation trends and identify potential issues
- **Comprehensive Dashboard**: Visualize reputation metrics in real-time
- **Crisis Prevention**: Detect and address potential issues before they escalate

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS
- **Deployment**: AWS Amplify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/reputeai.git
   cd reputeai
   ```

2. Install dependencies:
   ```
   pnpm install
   ```
   or
   ```
   npm install
   ```

3. Start the development server:
   ```
   pnpm dev
   ```
   or
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project is configured for easy deployment with AWS Amplify. Follow these steps:

1. Push your code to a GitHub repository
2. Connect your repository to AWS Amplify
3. Configure the build settings as follows:
   - Build command: `pnpm build` or `npm run build`
   - Output directory: `dist`

## Project Structure

```
reputeai/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CallToAction.jsx
│   │   └── Footer.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact support@reputeai.com
