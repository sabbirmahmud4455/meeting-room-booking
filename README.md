# Requirements

-   PHP `8.1` or Higher

# Installation

1. Create a database & user and add them in .env file on project root (also set APP_DEBUG=false).
2. Run `composer install`
3. Run `php artisan migrate:fresh --seed`
4. Run `php artisan optimize:clear`
5. Run `npm run dev`
6. Open in user browser
7. Login (Email: test@admin.com and password: 123456)

--- DEVELOPER README ----

# Model Relations

-   Authentication
    -   Login
    -   Registration
    -   Logout

-   Home
    -   Rooms List
    -   Rooms Wise Meeting Schedule Calendar 

-   My Meetings
    -   My Meetings
    -   Create New Meetings
    -   My Meetings Details
