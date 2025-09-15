# Contestify

A modern web application for tracking programming contests across multiple platforms. Stay updated with ongoing, upcoming, and completed coding competitions from LeetCode, Codeforces, and CodeChef.

## Features

- **Real-time Contest Tracking**: Fetches the latest contest data from multiple platforms
- **Multi-Platform Support**: Tracks contests from LeetCode, Codeforces, and CodeChef
- **Categorized Views**: Separate sections for ongoing, upcoming, and completed contests
- **Responsive Design**: Clean, modern interface that works on all devices
- **Direct Links**: Quick access to contest pages

## Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **HTTP Client**: Axios 1.12.2
- **UI Framework**: Material-UI (MUI) 7.3.2
- **Styling**: Emotion for CSS-in-JS
- **Build Tool**: Create React App
- **Testing**: Jest and React Testing Library

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contestify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Clist API credentials:
   ```env
   REACT_APP_CLIST_USERNAME=your_clist_username
   REACT_APP_CLIST_API_KEY=your_clist_api_key
   ```
   
   > **Note**: You need to sign up at [clist.by](https://clist.by/) to get your API credentials.

## Usage

### Development Mode

```bash
npm start
```

The application will run in development mode at [http://localhost:3000](http://localhost:3000). The page will automatically reload when you make changes.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Running Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Project Structure

```
contestify/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   ├── ContestCard.jsx # Individual contest display
│   │   ├── ContestList.jsx # Contest list with filtering
│   │   └── Contest.css     # Contest styling
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # All contests page
│   │   ├── Ongoing.jsx     # Ongoing contests page
│   │   ├── Upcoming.jsx    # Upcoming contests page
│   │   └── Completed.jsx   # Completed contests page
│   ├── App.js              # Main app component with routing
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## API Integration

The application uses the [Clist API](https://clist.by/api/v2/) to fetch contest data. The API integration includes:

- **Authentication**: Uses username and API key for secure access
- **Filtering**: Displays contests from LeetCode, Codeforces, and CodeChef
- **Real-time Data**: Fetches the latest contest information
- **Categorization**: Filters contests based on their status (ongoing, upcoming, completed)

## Pages

### Home Page
- Displays all contests from supported platforms
- Shows comprehensive contest information
- Grid layout for easy browsing

### Ongoing Contests
- Shows contests that are currently live
- Real-time filtering based on current time
- Quick access to active competitions

### Upcoming Contests
- Lists contests that haven't started yet
- Ordered by start time
- Helps users plan their participation

### Completed Contests
- Shows past contests
- Useful for reviewing and practicing
- Historical contest data

## Contest Card Information

Each contest card displays:
- **Event Name**: Title of the contest
- **Platform**: Source platform (LeetCode, Codeforces, CodeChef)
- **Start Time**: When the contest begins
- **End Time**: When the contest ends
- **Duration**: Contest length in hours
- **Direct Link**: Quick access to the contest page

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-username/contestify/issues) page
2. Create a new issue if needed
3. Provide detailed information about your problem

## Acknowledgments

- [Clist API](https://clist.by/) for providing comprehensive contest data
- [React](https://reactjs.org/) for the powerful frontend framework
- [Material-UI](https://mui.com/) for the excellent component library
- All the programming platforms that host these contests
