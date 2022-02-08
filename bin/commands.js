exports.commands = [
    { shortcut: "delete folder ubuntu", command: "sudo rm -rf storage", tag: ["ubuntu"] },
    { shortcut: "nvm exec", command: "nvm exec 14.18.1 npm --version", tag: ["node"] },
    { shortcut: "git pull rebase", command: "git pull --rebase origin master", tag: ["git"] },
    { shortcut: "", command: "git push origin feat/WR-1454-newsletter-page -f", tag: ["git"] },
    { shortcut: "", command: "git log --oneline", tag: ["git"] },
    { shortcut: "", command: "git rebase -i HEAD~25", tag: ["git"] },
    { shortcut: "", command: "nvm use 14.18.1", tag: ["node", "nvm"] },
    { shortcut: "", command: "php artisan list", tag: ["laravel"] },
    { shortcut: "", command: "php artisan tinker", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:migration create_flights_table", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan schema:dump", tag: ["laravel"] },
    { shortcut: "", command: "php artisan schema:dump --prune", tag: ["laravel"] },
    { shortcut: "", command: "php artisan migrate", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:status", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate --force", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:rollback", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:rollback --step=5", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:reset", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:refresh --seed", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:refresh --step=5", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:fresh", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "php artisan migrate:fresh --seed --step=5", tag: ["laravel", "migrate"] },
    { shortcut: "", command: "npm list -g --depth 0", tag: ["npm"] },
    { shortcut: "", command: 'curl -s "https://laravel.build/example-app" | bash', tag: ["laravel"] },
    { shortcut: "", command: "./vendor/bin/sail up", tag: ["laravel"] },
    { shortcut: "", command: 'curl -s "https://laravel.build/example-app?with=mysql,redis" | bash', tag: ["laravel"] },
    { shortcut: "", command: "composer create-project laravel/laravel example-app", tag: ["laravel"] },
    { shortcut: "", command: "php artisan serve", tag: ["laravel"] },
    { shortcut: "", command: "php artisan down", tag: ["laravel"] },
    { shortcut: "", command: "php artisan down --refresh=15", tag: ["laravel"] },
    { shortcut: "", command: "php artisan down --retry=60", tag: ["laravel"] },
    { shortcut: "", command: 'php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"', tag: ["laravel"] },
    { shortcut: "", command: 'php artisan down --render="errors::503"', tag: ["laravel"] },
    { shortcut: "", command: "php artisan down --redirect=/", tag: ["laravel"] },
    { shortcut: "", command: "php artisan up", tag: ["laravel"] },
    { shortcut: "", command: "php artisan config:cache", tag: ["laravel"] },
    { shortcut: "", command: "php artisan view:cache", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:provider RiakServiceProvider", tag: ["laravel"] },
    { shortcut: "", command: "php artisan route:cache", tag: ["laravel"] },
    { shortcut: "", command: "php artisan route:clear", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:middleware EnsureTokenIsValid", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:controller PhotoController --resource", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:controller PhotoController --model=Photo --resource", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:controller PhotoController --model=Photo --resource --requests", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:controller PhotoController --api", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:component Alert", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:component Forms/Input", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:component Alert --inline", tag: ["laravel"] },
    { shortcut: "", command: "php artisan session:table", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:request StorePostRequest", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:rule Uppercase", tag: ["laravel"] },
    { shortcut: "", command: "php artisan list", tag: ["laravel"] },
    { shortcut: "", command: "php artisan tinker", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:command SendEmails", tag: ["laravel"] },
    { shortcut: "", command: "php artisan mail:send 1 --queue", tag: ["laravel"] },
    { shortcut: "", command: "php artisan mail:send 1 --queue=default", tag: ["laravel"] },
    { shortcut: "", command: "mail:send {user} {--queue=default}", tag: ["laravel"] },
    { shortcut: "", command: "mail:send {user} {--Q|queue}", tag: ["laravel"] },
    { shortcut: "", command: "php artisan mail:send foo bar", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:channel OrderChannel", tag: ["laravel"] },
    { shortcut: "", command: "npm run dev", tag: ["laravel"] },
    { shortcut: "", command: "npm run prod", tag: ["laravel"] },
    { shortcut: "", command: "php artisan event:generate", tag: ["laravel"] },
    { shortcut: "", command: "npm run watch", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:event PodcastProcessed", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:listener SendPodcastNotification --event=PodcastProcessed", tag: ["laravel"] },
    { shortcut: "", command: "php artisan storage:link", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:mail OrderShipped", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:notification InvoicePaid", tag: ["laravel"] },
    { shortcut: "", command: "php artisan queue:work --queue=high,default", tag: ["laravel"] },
    { shortcut: "", command: "php artisan queue:table", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:job ProcessPodcast", tag: ["laravel"] },
    { shortcut: "", command: "php artisan queue:work --tries=3", tag: ["laravel"] },
    { shortcut: "", command: "php artisan queue:work --timeout=30", tag: ["laravel"] },
    { shortcut: "", command: "php artisan schedule:list", tag: ["laravel"] },
    { shortcut: "", command: "php artisan schedule:work", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:policy PostPolicy", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:policy PostPolicy --model=Post", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:seeder UserSeeder", tag: ["laravel"] },
    { shortcut: "", command: "php artisan db:seed", tag: ["laravel"] },
    { shortcut: "", command: "php artisan db:seed --class=UserSeeder", tag: ["laravel"] },
    { shortcut: "", command: "php artisan migrate:fresh --seed", tag: ["laravel"] },
    { shortcut: "", command: "php artisan db:seed --force", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --migration", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --factory", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight -f", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --seed", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight -s", tag: ["laravel"] },    
    { shortcut: "", command: "php artisan make:model Flight --controller", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight -c", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --controller --resource --requests", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight -crR", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --policy", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight -mfsc", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Flight --all", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:model Member --pivot", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:observer UserObserver --model=User", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:resource User --collection", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:resource UserCollection", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:test UserTest", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:test UserTest --unit", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:test UserTest --pest", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:test UserTest --unit --pest", tag: ["laravel"] },
    { shortcut: "", command: "./vendor/bin/phpunit", tag: ["laravel"] },
    { shortcut: "", command: "php artisan test", tag: ["laravel"] },
    { shortcut: "", command: "php artisan test --testsuite=Feature --stop-on-failure", tag: ["laravel"] },
    { shortcut: "", command: "php artisan test --parallel", tag: ["laravel"] },
    { shortcut: "", command: "php artisan test --parallel --processes=4", tag: ["laravel"] },
    { shortcut: "", command: "php artisan test --parallel --recreate-databases", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:install", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:chrome-driver", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:chrome-driver 86", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:chrome-driver --all", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:chrome-driver --detect", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:make LoginTest", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk:fails", tag: ["laravel"] },
    { shortcut: "", command: "php artisan dusk --group=foo", tag: ["laravel"] },
    { shortcut: "", command: "php artisan make:factory PostFactory", tag: ["laravel"] },
];