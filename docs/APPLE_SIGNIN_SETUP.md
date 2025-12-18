# Apple Sign-In Setup Guide

Complete guide to setting up Apple Sign-In (Sign in with Apple) for your Hip Hop Time Capsule iOS app.

## Why Apple Sign-In?

- ✅ **Required by Apple**: Apps using other social logins must also offer Apple Sign-In
- ✅ **Privacy-focused**: Users can hide their email
- ✅ **Seamless UX**: One-tap sign in with Face ID/Touch ID
- ✅ **Trusted**: Built-in to iOS, no third-party dependencies
- ✅ **Free**: No additional costs

## Prerequisites

- ✅ Apple Developer Account ($99/year required for App Store)
- ✅ Xcode installed
- ✅ Supabase project created

---

## Part 1: Configure Apple Developer Console

### Step 1: Create an App ID

1. Go to [Apple Developer Portal](https://developer.apple.com/account)
2. Click **Certificates, Identifiers & Profiles**
3. Click **Identifiers** → **+** button
4. Select **App IDs** → **App** → Continue
5. Fill in:
   - **Description**: `Hip Hop Time Capsule`
   - **Bundle ID**: Use your existing bundle ID (e.g., `com.yourname.hiphoptimecapsule`)
   - **Explicit** (not wildcard)
6. Scroll to **Capabilities** and check:
   - ☑️ **Sign In with Apple**
7. Click **Continue** → **Register**

### Step 2: Create a Service ID (for Supabase)

1. Still in **Identifiers**, click **+** again
2. Select **Services IDs** → Continue
3. Fill in:
   - **Description**: `Hip Hop Time Capsule Auth`
   - **Identifier**: `com.yourname.hiphoptimecapsule.auth` (must be different from App ID)
4. Click **Continue** → **Register**
5. Click on the newly created Service ID
6. Check ☑️ **Sign In with Apple**
7. Click **Configure** next to Sign In with Apple
8. Set up:
   - **Primary App ID**: Select your app's bundle ID
   - **Domains and Subdomains**:
     - Add: `nmgflgslmmtvfdoxuepd.supabase.co` (your Supabase domain)
   - **Return URLs**:
     - Add: `https://nmgflgslmmtvfdoxuepd.supabase.co/auth/v1/callback`
9. Click **Save** → **Continue** → **Save**

### Step 3: Create a Private Key

1. In the sidebar, click **Keys** → **+** button
2. Fill in:
   - **Key Name**: `Hip Hop Time Capsule Sign In`
3. Check ☑️ **Sign In with Apple**
4. Click **Configure** next to Sign In with Apple
5. Select your **Primary App ID** (the app's bundle ID)
6. Click **Save** → **Continue** → **Register**
7. **IMPORTANT**: Click **Download** to download the `.p8` file
   - ⚠️ **You can only download this once!** Save it securely
   - File name format: `AuthKey_XXXXXXXXXX.p8`
8. Note the **Key ID** (10 characters, e.g., `ABC123DEFG`)
9. Also note your **Team ID** (found in top-right of developer portal)

---

## Part 2: Configure Supabase

### Step 1: Enable Apple Auth Provider

1. Go to your Supabase project dashboard
2. Click **Authentication** → **Providers**
3. Find **Apple** and click to expand
4. Toggle **Enable Sign in with Apple**
5. Fill in the form:

**Services ID**:

```
com.yourname.hiphoptimecapsule.auth
```

(The Service ID you created in Apple Developer Console)

**Authorized Client IDs** (comma-separated):

```
com.yourname.hiphoptimecapsule, com.yourname.hiphoptimecapsule.auth
```

(Your App Bundle ID and Service ID)

**Secret Key** (requires formatting):

6. You need to create a secret from your `.p8` file. Use this Node.js script:

```javascript
// generate-apple-secret.js
const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("AuthKey_XXXXXXXXXX.p8", "utf8"); // Your downloaded .p8 file
const teamId = "YOUR_TEAM_ID"; // 10 characters from Apple Developer
const clientId = "com.yourname.hiphoptimecapsule.auth"; // Your Service ID
const keyId = "YOUR_KEY_ID"; // 10 characters from the key you created

const secret = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "180d",
  audience: "https://appleid.apple.com",
  issuer: teamId,
  subject: clientId,
  keyid: keyId,
});

console.log(secret);
```

Run it:

```bash
npm install jsonwebtoken
node generate-apple-secret.js
```

Copy the output token and paste it into the **Secret Key** field in Supabase.

7. Click **Save**

---

## Part 3: Configure iOS Project

### Step 1: Enable Sign In with Apple Capability

1. Open your project in Xcode:

```bash
cd ios
open HipHopTimeCapsule.xcworkspace
```

2. Select your project in the left sidebar
3. Select your app target (HipHopTimeCapsule)
4. Click **Signing & Capabilities** tab
5. Click **+ Capability**
6. Search for and add **Sign In with Apple**
7. Ensure your Team is selected under **Signing**

### Step 2: Update Info.plist (Already Done)

The library should auto-configure, but verify these entries exist in `ios/HipHopTimeCapsule/Info.plist`:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>com.yourname.hiphoptimecapsule</string>
    </array>
  </dict>
</array>
```

### Step 3: Rebuild iOS App

```bash
cd ios
pod install
cd ..
npx expo run:ios
```

---

## Part 4: Update App Code

### Step 1: Update Supabase Storage

The `utils/supabaseStorage.ts` file already uses the auth system. It will automatically:

- Use anonymous ID for non-authenticated users
- Use Apple user ID for authenticated users
- Migrate data when user signs in

### Step 2: Add Sign-In Button to Your App

Add the Apple Sign-In button to your main screen or settings:

```typescript
import AppleSignInButton from "./components/AppleSignInButton";

// In your component:
<AppleSignInButton
  onSignInSuccess={() => {
    console.log("User signed in!");
    // Optionally show success message or sync data
  }}
  onSignInError={(error) => {
    console.error("Sign in failed:", error);
  }}
/>;
```

The button will:

- Show "Sign in with Apple" when not authenticated
- Show "Sign Out" when authenticated
- Automatically migrate anonymous data to user account
- Handle errors gracefully

---

## Part 5: Testing

### Test on Simulator (Limited)

Simulator has limited Apple Sign-In support:

```bash
npx expo run:ios
```

- ✅ Can test UI
- ❌ Cannot actually sign in

### Test on Real Device

1. Connect your iPhone
2. In Xcode, select your device as the target
3. Click Run or:

```bash
npx expo run:ios --device
```

4. App should install and run
5. Tap "Sign in with Apple"
6. Use Face ID/Touch ID to authenticate
7. Check Supabase dashboard → Authentication → Users to see the new user

### Verify Data Migration

1. Use app without signing in (creates anonymous data)
2. Fill in some interactive fields
3. Sign in with Apple
4. Check Supabase → Table Editor → user_responses
5. Your old `anon_*` data should now have your Apple user ID

---

## Part 6: App Store Submission

### Required Setup

Apple requires specific configuration for Sign in with Apple:

1. **App Review Information**:

   - Include test account details (or explain Apple Sign-In is the only method)

2. **Privacy Policy**:

   - Must explain you use Apple Sign-In
   - State what data is stored (user responses)
   - Mention Supabase as third-party service

3. **App Store Description**:
   - Can mention "Sign in with your Apple ID"
   - Highlight privacy benefits

### Privacy Manifest

Already configured in `ios/HipHopTimeCapsule/PrivacyInfo.xcprivacy`. Ensure it includes:

```xml
<key>NSPrivacyCollectedDataTypes</key>
<array>
  <dict>
    <key>NSPrivacyCollectedDataType</key>
    <string>NSPrivacyCollectedDataTypeEmailAddress</string>
    <key>NSPrivacyCollectedDataTypeLinked</key>
    <true/>
    <key>NSPrivacyCollectedDataTypePurposes</key>
    <array>
      <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
    </array>
  </dict>
</array>
```

---

## Troubleshooting

### "User canceled" error

✅ Normal - user dismissed the sign-in prompt

### "Invalid client" error

- Check Service ID matches in both Apple Developer and Supabase
- Verify Return URLs are correct

### "Invalid private key" error

- Regenerate secret using the script above
- Ensure `.p8` file is the correct one
- Check Team ID and Key ID are correct

### Button doesn't appear

- Only works on iOS 13+
- Only appears on iOS devices (not Android or web)
- Check `isAppleSignInAvailable()` returns true

### Data not syncing after sign-in

- Check Supabase auth logs
- Verify RLS policies allow the user ID
- Check `migrateAnonymousData()` completed successfully

---

## Security Best Practices

1. **Never commit** the `.p8` private key file
2. **Keep secret token** secure (only in Supabase dashboard)
3. **Use RLS policies** in Supabase to protect user data
4. **Validate user data** server-side if you add Cloud Functions
5. **Monitor auth logs** in Supabase for suspicious activity

---

## Cost & Limits

**Apple Sign-In:**

- Free to use
- No user limits
- Requires $99/year Apple Developer membership

**Supabase Free Tier:**

- 50,000 monthly active users
- Unlimited sign-ins
- Sufficient for most apps

---

## What Users See

1. Tap "Sign in with Apple" button
2. Face ID / Touch ID prompt appears
3. Choose to share or hide email
4. One-tap confirmation
5. Instantly signed in
6. All previous data automatically migrated

**Privacy**: Users can choose to hide their real email address. Apple generates a random email that forwards to their real one.

---

## Next Steps

1. ✅ Complete Apple Developer setup
2. ✅ Configure Supabase Apple auth
3. ✅ Enable capability in Xcode
4. ✅ Test on real device
5. 🔄 Add sign-in button to your UI
6. 🔄 Submit to App Store
7. 🎉 Users can sign in with Apple!

---

**Need help?**

- [Apple Sign In Docs](https://developer.apple.com/sign-in-with-apple/)
- [Supabase Apple Auth](https://supabase.com/docs/guides/auth/social-login/auth-apple)
- [React Native Library](https://github.com/invertase/react-native-apple-authentication)
