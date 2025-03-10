// This module handles UI messages.
const displayController = (() => {
  const renderMessage = (message) => {
    document.querySelector("#message").innerHTML = message;
  }
  return { renderMessage };
})();
export default displayController;
