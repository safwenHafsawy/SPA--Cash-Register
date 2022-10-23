import Menu from "./views/menu/menu.js";
import Income from "./views/income.js";
import Change from "./views/changes.js";
import NotFound from "./views/notFound.js";
import Order from "./views/order.js";

//getting DOM elements
const display = document.getElementById("display");

//navigation handler function
const navigator = (url) => {
  history.pushState(null, "", url);
  router();
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
async function router() {
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
      path: "/income",
      view: Income,
    },
    {
      path: "/income/:id",
      view: Change,
    },
    {
      path: "/drawer",
      view: Change,
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

//event listners
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); //preventing page reloading
      navigator(e.target.href);
    }

    if (e.target.hasAttribute("data-menu")) {
      const targetClasses = e.target.getAttribute("class").split(" ");
      navigator("/" + targetClasses.at(-1));
    }
  });
});
