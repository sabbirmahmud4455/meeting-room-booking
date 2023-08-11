# Requirements

-   PHP `8.1` or Higher

# Installation

1. Create a database and copy .env from .env.example and add database in .env file on project root (also set APP_DEBUG=false).
2. Run `composer install`
3. Run `npm install`
4. Run `php artisan migrate:fresh --seed`
5. Run `php artisan optimize:clear`
6. Run `php artisan serve`
7. Run `npm run dev`
8. Open in user browser
9. Login (Email: test@admin.com and password: 123456)

--- DEVELOPER README ----

# Application features

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
