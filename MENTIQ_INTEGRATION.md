# Mentiq Analytics Integration

This portfolio uses [Mentiq Analytics SDK](https://mentiq.io) for comprehensive user behavior tracking, session recording, heatmaps, and A/B testing.

## Features Integrated

### ✅ Core Analytics

- **Page View Tracking**: Automatic tracking of all page navigations
- **Custom Event Tracking**: Button clicks, link clicks, form submissions
- **Session Tracking**: User session duration, engagement metrics, scroll depth
- **Error Tracking**: Automatic JavaScript error capturing
- **Performance Monitoring**: Core Web Vitals and custom performance metrics

### ✅ Advanced Features

- **Heatmap Tracking**: Click, hover, and scroll heatmaps
- **Session Recording**: Visual playback of user sessions
- **Scroll Depth Tracking**: 25%, 50%, 75%, 100% milestones
- **Time on Page**: Accurate measurement of user engagement
- **Funnel Analytics**: Track user journeys through conversion funnels
- **Feature Usage Tracking**: Monitor which features users interact with

### ✅ Portfolio-Specific Tracking

- **Navigation Tracking**: All navbar and menu interactions
- **Project Views**: Track which projects users view
- **Download Tracking**: CV download button clicks
- **Portfolio Filter**: Category filter selections
- **External Links**: GitHub and live demo clicks
- **Telegram Bot Interactions**: Bot link clicks and views

## Setup Instructions

### 1. Get Your Mentiq API Keys

1. Sign up at [https://mentiq.io](https://mentiq.io)
2. Create a new project
3. Copy your **API Key** and **Project ID**

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy from .env.local.example
cp .env.local.example .env.local
```

Add your Mentiq credentials:

```env
NEXT_PUBLIC_MENTIQ_API_KEY=your-api-key-here
NEXT_PUBLIC_MENTIQ_PROJECT_ID=your-project-id-here
```

### 3. Verify Installation

The Mentiq SDK is already installed and configured. Verify by checking:

```bash
# Check if SDK is installed
npm list mentiq-sdk

# Should show: mentiq-sdk@1.0.1
```

## Usage

### Automatic Tracking

The following are tracked automatically once Mentiq is initialized:

- Page views on route changes
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Page exits
- JavaScript errors
- Performance metrics

### Manual Event Tracking

Use the provided utility functions in your components:

```typescript
import {
  trackButtonClick,
  trackLinkClick,
  trackFormSubmit,
  trackDownload,
  trackProjectView,
  trackSectionView,
  trackSocialClick,
  identifyUser,
} from "@/components/mentiq-provider";

// Track button clicks
trackButtonClick("button_name", {
  location: "navbar",
  action: "download",
});

// Track link clicks
trackLinkClick("https://example.com", "Example Link");

// Track project views
trackProjectView("LITMEX Protocol", "blockchain");

// Track downloads
trackDownload("resume.pdf", "pdf");

// Identify users (when they log in)
identifyUser("user_123", {
  email: "user@example.com",
  name: "John Doe",
});
```

### Using Mentiq Hooks

For React components, use the built-in hooks:

```typescript
import { useAnalytics, usePageTracking } from "mentiq-sdk";

function MyComponent() {
  const analytics = useAnalytics();

  // Track custom events
  analytics.track("custom_event", {
    property1: "value1",
    property2: "value2",
  });

  // Track page views
  usePageTracking({ customProperty: "value" });
}
```

## Current Tracking Implementation

### Navbar Component

- Navigation button clicks
- CV download button (desktop & mobile)
- Section scrolling
- Mobile menu toggle

### Portfolio Page

- Project filter selections
- GitHub repository link clicks
- Live demo link clicks
- Telegram bot link clicks
- Project view tracking

### Main Page

- Automatic page view tracking
- Section visibility tracking (via scroll depth)
- Contact form interactions (if implemented)

## Analytics Dashboard

View your analytics data at:

- **Dashboard**: [https://mentiq.io/dashboard](https://mentiq.io/dashboard)
- **Live Sessions**: View real-time user sessions
- **Heatmaps**: See where users click and scroll
- **Funnels**: Analyze conversion paths
- **Performance**: Monitor site speed and Core Web Vitals

## Configuration Options

The Mentiq provider is initialized with these options:

```typescript
{
  apiKey: process.env.NEXT_PUBLIC_MENTIQ_API_KEY,
  projectId: process.env.NEXT_PUBLIC_MENTIQ_PROJECT_ID,
  debug: process.env.NODE_ENV === "development",
  enableAutoPageTracking: false, // Manual control
  enableHeatmapTracking: true,
  enableSessionRecording: true,
  enableErrorTracking: true,
  enablePerformanceTracking: true,
}
```

## Privacy & GDPR Compliance

Mentiq is GDPR compliant. To respect user privacy:

1. **Cookie Consent**: Add a cookie consent banner before initializing analytics
2. **Opt-out**: Provide users with an opt-out mechanism
3. **Data Anonymization**: Enable IP anonymization in your Mentiq project settings
4. **Data Retention**: Configure data retention policies in your dashboard

Example opt-out:

```typescript
import { reset } from "mentiq-sdk";

// When user opts out
reset(); // Clears all user data and stops tracking
```

## Debugging

Enable debug mode to see analytics events in the console:

```env
NODE_ENV=development
```

Or programmatically:

```typescript
Mentiq.init({
  ...config,
  debug: true,
});
```

## Performance Impact

The Mentiq SDK is optimized for minimal performance impact:

- **Bundle Size**: ~15KB gzipped
- **Async Loading**: Events are batched and sent asynchronously
- **No Blocking**: Doesn't block page rendering
- **Lazy Loading**: Session recording starts only when enabled

## Troubleshooting

### Events not showing in dashboard

1. Verify API keys are correct in `.env.local`
2. Check browser console for errors
3. Ensure you're not blocking analytics in browser extensions
4. Verify the project ID matches your Mentiq dashboard

### Session recording not working

1. Check if session recording is enabled in your Mentiq project
2. Verify `enableSessionRecording: true` in initialization
3. Check browser console for CORS errors

### Missing page views

1. Ensure the MentiqProvider wraps your app in `layout.tsx`
2. Check that navigation is happening via Next.js router
3. Verify `usePathname` hook is working

## Additional Resources

- **Documentation**: [https://docs.mentiq.io](https://docs.mentiq.io)
- **API Reference**: [https://docs.mentiq.io/api](https://docs.mentiq.io/api)
- **Support**: support@mentiq.io
- **Community**: [https://discord.gg/mentiq](https://discord.gg/mentiq)

## License

This integration follows the Mentiq SDK license terms.
