# Demo Authentication Setup

Quick guide for using demo accounts during development. No Apple Developer account or Supabase configuration needed!

## 🎯 What Is Demo Mode?

Demo mode simulates Apple Sign-In authentication without requiring:

- Apple Developer account setup
- Real device testing
- Xcode configuration
- Supabase auth provider setup

Perfect for:

- ✅ Testing user flows
- ✅ Developing UI components
- ✅ Testing data migration
- ✅ Running in simulator
- ✅ Quick development iterations

## 🚀 Quick Start

### 1. Add Demo Button to Your App

Import and use the `DemoSignInButton` component:

```typescript
import DemoSignInButton from "./components/DemoSignInButton";

// In your component (e.g., settings page or main screen):
<DemoSignInButton
  onSignInSuccess={() => {
    console.log("Demo user signed in!");
  }}
  onSignInError={(error) => {
    console.error("Demo sign-in failed:", error);
  }}
/>;
```

### 2. Run Your App

```bash
npx expo start
```

### 3. Use Demo Accounts

1. Tap **"Sign In (Demo)"** button
2. Select from available demo users:
   - 👤 John Doe (john@example.com)
   - 👤 Jane Smith (jane@example.com)
   - 👤 Alex Johnson (alex@example.com)
3. That's it! You're "signed in"

## 📱 Demo Users

The system includes 3 pre-configured demo users:

| Name         | Email            | User ID     |
| ------------ | ---------------- | ----------- |
| John Doe     | john@example.com | demo_user_1 |
| Jane Smith   | jane@example.com | demo_user_2 |
| Alex Johnson | alex@example.com | demo_user_3 |

Each user:

- Has a unique ID for data isolation
- Can save responses independently
- Simulates real authentication flow
- Works with data migration

## 🔄 Demo Mode vs Production Mode

### Demo Mode (Default)

- Shows "🧪 DEMO MODE" badge
- Picker to select demo users
- Works in simulator
- No real authentication
- Toggle with "Switch to Production"

### Production Mode

- Hides demo options
- Shows real Apple Sign-In button (iOS only)
- Requires Apple Developer setup
- Real user authentication
- Toggle with "🧪 Enable Demo Mode"

## 💾 How It Works

Demo mode integrates seamlessly with your existing storage:

```typescript
// Storage automatically detects demo mode
import * as Storage from "../utils/supabaseStorage";

// Save works the same way
await Storage.savePageResponse(24, "name", "John Doe");

// Under the hood:
// 1. Checks if demo mode is enabled
// 2. Uses demo user ID (demo_user_1)
// 3. Saves to local storage
// 4. Optionally syncs to Supabase with demo ID
```

## 🧪 Testing Data Migration

Demo mode lets you test anonymous → authenticated migration:

```typescript
// 1. User fills in data without signing in (anonymous)
await Storage.savePageResponse(24, "name", "Test");

// 2. User signs in with demo account
// Migration automatically runs!
await migrateAnonymousData();

// 3. Data now belongs to demo user
// Check Supabase: user_id changed from "anon_..." to "demo_user_1"
```

## 📝 Usage Examples

### Example 1: Settings Page

```typescript
import { View, Text } from "react-native";
import DemoSignInButton from "./components/DemoSignInButton";

export default function SettingsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Settings</Text>

      <DemoSignInButton
        onSignInSuccess={() => {
          // Refresh user data
          loadUserResponses();
        }}
      />

      {/* Other settings */}
    </View>
  );
}
```

### Example 2: Conditional Rendering

```typescript
import { useState, useEffect } from "react";
import { isAuthenticated, getCurrentUser } from "./utils/auth";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await isAuthenticated();
    if (authenticated) {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }
  };

  return (
    <View>
      {user ? <Text>Welcome, {user.email}!</Text> : <DemoSignInButton />}
    </View>
  );
}
```

### Example 3: Programmatic Demo Sign-In

```typescript
import { signInWithDemoUser } from "./utils/demoAuth";

// Sign in as specific demo user
const result = await signInWithDemoUser("demo_user_1");

if (result.success) {
  console.log("Signed in as:", result.user.name);
}
```

## 🔧 Advanced Usage

### Toggle Demo Mode Programmatically

```typescript
import { toggleDemoMode, isDemoMode } from "./utils/demoAuth";

// Check current mode
const isDemo = await isDemoMode();
console.log("Demo mode:", isDemo); // true or false

// Toggle
const newState = await toggleDemoMode();
console.log("Demo mode now:", newState);
```

### Check Current Demo User

```typescript
import { getCurrentDemoUser } from "./utils/demoAuth";

const user = await getCurrentDemoUser();
if (user) {
  console.log("Current demo user:", user.name);
  console.log("Email:", user.email);
  console.log("ID:", user.id);
}
```

### Sign Out Demo User

```typescript
import { signOutDemoUser } from "./utils/demoAuth";

await signOutDemoUser();
console.log("Demo user signed out");
```

### Get Available Demo Users

```typescript
import { getDemoUsers } from "./utils/demoAuth";

const users = getDemoUsers();
users.forEach((user) => {
  console.log(`${user.name} - ${user.email}`);
});
```

## 🔐 Security Notes

### Demo Mode Security

- ⚠️ **Never use in production builds**
- ⚠️ Demo users have hardcoded IDs
- ⚠️ No real authentication happens
- ⚠️ Anyone can access demo accounts

### Best Practices

1. **Disable for production**:

   ```typescript
   // In production, force disable demo mode
   if (process.env.NODE_ENV === "production") {
     await disableDemoMode();
   }
   ```

2. **Clear demo data before release**:

   ```bash
   # Clear all local storage
   # On iOS simulator: Device → Erase All Content and Settings
   ```

3. **Use environment flags**:
   ```typescript
   const ENABLE_DEMO = __DEV__; // Only in development
   ```

## 🐛 Troubleshooting

### Demo button doesn't appear

- Demo mode might be disabled
- Try: Tap "🧪 Enable Demo Mode"

### "Demo mode is disabled" error

```typescript
import { enableDemoMode } from "./utils/demoAuth";
await enableDemoMode();
```

### Data not saving

- Demo mode works with same storage APIs
- Check console for errors
- Verify user is signed in: `getCurrentDemoUser()`

### Cannot switch to production

- Sign out demo user first
- Then toggle to production mode

## 🔄 Switching Between Demo and Production

### Development → Production Workflow

1. **Develop with demo mode**:

   ```bash
   npx expo start
   # Use demo accounts
   ```

2. **Test with real Apple Sign-In**:

   - Switch to production mode in app
   - Run on real device: `npx expo run:ios --device`
   - Use real Apple ID

3. **Before release**:
   - Remove demo mode toggle from UI
   - Force disable demo mode:
   ```typescript
   await disableDemoMode();
   ```

## 📊 Data Management

### Demo Data in Supabase

Demo users store data in Supabase like real users:

```sql
-- View demo user data
SELECT * FROM user_responses
WHERE user_id LIKE 'demo_user_%';

-- Clear demo data
DELETE FROM user_responses
WHERE user_id LIKE 'demo_user_%';
```

### Local Storage

Demo mode uses same local storage:

- Key: `@hip_hop_demo_user` - Current demo user
- Key: `@hip_hop_demo_mode` - Demo mode state
- Keys: `@hip_hop_page_*` - Page responses

## ✅ Testing Checklist

Before releasing, test:

- [ ] Demo sign-in works
- [ ] Demo sign-out works
- [ ] Data saves correctly with demo user
- [ ] Data migration works (anon → demo)
- [ ] Switch to production mode
- [ ] Real Apple Sign-In works
- [ ] Demo mode disabled in production
- [ ] Demo data cleared

## 🎓 Summary

Demo authentication provides a **fast, simple way to develop and test** user authentication features without the complexity of:

- Apple Developer account setup
- Xcode configuration
- Real device testing
- Complex auth flows

It's perfect for **rapid development** and **UI testing**, while seamlessly integrating with your production authentication system.

When you're ready for production, simply switch to production mode and enable real Apple Sign-In!

---

**Next Steps:**

1. Add `<DemoSignInButton />` to your app
2. Test with demo users
3. When ready, follow [APPLE_SIGNIN_SETUP.md](./APPLE_SIGNIN_SETUP.md) for production
