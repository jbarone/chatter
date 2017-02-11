package actions

import (
	"os"

	"github.com/gobuffalo/buffalo"
	"github.com/gobuffalo/buffalo/middleware"
	"github.com/jbarone/chatter/models"
	"github.com/markbates/going/defaults"
)

// ENV is used to help switch settings based on where the
// application is being run. Default is "development".
var ENV = defaults.String(os.Getenv("GO_ENV"), "development")
var app *buffalo.App

// App is where all routes and middleware for buffalo
// should be defined. This is the nerve center of your
// application.
func App() *buffalo.App {
	if app == nil {
		app = buffalo.Automatic(buffalo.Options{
			Env:         ENV,
			SessionName: "_chatter_session",
		})

		app.Use(middleware.PopTransaction(models.DB))

		app.GET("/", HomeHandler)

		app.ServeFiles("/assets", assetsPath())
	}

	return app
}
