<?php

namespace App\Providers;

use App\Organize\User\Repositories\UserRepository;
use App\Organize\User\Repositories\Contracts\UserRepositoryInterface;
use App\Organize\Transaction\Repositories\TransactionRepository;
use App\Organize\Transaction\Repositories\Contracts\TransactionRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            UserRepositoryInterface::class,
            UserRepository::class
        );

        $this->app->bind(
            TransactionRepositoryInterface::class,
            TransactionRepository::class
        );
    }
}
