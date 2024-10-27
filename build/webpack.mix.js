let mix = require('laravel-mix')

mix.setPublicPath('build').version()

mix.options({ manifest: false })

// build web application in trunk dir.
mix.copy('_htpass', 'build/trunk/_htpass')
mix.copy('vendor', 'build/trunk/vendor')
mix.copy('public', 'build/trunk/public')
mix.copy('asset', 'build/trunk/public/asset/dist')

mix.copy([
    'LICENSE',
    'composer.json',
    'composer.lock',
    'composer.lock',
    'config.php',
    'wp-cli.yml'
], 'build/trunk/')
