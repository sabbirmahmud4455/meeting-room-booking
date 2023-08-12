# Requirements

-   PHP `8.1` or Higher

# Installation

1. Create a database and copy .env from .env.example and add database in .env file on project root (also set APP_DEBUG=false).
2. Run `composer install`
3. Run `composer install`
4. Run `php artisan key:generate`
5. Run `php artisan migrate:fresh --seed`
6. Run `npm install`
7. Run `npm run build`
8. Run `php artisan optimize:clear`
9. Run `php artisan serve`

10. Open in user browser
11. Login (Email: test@admin.com and password: 123456)

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
