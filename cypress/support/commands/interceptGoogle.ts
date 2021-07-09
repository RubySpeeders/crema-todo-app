const login = (
  path?: string,
  visitOptions?: Cypress.VisitOptions,
): Cypress.Chainable<Cypress.AUTWindow> => {
  const options = {
    method: "POST",
    url: "https://www.googleapis.com/oauth2/v4/token",
    body: {
      client_id: Cypress.env("googleClientId"),
      client_secret: Cypress.env("googleClientSecret"),
      refresh_token: Cypress.env("googleRefreshToken"),
      grant_type: "refresh_token",
      audience: Cypress.env("IAP_AUDIENCE"),
    },
    // Restrict cypress from showing errored response by default.
    // It would dump the whole request object, including env values.
    failOnStatusCode: false,
  }

  return cy.request(options).then((response) => {
    console.log(options.body.client_id)
    if (response.status !== 200) {
      console.log(response)
      throw new Error(
        `Request to get auth token failed, response: ${JSON.stringify(
          response.body,
        )}`,
      )
    }

    const { id_token: token } = response.body

    const baseUrl = Cypress.config().baseUrl || ""
    // ignore requests to assets specified by their extension
    //
    // will be ignored:
    // https://example.com/file.svg
    // https://example.com/file.css?v=a12c
    const extensionsToIgnore = ["jsx?", "svg", "s?css", "jpe?g", "png"]
    const patternGroup = extensionsToIgnore
      .map((ext) => `.*\\.${ext}(\\?.*)?$`)
      .join("|")
    const matchURL = new RegExp(`^(.(?!${patternGroup}))*$`)

    cy.intercept(
      {
        url: matchURL,
      },
      (req) => {
        if (req.url.includes(baseUrl)) {
          req.headers["Authorization"] = `Bearer ${token}`
        }
      },
    )

    return cy.visit(path || "/", {
      headers: { Authorization: `Bearer ${token}` },
      ...visitOptions,
    })
  })
}

Cypress.Commands.add("login", login)
