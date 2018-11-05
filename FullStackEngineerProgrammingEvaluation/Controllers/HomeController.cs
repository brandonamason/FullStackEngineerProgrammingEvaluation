using System.Web.Mvc;

namespace FullStackEngineerProgrammingEvaluation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // Add forward slash to path (works in IDE either way but deployed the forward slash is required)
            if (!Request.Path.EndsWith("/"))
                return RedirectPermanent(Request.Url.ToString() + "/");
            return View();
        }
    }
}