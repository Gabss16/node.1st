const logoutController = {};
logoutController.logout = async (req, res) => {

//limpiar cookies

res.clearCookie("authToken")

return res.json({message: "sesion closed"});

};

export default logoutController;