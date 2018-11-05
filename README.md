# FullStackEngineerProgrammingEvaluation

## Description

This is a brief demonstration of my ability to design and develop a simple application from the back-end API data access through to the front-end responsive view. The data is provided through public APIs hosted by 1Forge. Specifically, this is a list of currency pairs. The list is in alphabetical order vertically. Typing in the filter input box below will instantly filter the list to only show the pairs containing the letters in the filter.

If you click any of the pairs, a modal will pop up showing the current quote for that currency pair. Although this was not a requirement of the evaluation, I added it to show my ability to handle data that is more complex than the simple array of strings that contains the list of currency pairs.

The application is responsive and can be viewed at any screen/window size.


## Testing
This has been tested and runs without error in the following browsers:
Chrome Version 70.0.3538.77
Firefox Version 63.0.1
Edge Version 41.16299.726.0
Internet Explorer Version 11.726.16299.0


## Before Running This Application
All references to the necessary API key point to a the file [FullStackEngineerProgrammingEvaluation\Scripts\CustomScripts\config.js] which has been removed for security purposes. In order to run this application the config.js file will need to be recreated and put in the [FullStackEngineerProgrammingEvaluation\Scripts\CustomScripts] directory. The contents of the file should be as follows:

// All non-public keys and credentials go here.
var config = {
    API_KEY: 'xxxxxx' // Put API Key Here
};

I will provide a copy of this file via email to the intended viewer of this repo. Any other user may register for their own API key here: https://1forge.com/forex-data-api

## Notes
This application is released under the unlicense license (see LICENSE). However The data from 1Forge is licensed separately under their own license which can be found here: http://1forge.com/documents/license-agreement.pdf