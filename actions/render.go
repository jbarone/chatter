package actions

import (
	"net/http"

	rice "github.com/GeertJohan/go.rice"
	"github.com/gobuffalo/buffalo/render"
	"github.com/gobuffalo/buffalo/render/resolvers"
)

var r *render.Engine

func init() {
	r = render.New(render.Options{
		CacheTemplates: ENV == "production",
		FileResolverFunc: func() resolvers.FileResolver {
			return &resolvers.RiceBox{
				Box: rice.MustFindBox("../templates"),
			}
		},
	})
}

func assetsPath() http.FileSystem {
	box := rice.MustFindBox("../public/assets")
	return box.HTTPBox()
}
