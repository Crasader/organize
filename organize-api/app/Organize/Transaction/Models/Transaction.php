<?php

namespace App\Organize\Transaction\Models;

use App\Organize\Base\Models\Base;
use App\Organize\User\Models\User;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Base
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transactions';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'activity_type',
        'description',
        'amount',
        'date',
        'done',
    ];

    protected $dates = [
        'deleted_at',
        'date',
    ];

    protected $casts = [
        'done' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
