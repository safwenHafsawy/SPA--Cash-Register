//navigation handler function
const navigator = (url, classesObj, display) => {
  history.pushState(null, "", url);
  router(classesObj, display);
};

//transforming path to regex
const pathToRegex = (path) => {
  return new RegExp(
    "^" + path.replace(/\//g, "/").replace(/:\w+/, "([0-9]+)") + "$"
  );
};

//getting params from route
const getParams = (matchedRoute) => {
  return matchedRoute.isMatch.slice(1)[0];
};

//client side router
async function router({ Menu, Order, Invoice, NotFound }, display) {
  //setting all possible routes
  const routes = [
    {
      path: "/",
      view: Menu,
    },
    {
      path: "/:id",
      view: Menu,
    },
    {
      path: "/currentoreder",
      view: Order,
    },
    {
      path: "/invoice",
      view: Invoice,
    },
    {
      path: "/invoice/:id",
      view: Invoice,
    },
  ];

  const potentialRoutes = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let matchedRoute = potentialRoutes.filter((route) => route.isMatch)[0];

  if (!matchedRoute)
    matchedRoute = {
      route: { path: "/notFound", view: NotFound },
      isMatch: ["/notfound"],
    };

  const view = new matchedRoute.route.view(getParams(matchedRoute));

  display.innerHTML = await view.getHTML();
}

export { navigator, router };
