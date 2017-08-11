const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Hey, we need your opinion!</h3>
          <p>Please answer the following question!</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/survyes/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/survyes/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
