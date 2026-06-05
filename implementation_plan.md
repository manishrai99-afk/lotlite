# Implementation Plan - True Multi-Module Dashboard Refactoring

This plan details the updates to resolve the overlapping/stacked dashboard layout issue, split the visit request views, and extract individual rendering modules into clean, dedicated functions.

## Proposed Changes

We will edit the existing core files: `style.css`, `index.html`, and `app.js`.

---

### CSS Panel Visibility Fix

#### [MODIFY] [style.css](file:///c:/Users/user/Downloads/lotlite/style.css)
* Add explicit display rules for `.dashboard-panel` to ensure only the active panel is visible:
  ```css
  .dashboard-panel {
      display: none !important;
  }
  .dashboard-panel.active {
      display: block !important;
  }
  ```
  This corrects the bug where all sidebar tabs displayed content stacked on one long page.

---

### HTML Multi-Table Visit Layout

#### [MODIFY] [index.html](file:///c:/Users/user/Downloads/lotlite/index.html)
* Restructure `#panel-visits` inside the sub-panels wrapper to contain two distinct, styled tables:
  1. **Upcoming Site Visits Table**: Triggers for pending or confirmed status lists, binding `#panel-upcoming-visits-tbody`.
  2. **Past & Completed Visits Table**: Triggers for completed or closed status lists, binding `#panel-completed-visits-tbody`.

---

### JS Refactoring & Modular Render API

#### [MODIFY] [app.js](file:///c:/Users/user/Downloads/lotlite/app.js)
* Update `UI.renderDashboardInternal(activeTab)` to select the active sidebar navigation state, set title headers, display the corresponding panel, and then delegate to dedicated rendering sub-functions:
  * **`renderDashboard()`**: Renders Overview Panel (KPI Cards, SVG Chart, Activity Log, and Latest Inquiries tables).
  * **`renderProfile()`**: Renders User Profile Form details.
  * **`renderFavorites()`**: Renders bookmarked property card grids.
  * **`renderAlerts()`**: Renders query filters alert list.
  * **`renderVisits()`**: Renders upcoming vs. completed scheduled site visits.
  * **`renderMessages()`**: Renders Inbox direct chat simulation client.
  * **`renderSettings()`**: Renders theme, notifications checkbox, and preferences settings.
  * **`renderListings()`**: Renders Listings / Inventory cards.
  * **`renderLeads()`**: Renders Inquiries / Lead Pipeline table.
  * **`renderFollowUps()`**: Renders Checklist follow-up tasks table.
  * **`renderAnalytics()`**: Renders detailed conversion funnel & performance graphs.
* Ensure all callback triggers (such as `toggleFollowUp`, `approveVisit`, etc.) correctly call the updated sub-render routines to refresh the view.

---

## Verification Plan

### Automated Tests
* None. The project is a static frontend website.

### Manual Verification
1. Run local web server and verify:
   * Navigation: Clicking sidebar items displays **only one panel** at a time.
   * Visit Requests: Verify that Upcoming visits and Completed visits are split into two separate tables on `#dashboard?tab=visits`.
   * Settings: Verify settings parameters and theme switch persist.
   * Role Adaptations: Verify that all roles (Buyer, Owner, Agent) display their respective sub-views with separate function calls.
2. Push all code to the user's remote GitHub repository.
