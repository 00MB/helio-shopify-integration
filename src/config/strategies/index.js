for (let strategy of utils.globalFile.getGlobbedFiles("./**/*.passport.js")) {
  require(path.resolve(strategy))();
}
