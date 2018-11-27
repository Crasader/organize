<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Organize\Transaction\Repositories\Contracts\TransactionRepositoryInterface;

class TransactionsController extends Controller
{
    private $transactionRepository;

    public function __construct (
        TransactionRepositoryInterface $transactionRepository
    )
	{
        $this->transactionRepository = $transactionRepository;
	}

    public function index()
    {
        return $this->transactionRepository->all();
    }
}
