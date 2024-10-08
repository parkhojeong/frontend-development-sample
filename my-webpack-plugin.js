class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('My Plugin', stats => {
      console.log('MyPlugin: done');
    })

    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();

      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * 이것은 BannerPlugin이 처리한 결과물입니다.',
          ' * Build Date: 2024-10-08',
          '**/'
        ].join('\n');
        return banner + '\n\n' + source;
      }


      callback();
    })
  }
}

module.exports = MyWebpackPlugin;
