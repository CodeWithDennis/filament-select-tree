<?php

namespace CodeWithDennis\FilamentSelectTree\Commands;

use Illuminate\Console\Command;

class FilamentSelectTreeCommand extends Command
{
    public $signature = 'filament-select-tree';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
