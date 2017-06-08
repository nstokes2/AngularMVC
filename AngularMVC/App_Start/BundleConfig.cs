using System.Web;
using System.Web.Optimization;

namespace AngularMVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/AngularMVC")
    .IncludeDirectory("~/Scripts/Controllers", "*.js")
    .IncludeDirectory("~/Scripts/Factories", "*.js")
    .Include("~/Scripts/AngularMVC.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
