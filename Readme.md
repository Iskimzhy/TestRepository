Test task.

Used: 
Selenium with Protractor framework.

Installation:
just clone and run "npm install" in the root directory(dont forget to run the "webdriver-manager start" command, before running tests).
run tests: "npm test"

NOTE 1:
- Accomplished tests for the part that is working and for the cases I understand.
- For better test-case coverage I need to have more understanding of the logic for the page.
- I didn't add the reporter, but if needed - allure reporter is easy to add and to use.

NOTE 2:
This web site is not very friendly to automation testing:
- Not all the functionality were implemented and lots of information are ebsent. Some menus wasn't even available(500 Internal Server Error).
- ID for elements is not implemented and classes are named without any logic, even from development side.
- Though this web site is for test purposes - from time to time the responce time was too high.

All of the mentioned above means that automation cases for this page may be flacky and can fail in case of some changes from the code side.
