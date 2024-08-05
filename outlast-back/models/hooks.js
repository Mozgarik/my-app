const handleSaveError = (errod, data, next) => {
    error.status = 400;
    next()
}

export default handleSaveError

export const runValidatorAtUpdate = function (next) {
    this.options.runValidators = true;
    next();
  }