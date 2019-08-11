import Dashboard from "../pages/Dashboard"
import About from "../pages/About"
import ContactUs from "../pages/ContactUs"
import Pricing from "../pages/Pricing"
import Privacy from "../pages/PrivacyPolicy"
import Terms from "../pages/TermsConditions"

var React = require('react')
var router = require('react-router-component')

var Locations = router.Locations
var Location = router.Location

function Router() {
  return (
    <Locations>
      <Location path="/" handler={Dashboard} />
      <Location path="/about" handler={About} />
      <Location path="/pricing" handler={Pricing} />
      <Location path="/contact" handler={ContactUs} />
      <Location path="/privacy-policy" handler={Privacy} />
      <Location path="/terms-conditions" handler={Terms} />

      {/* <Location path="/users/:username" handler={UserPage} />
      <Location path={/\/friends\/(\d+)\/(photos|wall)/} handler={FriendsPage} urlPatternOptions={['id', 'pageName']} /> */}
    </Locations>
  );
}

export default Router;