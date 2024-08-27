/**
 * private routes that can be accessed depending on the role
 * @prop {Array} roles - Array of role names
 * @prop {String} name - Name for the sidebar menu
 * @prop {String} path - Path to the sidebar menu
 * @prop {Any} icon - Icon for the sidebar menu
 */
export const privateRoutes = [
  {
    name: "Inicio",
    path: "/account",
    roles: ["admin", "user"],
  },
  {
    name: "Sugerencias",
    path: "/account/suggestions",
    roles: ["admin"],
  },
];
