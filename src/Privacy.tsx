import { BoringContainer } from "./styles";

export function Privacy() {
  return (
    <BoringContainer>
      <strong>Privacy Policy</strong>
      <p>
        This privacy policy applies to the Eat-a-Burrita app (hereby referred to
        as "Application") for mobile devices that was created by Yuriy Tolstykh
        (hereby referred to as "Service Provider") as a Free service. This
        service is intended for use "AS IS".
      </p>
      <br />
      <strong>Information Collection and Use</strong>
      <p>
        The Application collects and stores the following information locally on
        your device to provide its core functionality:
      </p>
      <ul>
        <li>
          <strong>Burrito log entries</strong> — timestamp, GPS coordinates,
          location name, and calorie estimate for each entry you record
        </li>
        <li>
          <strong>App preferences</strong> — dark mode setting, notification
          toggles, and ingredient checkbox state, stored via Android DataStore
        </li>
        <li>
          <strong>Device location</strong> — precise GPS coordinates (via
          ACCESS_FINE_LOCATION) and approximate location (via
          ACCESS_COARSE_LOCATION), collected when you log a burrito, search for
          nearby restaurants, or when geofence monitoring is active
        </li>
      </ul>
      <p>
        All burrito log data and preferences are stored locally on your device
        using a Room database and Android DataStore. This data is never
        transmitted to the Service Provider's servers.
      </p>
      <br />
      <strong>Location Data</strong>
      <p>
        The Application requests the following location permissions and uses them
        as described:
      </p>
      <ul>
        <li>
          <strong>Precise location (ACCESS_FINE_LOCATION)</strong> — used to
          tag the GPS coordinates of a burrito entry when you choose to record a
          location, and to determine your country code for the local recipe
          recommendation feature.
        </li>
        <li>
          <strong>Approximate location (ACCESS_COARSE_LOCATION)</strong> — used
          as a fallback for nearby restaurant searches when precise location is
          unavailable.
        </li>
        <li>
          <strong>Background location (ACCESS_BACKGROUND_LOCATION)</strong> —
          used exclusively for geofence monitoring. When enabled, the
          Application registers geofences around your top burrito locations and
          sends a local notification when you enter one. This permission is
          optional and only active if you have geofence notifications turned on
          in Settings.
        </li>
      </ul>
      <p>
        Location data is transmitted to Google Maps and Google Places APIs
        solely to display a map and search for nearby Mexican restaurants. The
        Service Provider does not retain or have access to this data. See
        Google's privacy policy for details on how Google handles location data.
      </p>
      <br />
      <strong>Camera and Photos</strong>
      <p>
        The Application requests camera access (CAMERA permission) to allow you
        to photograph food for the burrito classifier feature and to attach
        photos to your burrito log entries (photo gallery). When you use the
        burrito scanner, the photo is compressed and transmitted to the Google
        Gemini API for cloud-based image analysis. This data is subject to
        Google's privacy policy and terms of service. Photos you add to your
        log are stored locally on your device and are not transmitted by the
        Service Provider.
      </p>
      <br />
      <strong>Notifications</strong>
      <p>
        The Application requests notification permission (POST_NOTIFICATIONS) to
        send the following local notifications, all of which are optional and
        individually toggleable in Settings:
      </p>
      <ul>
        <li>
          <strong>Reminders</strong> — sent after 3 or 7 days without logging a
          burrito to encourage you to keep your streak going.
        </li>
        <li>
          <strong>Streak milestones</strong> — sent when you reach a consecutive
          day streak (7, 14, 30, or 50 days).
        </li>
        <li>
          <strong>Geofence alerts</strong> — sent when your device enters a
          geofence around one of your top burrito locations (requires background
          location permission).
        </li>
        <li>
          <strong>Weekly recap</strong> — a Monday morning summary of your
          burrito activity from the prior week.
        </li>
      </ul>
      <p>
        All notifications are generated and delivered locally by the
        Application. No notification content or delivery data is transmitted to
        the Service Provider.
      </p>
      <br />
      <strong>Background Processing</strong>
      <p>
        The Application uses Android WorkManager to run a background check every
        12 hours to determine whether a reminder, streak milestone, or weekly
        recap notification should be sent. The Application also registers a boot
        receiver (RECEIVE_BOOT_COMPLETED) to re-register geofences after your
        device restarts. No data is transmitted during these background
        operations.
      </p>
      <br />
      <strong>Third Party Access</strong>
      <p>
        The Application uses the following third-party services that may receive
        limited data:
      </p>
      <ul>
        <li>
          <strong>Google Maps SDK &amp; Places API</strong> — receives your
          location to display a map and search for nearby Mexican restaurants.
          Subject to{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Google Gemini API</strong> — receives a compressed copy of
          your photo when you use the burrito scanner feature, to perform
          cloud-based image analysis. Subject to{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Google Play Services &amp; WorkManager</strong> — used for
          geofencing, location, and background scheduling. Subject to Google's
          Privacy Policy.
        </li>
      </ul>
      <p>
        The Service Provider may disclose information only as required by law,
        to protect rights or safety, or with trusted service providers who are
        bound by confidentiality obligations.
      </p>
      <br />
      <strong>Opt-Out Rights</strong>
      <p>
        You can disable individual features at any time:
      </p>
      <ul>
        <li>
          Turn off individual notification types in the App's Settings screen.
        </li>
        <li>
          Revoke location or camera permissions in your device's system settings
          at any time.
        </li>
        <li>
          You can stop all collection of information by uninstalling the
          Application using the standard uninstall process available on your
          device or via the app marketplace.
        </li>
      </ul>
      <br />
      <strong>Data Retention Policy</strong>
      <p>
        All data (burrito log entries, preferences) is stored locally on your
        device and remains under your control. You can delete individual entries
        or reset all data from the Settings screen. Uninstalling the Application
        removes all locally stored data. If you have questions about data
        deletion, contact the Service Provider at eataburrita@gmail.com.
      </p>
      <br />
      <strong>Children</strong>
      <p>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13. The Service
        Provider does not knowingly collect personally identifiable information
        from children. Parents and guardians are encouraged to monitor their
        children's use of the Application. If you believe a child has provided
        personally identifiable information through the Application, please
        contact the Service Provider at eataburrita@gmail.com. You must be at
        least 16 years of age to consent to the processing of your personally
        identifiable information (in some countries a parent or guardian may
        consent on your behalf).
      </p>
      <br />
      <strong>Security</strong>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. Since all data is stored locally on your device,
        the security of your data depends in part on the security of your
        device. The Service Provider recommends using device-level security
        features such as screen locks and keeping your operating system updated.
      </p>
      <br />
      <strong>Changes</strong>
      <p>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </p>
      <br />
      <p>This privacy policy is effective as of 2026-06-08</p>
      <br />
      <strong>Your Consent</strong>
      <p>
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy now and as amended by
        us.
      </p>
      <br />
      <strong>Contact Us</strong>
      <p>
        If you have any questions regarding privacy while using the Application,
        or have questions about the practices, please contact the Service
        Provider via email at eataburrita@gmail.com.
      </p>
    </BoringContainer>
  );
}
