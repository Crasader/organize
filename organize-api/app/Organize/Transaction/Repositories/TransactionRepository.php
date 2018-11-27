<?php

namespace App\Organize\Transaction\Repositories;

use App\Organize\Base\Repositories\BaseRepository;
use App\Organize\Transaction\Repositories\Contracts\TransactionRepositoryInterface;
use App\Organize\Transaction\Models\Transaction;

class TransactionRepository extends BaseRepository implements TransactionRepositoryInterface
{
    public function __construct(Transaction $transaction)
    {
        $this->model = $transaction;
    }
}
